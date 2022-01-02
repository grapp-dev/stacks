export const reset = true

export const mapFillViewEdge = value => {
  if (value === true) {
    return undefined
  }

  return value === undefined ? 0 : value
}
