import { API, ASTPath } from 'jscodeshift'

const findParentFunction = (p: ASTPath<any>) => {
  if (p.value.type === 'FunctionDeclaration' || p.value.type === 'FunctionExpression') {
    return p
  }

  return findParentFunction(p.parent)
}

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const component = root.find(j.FunctionDeclaration).filter(p => {
    return /stacks_component/i.test(p.value.id.name)
  })

  component.forEach(p => {
    const root = j(p.value)
    const propsMap = {}

    root
      .find(j.MemberExpression, {
        object: {
          name: 'Props',
        },
      })
      .forEach(p => {
        const propName = p.parent.value.id && p.parent.value.id.name

        root
          .find(j.Identifier, {
            name: propName,
          })
          .filter(id => {
            return (
              id.parent.value.type !== 'MemberExpression' &&
              id.parent.value.type !== 'BinaryExpression'
            )
          })
          .forEach(id => {
            if (id.value.name in propsMap) {
              propsMap[id.value.name] = propsMap[id.value.name] + 1
              return
            }

            propsMap[id.value.name] = 0
          })
      })

    root
      .find(j.IfStatement)
      .filter(p => {
        return (
          p.value.test.type === 'BinaryExpression' &&
          p.value.test.operator === '!==' &&
          p.value.test.right.type === 'Identifier' &&
          p.value.test.right.name === 'undefined'
        )
      })
      .forEach(p => {
        if (p.value.consequent.type === 'BlockStatement' && p.value.consequent.body.length === 1) {
          const [exp] = p.value.consequent.body

          if (
            exp.type === 'ExpressionStatement' &&
            exp.expression.type === 'AssignmentExpression' &&
            exp.expression.left.type === 'MemberExpression' &&
            exp.expression.left.object.type === 'Identifier' &&
            exp.expression.left.property.type === 'Identifier'
          ) {
            const objName = exp.expression.left.object.name
            const propName = exp.expression.left.property.name
            let valueName = undefined

            if (
              exp.expression.right.type === 'CallExpression' &&
              exp.expression.right.arguments.length === 1 &&
              exp.expression.right.arguments[0].type === 'Identifier'
            ) {
              valueName = exp.expression.right.arguments[0].name
            } else if (
              exp.expression.right.type === 'CallExpression' &&
              exp.expression.right.callee.type === 'FunctionExpression'
            ) {
              valueName = propName
            } else if (exp.expression.right.type === 'Identifier') {
              valueName = exp.expression.right.name
            }

            if (!valueName) {
              return
            }

            const parent = findParentFunction(p.parent)

            j(parent.value)
              .find(j.VariableDeclarator, {
                id: {
                  name: objName,
                },
              })
              .at(0)
              .forEach(v => {
                if (v.value.init && v.value.init.type === 'ObjectExpression') {
                  const isPropName = j(parent.value)
                    .find(j.VariableDeclarator, {
                      id: {
                        name: valueName,
                      },
                    })
                    .filter(v => v.value.init.type === 'MemberExpression')
                    .at(0)
                    .size()

                  const value =
                    valueName in propsMap && isPropName
                      ? j.memberExpression(j.identifier('Props'), j.identifier(valueName))
                      : j.identifier(valueName)

                  v.value.init.properties = v.value.init.properties.concat([
                    j.objectProperty(j.identifier(propName), value),
                  ])

                  if (valueName in propsMap && isPropName && propsMap[valueName] === 1) {
                    delete propsMap[valueName]
                  }
                }
              })

            p.prune()
          }
        }
      })

    root
      .find(j.VariableDeclarator)
      .filter(p => {
        return (
          p.value.init.type === 'MemberExpression' &&
          p.value.init.object.type === 'Identifier' &&
          p.value.init.object.name === 'Props' &&
          !Object.keys(propsMap).some(
            key =>
              p.value.init.type === 'MemberExpression' &&
              p.value.init.property.type === 'Identifier' &&
              new RegExp(p.value.init.property.name).test(key),
          )
        )
      })
      .map(p => p.parent)
      .remove()
  })

  return root.toSource()
}

export default transform
