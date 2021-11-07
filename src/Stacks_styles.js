export const reset = true

export const checkAbsoluteFill = value => {
  if (value === true) {
    return undefined
  }

  return value === undefined ? 0 : value
}
