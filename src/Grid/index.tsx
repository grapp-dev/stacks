import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { useSpacing } from '../context'

interface Props {
  columns?: number
  gutter?: number
  margin?: number
  opacity?: number
}

interface Options {
  width: number
  columns: number
  gutter: number
  margin: number
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: '100%',
  },
  column: {
    height: '100%',
    backgroundColor: 'red',
  },
  warning: {
    position: 'absolute',
    top: 24,
    left: 24,
    right: 24,
  },
  text: {
    color: 'red',
  },
})

const calculateColumnWidth = (options: Options) => {
  const { width, columns, gutter, margin } = options
  return Math.floor((width - ((columns - 1) * gutter + 2 * margin)) / columns)
}
const calculatePageWidth = (options: Options) => {
  const { width, columns, gutter, margin } = options
  return width * columns + (columns - 1) * gutter + 2 * margin
}

export const Grid = (props: Props) => {
  const { gutter = 1, margin = 1, columns = 8, opacity = 0.1 } = props
  const spacing = useSpacing()
  const { width } = Dimensions.get('window')
  const options = {
    columns,
    gutter: spacing(gutter),
    margin: spacing(margin),
  }
  const columnWidth = calculateColumnWidth({
    width,
    ...options,
  })
  const pageWidth = calculatePageWidth({
    width: columnWidth,
    ...options,
  })
  const grid = new Array(columns).fill(undefined).map((_, index) => (
    <View
      key={index}
      style={[
        styles.column,
        {
          width: columnWidth,
          marginRight: spacing(gutter),
          opacity,
        },
      ]}
    />
  ))

  return (
    <View
      style={[styles.root, { paddingLeft: spacing(margin), paddingRight: spacing(margin) }]}
      pointerEvents="none"
    >
      {grid}
      {pageWidth !== width ? (
        <View style={styles.warning}>
          <Text
            style={styles.text}
          >{`Calculated page width (${pageWidth}) is different than window width (${width}). Adjust the grid options.`}</Text>
        </View>
      ) : null}
    </View>
  )
}
