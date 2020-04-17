import React from 'react'
import { View, ViewProps } from 'react-native'
import { setFlex, setAlign, Flex, AxisX } from '../utils'

export interface Props {
  children: React.ReactNode
  width?: Flex
  align?: AxisX
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Column = (props: Props) => {
  const { children, width, align, style, testID } = props

  return (
    <View style={[style, setFlex(width), setAlign(align)]} testID={testID}>
      {children}
    </View>
  )
}
