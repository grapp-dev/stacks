exports.rewriteProps = (j, source) => {
  const componentRe = /stacks_component/i

  return j(source)
    .find(j.FunctionDeclaration)
    .filter(p => {
      return componentRe.test(p.value.id.name)
    })
    .forEach(p => {
      const root = j(p.value)
      const props = []
      const space = {
        current: false
      }

      root
        .find(j.IfStatement)
        .filter(p => {
          return p.value.test.operator === '!==' && p.value.test.right.name === 'undefined'
        })
        .forEach(p => {
          space.current = space.current || p.value.test.left.name === 'space'

          if (p.value.test.left.name !== 'space') {
            props.push(p.value.test.left.name)
          }
        })
        .remove()

      root
        .find(j.VariableDeclarator, {
          id: { type: 'Identifier' },
          init: { type: 'MemberExpression', object: { type: 'Identifier', name: 'Props' } },
        })
        .filter(p => {
          return props.includes(p.value.init.property.name)
        })
        .remove()

      root
        .find(j.VariableDeclarator, {
          id: { name: 'tmp' },
          init: { type: 'ObjectExpression' },
        })
        .map(p => {
          return p.get('init')
        })
        .replaceWith(p => {
          const xs = space.current ? ['space', ...props] : props
          const componentProps = xs.map(propName => {
            return j.objectProperty(
              j.stringLiteral(propName),
              j.memberExpression(j.identifier('Props'), j.identifier(propName)),
            )
          })
          return j.objectExpression(p.value.properties.concat(componentProps))
        })
    })
    .toSource()
}
