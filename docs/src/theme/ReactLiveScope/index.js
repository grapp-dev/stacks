import React from 'react'
import * as ReactNative from 'react-native'
import * as Stacks from '@mobily/stacks'

const { View, Text, StyleSheet } = ReactNative

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
  },
  flexFluid: {
    flex: 1,
  },
  divider: {
    height: 1,
    width: '100%',
  },
})

const Placeholder = props => {
  const { width, height = 100, style, children } = props
  const resolveResponsiveProp = Stacks.useResponsiveProp()

  return (
    <View
      style={[
        styles.root,
        { width: resolveResponsiveProp(width), height: resolveResponsiveProp(height) },
        style,
      ]}
    />
  )
}

const PlaceholderView = props => {
  const { width, height, style, children } = props
  const resolveResponsiveProp = Stacks.useResponsiveProp()

  return (
    <View
      style={[
        { width: resolveResponsiveProp(width), height: resolveResponsiveProp(height) },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const FluidPlaceholder = props => {
  const { width, style, children } = props
  const resolveResponsiveProp = Stacks.useResponsiveProp()

  return (
    <View style={[styles.root, styles.flexFluid, { width: resolveResponsiveProp(width) }, style]}>
      {children}
    </View>
  )
}

const Divider = props => {
  const { style, color = '#999' } = props

  return <View style={[styles.divider, { backgroundColor: color }, style]} />
}

const ReactLiveScope = {
  ...React,
  ...Stacks,
  reset: Stacks.reset,
  View,
  Text,
  React,
  Placeholder,
  PlaceholderView,
  FluidPlaceholder,
  Divider,
}

export default ReactLiveScope
