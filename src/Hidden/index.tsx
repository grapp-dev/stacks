import React from 'react'

import { useBreakpoint } from '../context'
import { isCurrentBreakpointBelow, isCurrentBreakpointAbove, Breakpoint } from '../utils'

export interface Props {
  children: React.ReactNode
  below?: Exclude<Breakpoint, 'mobile'>
  above?: Exclude<Breakpoint, 'desktop'>
}

export const Hidden = (props: Props) => {
  const { children, below, above } = props
  const { currentBreakpoint } = useBreakpoint()

  if (typeof below === 'undefined' && typeof above === 'undefined') {
    return null
  }

  return isCurrentBreakpointBelow(currentBreakpoint, below) ||
    isCurrentBreakpointAbove(currentBreakpoint, above) ? null : (
    <>{children}</>
  )
}
