import React from 'react'
import { StyleSheet } from 'react-native'

import { Box, Props } from '../Box'
import { useDebugStyle } from '../context'

export const FillObject = <T extends string>(props: Props<T>) => {
  const { style, children, ...rest } = props
  const debugStyle = useDebugStyle()

  return (
    <Box {...rest} style={[style, debugStyle, StyleSheet.absoluteFill]}>
      {children}
    </Box>
  )
}
