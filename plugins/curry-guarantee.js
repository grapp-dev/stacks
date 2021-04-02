exports.curryGuarantee = (j, source) => {
  const curryRe = /^_(\d)$/

  return j(source)
    .find(j.CallExpression)
    .filter(p => {
      const prop = p.value.callee.property
      return curryRe.test(prop && prop.name)
    })
    .replaceWith(p => {
      const callFn = p.value.arguments[0]
      const callArgs = p.value.arguments.slice(1)

      return j.callExpression(callFn, callArgs)
    })
    .toSource()
}
