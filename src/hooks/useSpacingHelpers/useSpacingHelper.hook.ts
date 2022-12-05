import * as React from 'react'

import { useStacks } from '../useStacks'

type SpacingHelper = {
  (value: number): number
  (value: number | undefined): number | undefined
}

export const useSpacingHelpers = () => {
  const { spacing } = useStacks()

  const multiply = <SpacingHelper>React.useCallback(
    value => {
      if (value) {
        return value * spacing
      }

      return undefined
    },
    [spacing],
  )

  const divide = <SpacingHelper>React.useCallback(
    (value: number | undefined) => {
      if (value) {
        return value / spacing
      }

      return undefined
    },
    [spacing],
  )

  return {
    multiply,
    divide,
  }
}
