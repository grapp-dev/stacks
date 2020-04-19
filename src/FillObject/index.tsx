import React from 'react'
import { StyleSheet } from 'react-native'

import { Box, Props } from '../Box'
import { useDebugStyle } from '../context'
import { Direction } from '../utils'

export const FillObject = <T extends Direction>(props: Props<T>) => {
  const { style, children, ...rest } = props
  const debugStyle = useDebugStyle()

  return (
    <Box style={[style, debugStyle, StyleSheet.absoluteFill]} {...rest}>
      {children}
    </Box>
  )
}
