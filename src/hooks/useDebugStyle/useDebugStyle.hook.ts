import * as React from 'react'
import { ViewStyle } from 'react-native'

import { randomColor } from '../../utils'
import { useStacks } from '../useStacks'

export const useDebugStyle = () => {
  const { debug } = useStacks()

  const backgroundColor = React.useRef(randomColor()).current
  const style = React.useRef<ViewStyle | undefined>(debug ? { backgroundColor } : undefined)

  React.useEffect(() => {
    style.current = debug
      ? {
          backgroundColor,
        }
      : undefined
  }, [debug])

  return style.current
}
