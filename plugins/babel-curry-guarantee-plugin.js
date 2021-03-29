exports.curryGuaranteePlugin = ({ types: t }) => {
  const curryFnName = /^_(\d)$/
  const lengthId = t.identifier('length')
  const bindId = t.identifier('bind')

  const callExpression = path => {
    const property = path.node.callee.property

    if (!curryFnName.test(property && property.name)) {
      return
    }

    const callFn = path.node.arguments[0]
    const callArgs = path.node.arguments.slice(1)

    const arityLiteral = t.numericLiteral(callArgs.length)
    const argIds = callArgs.map(init => {
      if (t.isIdentifier(init)) {
        return init
      }

      const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id)
      path.scope.push({ id, init })
      return id
    })

    path.replaceWith(
      t.conditionalExpression(
        t.binaryExpression('===', t.memberExpression(callFn, lengthId), arityLiteral),
        t.callExpression(callFn, argIds),
        t.callExpression(t.memberExpression(callFn, bindId), [t.nullLiteral()].concat(argIds)),
      ),
    )
  }

  return {
    visitor: {
      CallExpression: callExpression,
    },
  }
}
