export const normalizeResponsiveProp = value => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [value, value, value]
  }

  if ('length' in value) {
    const { length } = value

    if (length === 2) {
      const [mobileValue, tabletValue] = value
      return [mobileValue, tabletValue, tabletValue]
    }

    if (length === 3) {
      return value
    }

    if (length === 1) {
      const [mobileValue] = value
      return [mobileValue, mobileValue, mobileValue]
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`)
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`)
}
