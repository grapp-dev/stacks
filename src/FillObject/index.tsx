import React from 'react'
import { StyleSheet } from 'react-native'

import { Box, Props } from '../Box'
import { Direction } from '../utils'
import { useDebugStyle } from '../context'

export const FillObject = <T extends Direction>(props: Props<T>) => {
  const { style, children, ...rest } = props
  const debugStyle = useDebugStyle()

  return (
    <Box style={[StyleSheet.absoluteFill, style, debugStyle]} {...rest}>
      {children}
    </Box>
  )
}
