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

export const reset = Object.freeze(true)

export const resetFillViewValue = value => {
  if (value === reset) {
    return undefined
  }

  return value === undefined ? 0 : value
}

export const isColumnComponent = node =>
  typeof node === 'object' && 'type' in node && node.type.__isColumn__

export const isRowComponent = node =>
  typeof node === 'object' && 'type' in node && node.type.__isRow__

export const flattenChildren = children => {
  const childrenArray = React.Children.toArray(children)
  return childrenArray.reduce((flatChildren, child) => {
    if (child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children))
    }

    if (child !== null) {
      flatChildren.push(child)
    }

    return flatChildren
  }, [])
}
