import React from 'react'
import { Image, ImageProps } from 'react-native'
import { styles } from './styles'

interface Props {
  style?: ImageProps['style']
  source: string
}

export const Photo = (props: Props) => {
  const { style, source } = props

  return <Image source={{ uri: source }} resizeMode="contain" style={[styles.root, style]} />
}
