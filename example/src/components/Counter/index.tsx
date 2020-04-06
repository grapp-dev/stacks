import React from 'react'
import { Text, TextProps } from 'react-native'

import { styles } from './styles'

interface Props {
  children: React.ReactNode
  style?: TextProps['style']
}

export const Counter = (props: Props) => {
  const { children, style } = props

  return <Text style={[styles.root, style]}>{children}</Text>
}
