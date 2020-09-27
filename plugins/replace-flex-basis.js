const flex = [
  ['x12', '1/2'],
  ['x13', '1/3'],
  ['x23', '2/3'],
  ['x14', '1/4'],
  ['x34', '3/4'],
  ['x15', '1/5'],
  ['x25', '2/5'],
  ['x35', '3/5'],
  ['x45', '4/5'],
]

const visitor = (path, state) => {
  flex.forEach(([search, replace]) => {
    if (path.node.type === 'StringLiteral') {
      if (path.node.value === search) {
        path.node.value = replace
      }
    }
  })
}

export const replaceFlexBasis = () => {
  return {
    visitor: {
      StringLiteral: visitor,
      TemplateElement: visitor,
    },
  }
}
