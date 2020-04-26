import React, { ReactElement } from 'react'
import { View, StyleSheet, ViewProps, Dimensions } from 'react-native'

interface Props {
  width?: number | string
  height?: number | string
  style?: ViewProps['style']
}

export const Placeholder = (props: Props) => {
  const { width, height = 100, style } = props

  return <View style={[{ width, height }, style]} />
}

export const flattenStyle = (element: ReactElement) => StyleSheet.flatten(element.props.style)
export const flattenChildrenStyle = (element: ReactElement & { children: ReactElement[] }) =>
  element.children.map(flattenStyle)

export const resizeToTablet = () => {
  const dimensions = jest.spyOn(Dimensions, 'get')

  dimensions.mockImplementation(() => ({
    fontScale: 2,
    height: 1334,
    scale: 2,
    width: 768,
  }))
}
export const resizeToDesktop = () => {
  const dimensions = jest.spyOn(Dimensions, 'get')

  dimensions.mockImplementation(() => ({
    fontScale: 2,
    height: 1334,
    scale: 2,
    width: 1024,
  }))
}
