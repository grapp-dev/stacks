exports.rewriteProps = ({ types: t }) => {
  const componentRe = /_component_/
  const props = {}
  const takeComponentName = path => {
    const component = path.findParent(p => componentRe.test(p.node.id && p.node.id.name))
    return component && component.node.id.name
  }
  const updateProps = (componentName, propName) => {
    if (!props[componentName]) {
      props[componentName] = []
    }

    if (!props[componentName].find(prop => prop === propName)) {
      props[componentName].push(propName)
    }
  }
  const takeComponentProps = componentName => props[componentName] || []

  const ifStatement = path => {
    if (!t.isBinaryExpression(path.node.test, { operator: '!==' })) {
      return
    }

    const { body } = path.node.consequent
    const isOptionOrFn = body.some(statement => {
      const isOptionOrFn =
        t.isIdentifier(statement.expression.left.object, { name: 'tmp' }) &&
        (t.isIdentifier(statement.expression.right.callee.object, { name: 'Caml_option' }) ||
          t.isCallExpression(statement.expression.right))

      if (isOptionOrFn) {
        const componentName = takeComponentName(path)
        updateProps(componentName, statement.expression.left.property.name)
      }

      return isOptionOrFn
    })

    if (isOptionOrFn) {
      path.remove()
    }
  }

  const variableDeclaration = path => {
    const componentName = takeComponentName(path)
    const hasProp = path.node.declarations.some(declaration => {
      return takeComponentProps(componentName).find(propName => {
        return (
          t.isMemberExpression(declaration.init) &&
          t.isIdentifier(declaration.init.object, { name: 'Props' }) &&
          t.isIdentifier(declaration.init.property, { name: propName })
        )
      })
    })

    if (hasProp) {
      path.remove()
    }
  }

  const callExpression = path => {
    if (
      t.isMemberExpression(path.node.callee) &&
      t.isIdentifier(path.node.callee.property, { name: 'createElement' }) &&
      path.get('arguments.1').isIdentifier({ name: 'tmp' })
    ) {
      const componentName = takeComponentName(path)
      const componentProps = takeComponentProps(componentName).map(propName => {
        return t.objectProperty(
          t.stringLiteral(propName),
          t.memberExpression(t.identifier('Props'), t.identifier(propName)),
        )
      })

      path.node.arguments[1] = t.callExpression(
        t.memberExpression(t.identifier('Object'), t.identifier('assign')),
        [t.objectExpression([]), t.objectExpression(componentProps), t.identifier('tmp')],
      )
    }
  }

  return {
    visitor: {
      IfStatement: {
        enter: ifStatement,
      },
      VariableDeclaration: {
        exit: variableDeclaration,
      },
      CallExpression: {
        exit: callExpression,
      },
    },
  }
}
