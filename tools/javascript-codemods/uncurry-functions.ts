import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const depth = new Array(3).fill(0)

  depth.forEach(_ => {
    root
      .find(j.CallExpression)
      .filter(p => {
        if (
          p.value.callee.type === 'MemberExpression' &&
          p.value.callee.property.type === 'Identifier'
        ) {
          return /^_[0-9]$/.test(p.value.callee.property.name)
        }

        return false
      })
      .replaceWith(p => {
        const fn = p.value.arguments[0]
        const args = p.value.arguments.slice(1)

        if (fn && (fn.type === 'Identifier' || fn.type === 'MemberExpression')) {
          return j.callExpression(fn, args)
        }

        return p.value
      })

    root
      .find(j.CallExpression)
      .filter(p => {
        if (
          p.value.callee.type === 'MemberExpression' &&
          p.value.callee.property.type === 'Identifier'
        ) {
          return /^__[0-9]$/.test(p.value.callee.property.name)
        }

        return false
      })
      .replaceWith(p => {
        const fn = p.value.arguments[0]

        if (fn && (fn.type === 'Identifier' || fn.type === 'MemberExpression')) {
          return fn
        }

        return p.value
      })
  })

  return root.toSource()
}

export default transform
