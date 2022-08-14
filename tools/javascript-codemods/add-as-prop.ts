import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const component = root.find(j.FunctionDeclaration).filter(p => {
    if (p.value.id?.type === 'Identifier') {
      return /stacks_component_box/i.test(p.value.id.name)
    }

    return false
  })

  component.forEach(p => {
    const root = j(p.value)

    root.find(j.ReturnStatement).forEach(p => {
      const statement = j(p.value)

      statement
        .find(j.CallExpression, {
          callee: {
            property: {
              name: 'createElement',
            },
          },
        })
        .forEach(p => {
          const arg = p.value.arguments.find(arg => {
            return (
              arg.type === 'MemberExpression' &&
              arg.property.type === 'Identifier' &&
              arg.property.name === 'View'
            )
          })

          if (arg && arg.type === 'MemberExpression') {
            p.value.arguments = [
              j.logicalExpression(
                '||',
                j.memberExpression(j.identifier('Props'), j.identifier('as')),
                arg,
              ),
              ...p.value.arguments.slice(1),
            ]
          }
        })
    })
  })

  return root.toSource()
}

export default transform
