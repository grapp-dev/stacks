import * as React from 'react'

import { ResponsiveProp } from '../../types'
import { resolveResponsiveProp } from '../../utils'
import { useStacks } from '../useStacks'
import { useWindowDimensions } from '../useWindowDimensions'

export const useResponsiveProp = () => {
  const { breakpoints } = useStacks()
  const dimensions = useWindowDimensions()

  return React.useCallback(
    <T>(responsiveProp: ResponsiveProp<T>) => {
      return resolveResponsiveProp(responsiveProp, dimensions.width, breakpoints)
    },
    [breakpoints, dimensions],
  )
}
