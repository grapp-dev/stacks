import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const literals: [string, string][] = [
    ['x12', '1/2'],
    ['x13', '1/3'],
    ['x23', '2/3'],
    ['x14', '1/4'],
    ['x34', '3/4'],
    ['x15', '1/5'],
    ['x25', '2/5'],
    ['x35', '3/5'],
    ['x45', '4/5'],
    ['noHideDescendants', 'no-hide-descendants'],
    ['boxNone', 'box-none'],
    ['boxOnly', 'box-only'],
    ['rowReverse', 'row-reverse'],
    ['columnReverse', 'column-reverse'],
  ]
  const equalName =
    (name: string) =>
    ([search]: [string, string]) => {
      return name === search
    }

  root
    .find(j.TSLiteralType)
    .filter(p => {
      return (
        p.value.literal.type === 'StringLiteral' && literals.some(equalName(p.value.literal.value))
      )
    })
    .replaceWith(p => {
      if (p.value.literal.type === 'StringLiteral') {
        const [, value] = literals.find(equalName(p.value.literal.value))
        return j.tsLiteralType(j.stringLiteral(value))
      }

      return p.value
    })

  return root.toSource()
}

export default transform
