import React from 'react'
import { View, ViewProps } from 'react-native'
import { flexOf, Flex, AxisX, alignTo } from '../utils'

interface Props {
  children: React.ReactNode
  width?: Flex
  align?: AxisX
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Column = (props: Props) => {
  const { children, width, align, style, testID } = props

  return (
    <View style={[style, flexOf(width), alignTo(align)]} testID={testID}>
      {children}
    </View>
  )
}
