import * as React from 'react'

import { useStacks } from '../useStacks'

export const useSpacingHelpers = () => {
  const { spacing } = useStacks()

  const multiply = React.useCallback(
    (value: number | undefined) => {
      if (value) {
        return value * spacing
      }

      return undefined
    },
    [spacing],
  )

  const divide = React.useCallback(
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
