exports.replaceLiterals = (j, source) => {
  const literals = [
    ['x12', '1/2'],
    ['x13', '1/3'],
    ['x23', '2/3'],
    ['x14', '1/4'],
    ['x34', '3/4'],
    ['x15', '1/5'],
    ['x25', '2/5'],
    ['x35', '3/5'],
    ['x45', '4/5'],
    ['rowReverse', 'row-reverse'],
    ['columnReverse', 'column-reverse'],
  ]
  const check = p => ([search]) => {
    return p.value.value === search
  }

  return j(source)
    .find(j.Literal)
    .filter(p => {
      return literals.some(check(p))
    })
    .replaceWith(p => {
      const [, value] = literals.find(check(p))
      return j.stringLiteral(value)
    })
    .toSource()
}
