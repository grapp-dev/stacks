import React, { createContext, useContext, useMemo } from 'react'

import {
  randomColor,
  Breakpoints,
  resolveResponsivePropFactory,
  resolveCurrentBreakpoint,
  useWindowDimensions,
} from './utils'

interface Config {
  spacing: number
  debug: boolean
  breakpoints: Breakpoints
}

interface Props {
  children: React.ReactNode
  spacing?: number
  debug?: boolean
  breakpoints?: Partial<Breakpoints>
}

const defaultBreakpoints = { tablet: 768, desktop: 992 }

const Context = createContext<Config>({
  spacing: 4,
  debug: false,
  breakpoints: defaultBreakpoints,
})

type UseSpacing = {
  (space: number): number
  (): (space: number) => number
}

export const useStacks = () => useContext(Context)

export const useSpacing: UseSpacing = (space?: number): any => {
  const { spacing } = useStacks()
  const multiply = (value: number) => value * spacing

  return typeof space === 'undefined' ? multiply : multiply(space)
}

export const useBreakpoint = () => {
  const { width } = useWindowDimensions()
  const { breakpoints } = useStacks()
  const options = { width, breakpoints }
  const resolveResponsiveProp = resolveResponsivePropFactory(options)
  const currentBreakpoint = resolveCurrentBreakpoint(options)

  return { resolveResponsiveProp, currentBreakpoint }
}

export const useDebugStyle = () => {
  const { debug } = useStacks()
  const backgroundColor = useMemo(() => randomColor(), [])
  return debug ? { backgroundColor } : undefined
}

export const StacksProvider = (props: Props) => {
  const { spacing = 4, debug = false, children, breakpoints } = props
  const mergedBreakpoints = Object.assign({}, defaultBreakpoints, breakpoints)

  return (
    <Context.Provider value={{ spacing, debug, breakpoints: mergedBreakpoints }}>
      {children}
    </Context.Provider>
  )
}
