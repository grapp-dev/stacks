import React from 'react'
import { View, ViewProps } from 'react-native'
import { flexOf, Flex } from '../utils'

interface Props {
  children: React.ReactNode
  width?: Flex
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Column = (props: Props) => {
  const { children, width, style, testID } = props

  return (
    <View style={[style, flexOf(width)]} testID={testID}>
      {children}
    </View>
  )
}
