import React from 'react'
import * as ReactNative from 'react-native'
import * as Stacks from '../../../..'

const { View, Text, StyleSheet } = ReactNative

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(97, 0, 255, 0.05)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(97, 0, 255, 0.3)',
  },
  flexFluid: {
    flex: 1,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },
})

const Device = props => {
  const { children } = props

  return (
    <div className="center-device">
      <div className="iphone-x">
        <div className="camera" />
        <div className="speaker" />
        <div className="screen">{children}</div>
      </div>
    </div>
  )
}

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
  const { style, color = 'rgba(97, 0, 255, 0.3)' } = props

  return <View style={[styles.divider, { backgroundColor: color }, style]} />
}

const ReactLiveScope = {
  ...React,
  ...Stacks,
  reset: Stacks.reset,
  Device,
  View,
  Text,
  StyleSheet,
  React,
  Placeholder,
  PlaceholderView,
  FluidPlaceholder,
  Divider,
}

export default ReactLiveScope
