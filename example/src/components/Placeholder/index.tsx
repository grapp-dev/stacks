import React from 'react'
import { View, ViewProps } from 'react-native'

import { styles } from './styles'

interface Props {
  width?: number | string
  height?: number | string
  style?: ViewProps['style']
}

export const Placeholder = (props: Props) => {
  const { width = '100%', height = 100, style } = props

  return <View style={[styles.root, { width, height }, style]} />
}
