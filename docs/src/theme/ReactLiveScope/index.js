import React from 'react'
import * as ReactNative from 'react-native'

import * as Stacks from '../../../..'

import RocketSVG from '@site/static/svg/rocket.svg'
import BookSVG from '@site/static/svg/book.svg'

const { View, Text, StyleSheet } = ReactNative

const RNImage = ReactNative.Image
const RNText = ReactNative.Text

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(97, 0, 255, 0.05)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(97, 0, 255, 0.3)',
  },
  // Typograhpy
  typographyRoot: {
    fontFamily: 'IBM Plex Sans',
  },
  h1: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '600',
  },
  h2: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '600',
  },
  h3: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 18,
    color: '#6a6a6a',
  },
})

const image = {
  rocket: RocketSVG,
  book: BookSVG,
}

const Device = props => {
  const { children, backgroundColor = '#f3f5f9' } = props

  return (
    <div className="center-device">
      <div className="iphone-x" style={{ backgroundColor }}>
        <div className="camera" />
        <div className="speaker" />
        <div className="screen">{children}</div>
      </div>
    </div>
  )
}

const Image = props => {
  const { name, width = 64, height } = props
  const Component = image[name]

  if (!Component) {
    throw new Error('Image not found')
  }

  return <Component width={width} height={height} />
}

const Typography = props => {
  const { variant, children } = props

  return <RNText style={[styles.typographyRoot, styles[variant]]}>{children}</RNText>
}

const Placeholder = props => {
  const { width, height = 60, style, children } = props

  return (
    <Stacks.Box alignX="center" alignY="center" style={[styles.root, { width, height }, style]} />
  )
}

const Container = props => {
  const { height, children } = props
  return <Stacks.Box style={{ height }}>{children}</Stacks.Box>
}

const ReactLiveScope = {
  ...React,
  ...Stacks,
  reset: Stacks.reset,
  Device,
  Image,
  Typography,
  View,
  Text,
  StyleSheet,
  React,
  Placeholder,
  Container,
}

export default ReactLiveScope
