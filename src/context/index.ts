import * as React from 'react'

import { Breakpoints, Spacing } from '../types'
import { defaultBreakpoints } from '../utils'

type Props = {
  readonly debug: boolean
  readonly spacing: Spacing
  readonly breakpoints: Breakpoints
}

export const Context = React.createContext<Props>({
  debug: false,
  spacing: 4,
  breakpoints: defaultBreakpoints,
})