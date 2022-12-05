import * as React from 'react'

import { A, O, pipe } from '@mobily/ts-belt'

import { Breakpoint, Breakpoints, Direction, ResponsiveProp } from '../types'

type DefaultBreakpoints = readonly [Breakpoint, Breakpoint, Breakpoint]

export const defaultBreakpoints = <DefaultBreakpoints>[
  ['mobile', 0],
  ['tablet', 768],
  ['desktop', 992],
]

// eslint-disable-next-line functional/immutable-data
export const makeBreakpoints = A.sort<Breakpoint>((a, b) => {
  return (b[1] - a[1]) | 0
})

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const randomColor = () => {
  const xs = A.makeWithIndex(3, _index => {
    return randomInt(0, 255)
  })
  const colors = A.join(A.map(xs, String), ', ')

  return `rgba(${colors}, 0.2)`
}

export const negate = (value: number | undefined) => {
  return value !== undefined ? value * -1 : undefined
}

export const normalizeResponsiveProp = <T>(responsiveProp: ResponsiveProp<T>): readonly T[] => {
  if (
    typeof responsiveProp === 'string' ||
    typeof responsiveProp === 'number' ||
    typeof responsiveProp === 'boolean'
  ) {
    return [responsiveProp]
  }

  if (responsiveProp && Array.isArray(responsiveProp) && responsiveProp.length) {
    return responsiveProp
  }

  console.warn(`[@mobily/stacks]: invalid responsive prop: ${JSON.stringify(responsiveProp)}`)

  return []
}

export const resolveDirectionAndReverse = (direction?: Direction, reversed?: boolean) => {
  switch (true) {
    case direction === 'row' && reversed:
      return 'row-reverse'
    case direction === 'row-reverse' && reversed:
      return 'row'
    case direction === 'column' && reversed:
      return 'column-reverse'
    case direction === 'column-reverse' && reversed:
      return 'column'
    default:
      return direction
  }
}

export const resolveCurrentBreakpoint = (currentWidth: number, breakpoints: Breakpoints) => {
  const defaultBreakpoint = defaultBreakpoints[0]
  const breakpoint = pipe(
    breakpoints,
    A.getBy(breakpoint => {
      return currentWidth > breakpoint[1]
    }),
    O.getWithDefault(defaultBreakpoint),
  )

  return breakpoint[0]
}

type ResolveResponsiveProp = {
  <T>(responsiveProp: ResponsiveProp<T>, currentWidth: number, breakpoints: Breakpoints): T
  <T>(
    responsiveProp: ResponsiveProp<T> | undefined,
    currentWidth: number,
    breakpoints: Breakpoints,
  ): T | undefined
}

export const resolveResponsiveProp: ResolveResponsiveProp = <T>(
  responsiveProp: ResponsiveProp<T> | undefined,
  currentWidth: number,
  breakpoints: Breakpoints,
) => {
  if (responsiveProp !== undefined) {
    const normalizedResponsiveProp = normalizeResponsiveProp(responsiveProp)

    const defaultValue = normalizedResponsiveProp[0]

    if (normalizedResponsiveProp.length === 1) {
      return defaultValue
    }

    return pipe(
      breakpoints,
      A.getIndexBy(breakpoint => {
        return currentWidth > breakpoint[1]
      }),
      O.flatMap(index => {
        const lastIndex = breakpoints.length - 1
        return A.get(normalizedResponsiveProp, (lastIndex - index) | 0)
      }),
      O.getWithDefault(defaultValue),
    )
  }

  return undefined
}

export const flatten = (children: React.ReactNode): ReturnType<typeof React.Children.toArray> => {
  return A.reduce(
    React.Children.toArray(children),
    <ReturnType<typeof React.Children.toArray>>[],
    (acc, child) => {
      if (React.isValidElement(child) && child.type === React.Fragment) {
        return acc.concat(flatten(child.props.children))
      }
      // eslint-disable-next-line functional/immutable-data
      acc.push(child)
      return acc
    },
  )
}
