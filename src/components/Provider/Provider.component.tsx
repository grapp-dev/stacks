import * as React from 'react'

import { Breakpoints, Spacing } from '../../types'
import { Context } from '../../context'
import { defaultBreakpoints, makeBreakpoints } from '../../utils'

type Props = {
  readonly children: React.ReactNode
  readonly breakpoints?: Breakpoints
  readonly spacing?: Spacing
  readonly debug?: boolean
}

export const StacksProvider = (props: Props) => {
  const { children, breakpoints = defaultBreakpoints, spacing = 4, debug = false } = props

  return (
    <Context.Provider
      value={{
        breakpoints: makeBreakpoints(breakpoints),
        spacing,
        debug,
      }}
    >
      {children}
    </Context.Provider>
  )
}
