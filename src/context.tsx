import React, { createContext, useContext } from 'react'

import { randomColor } from './utils'

interface Config {
  spacing: number
  debug: boolean
}

interface Props extends Partial<Config> {
  children: React.ReactNode
}

const Context = createContext<Config>({ spacing: 4, debug: false })

type UseSpacing = {
  (space: number): number
  (): (space: number) => number
}

export const useSpacing: UseSpacing = (space?: number): any => {
  const { spacing } = useContext(Context)
  const multiply = (n: number) => n * spacing
  return typeof space === 'undefined' ? multiply : multiply(space)
}

export const useDebugStyle = () => {
  const { debug } = useContext(Context)
  return debug ? { backgroundColor: randomColor() } : undefined
}

export const Provider = (props: Props) => {
  const { spacing = 4, debug = false, children } = props

  return <Context.Provider value={{ spacing, debug }}>{children}</Context.Provider>
}
