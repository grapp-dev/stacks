import React from 'react'
import { View, ViewProps } from 'react-native'
import { setFlex, setAlign, Flex, AxisX, styles } from '../utils'

export interface Props extends ViewProps {
  children: React.ReactNode
  width?: Flex
  align?: AxisX
}

export const Column = (props: Props) => {
  const { children, width, align, style, ...rest } = props

  return (
    <View style={[style, styles.shrink, setFlex(width), setAlign(align)]} {...rest}>
      {children}
    </View>
  )
}
