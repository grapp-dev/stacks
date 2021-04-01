import React from 'react'
import { View, ViewProps } from 'react-native'

import { styles } from './styles'

interface Props {
  style?: ViewProps['style']
  color?: string
}

export const Divider = (props: Props) => {
  const { style, color = '#eee' } = props

  return <View style={[styles.root, { backgroundColor: color }, style]} />
}
