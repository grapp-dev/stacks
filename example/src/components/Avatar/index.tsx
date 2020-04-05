import React from 'react'
import { Image, ImageProps } from 'react-native'

interface Props {
  style?: ImageProps['style']
  size?: number
  source: string
}

export const Avatar = (props: Props) => {
  const { style, source, size = 64 } = props

  return (
    <Image
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
      source={{ uri: source }}
      resizeMode="stretch"
    />
  )
}
