import * as React from 'react'

export const normalizeResponsiveProp = value => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [value]
  }

  if (value && value.length) {
    return value
  }

  console.warn(`Invalid responsive prop value: ${JSON.stringify(value)}`)

  return []
}

export const negateSpace = value => {
  if (typeof value === 'number') {
    return [value * -1]
  }

  if (value && value.length) {
    const l = value.length
    const xs = new Array(l)

    for (var i = 0; i < l; ++i) {
      xs[i] = value[i] * -1
    }

    return xs
  }

  return undefined
}

export const unset = Object.freeze(true)

export const unsetFillViewValue = value => {
  if (value === unset) {
    return undefined
  }

  return value === undefined ? 0 : value
}

export const isColumnComponent = node => {
  return typeof node === 'object' && 'type' in node && node.type.__isColumn__
}

export const isRowComponent = node => {
  return typeof node === 'object' && 'type' in node && node.type.__isRow__
}

export const markAsColumn = node => {
  node.__isColumn__ = true
}

export const markAsRow = node => {
  node.__isRow__ = true
}
