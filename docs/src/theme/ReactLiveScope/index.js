import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Stacks from '@mobily/stacks'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
  },
  flexFluid: {
    flex: 1,
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

const App = props => {
  const { children } = props

  return <Stacks.StacksProvider>{children}</Stacks.StacksProvider>
}

const ReactLiveScope = {
  ...React,
  ...Stacks,
  View,
  React,
  Placeholder,
  PlaceholderView,
  Text,
  App,
  FluidPlaceholder,
}

export default ReactLiveScope
