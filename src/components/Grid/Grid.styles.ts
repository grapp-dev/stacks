import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  warning: {
    backgroundColor: 'red',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontFamily:
      Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'sans-serif',
  },
})
