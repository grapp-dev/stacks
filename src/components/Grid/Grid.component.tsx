import * as React from 'react'
import { Text, View } from 'react-native'

import { A } from '@mobily/ts-belt'

import { Box } from '../Box'
import { FillView } from '../FillView'
import { ResponsiveProp } from '../../types'
import { styles } from './Grid.styles'
import { useResponsiveProp, useSpacingHelpers, useWindowDimensions } from '../../hooks'

type Props = {
  readonly gutter?: ResponsiveProp<number>
  readonly margin?: ResponsiveProp<number>
  readonly columns?: ResponsiveProp<number>
  readonly opacity?: ResponsiveProp<number>
  readonly color?: ResponsiveProp<string>
}

type Options = {
  readonly width: number
  readonly columns: number
  readonly gutter: number
  readonly margin: number
}

const calculateColumnWidth = (options: Options) => {
  const { columns } = options
  const gutterCount = columns - 1
  return (options.width - options.margin * 2 - gutterCount * options.gutter) / columns
}

const calculateGridWidth = (options: Options) => {
  const { columns } = options
  const gutterCount = columns - 1
  return options.width * columns + gutterCount * options.gutter + options.margin * 2
}

export const Grid = (props: Props) => {
  const { gutter = 2, margin = 2, opacity = 0.2, columns = 8, color = 'red' } = props

  const resolveResponsiveProp = useResponsiveProp()
  const dimensions = useWindowDimensions()
  const { multiply } = useSpacingHelpers()

  const numberOfColumns = resolveResponsiveProp(columns)
  const defaultOpacity = resolveResponsiveProp(opacity)
  const backgroundColor = resolveResponsiveProp(color)

  const options: Options = {
    width: dimensions.width,
    columns: numberOfColumns,
    margin: multiply(resolveResponsiveProp(margin)),
    gutter: multiply(resolveResponsiveProp(gutter)),
  }

  const columnWidth = calculateColumnWidth(options)
  const gridWidth = calculateGridWidth({
    ...options,
    width: columnWidth,
  })
  const columnStyle = { opacity: defaultOpacity, backgroundColor }

  return (
    <>
      <FillView pointerEvents="none" paddingX={margin} direction="row" alignX="center" gap={gutter}>
        {A.makeWithIndex(numberOfColumns, index => {
          return <Box key={index} style={columnStyle} flex="fluid" />
        })}
      </FillView>
      {gridWidth !== dimensions.width ? (
        <FillView padding={2} offset={16} top={undefined} bottom={32} style={styles.warning}>
          <Text
            style={styles.text}
          >{`Calculated grid width (${gridWidth}) doesn't equal to the window width (${dimensions.width}). Please, adjust \`Grid\` options.`}</Text>
        </FillView>
      ) : null}
    </>
  )
}
