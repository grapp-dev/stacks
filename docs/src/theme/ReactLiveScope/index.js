const React = require('react')
const { View, Text, StyleSheet } = require('react-native')
const Stacks = require('@mobily/stacks')

const { StacksProvider } = Stacks

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
  },
})

const Placeholder = props => {
  const { width, height = 100, style, children } = props

  return <View style={[styles.root, { width, height }, style]} />
}

const PlaceholderView = props => {
  const { width, height, style, children } = props

  return <View style={[{ width, height }, style]}>{children}</View>
}

const App = props => {
  const { children } = props

  return <StacksProvider>{children}</StacksProvider>
}

const ReactLiveScope = {
  ...React,
  React,
  ...Stacks,
  Placeholder,
  PlaceholderView,
  View,
  Text,
  App,
}

export default ReactLiveScope
