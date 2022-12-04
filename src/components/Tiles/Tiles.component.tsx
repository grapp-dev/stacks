import * as React from 'react'
import { ViewProps } from 'react-native'

import { A } from '@mobily/ts-belt'

import { Box } from '../Box'
import { ResponsiveProp } from '../../types'
import { useResponsiveProp } from '../../hooks'

type BoxProps = Pick<
  React.ComponentProps<typeof Box>,
  | 'padding'
  | 'paddingX'
  | 'paddingY'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingEnd'
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginEnd'
>

type Props = ViewProps &
  BoxProps & {
    readonly columns?: ResponsiveProp<number>
    readonly space?: ResponsiveProp<number>
    readonly empty?: ResponsiveProp<boolean>
  }

export const Tiles = (props: Props) => {
  const { columns, space, empty, children, ...rest } = props

  const resolveResponsiveProp = useResponsiveProp()
  const numberOfColumns = Math.max(resolveResponsiveProp(columns) ?? 1, 1)
  const isEmpty = resolveResponsiveProp(empty) ?? true
  const xs = A.splitEvery(React.Children.toArray(children), numberOfColumns)

  return (
    <Box {...rest} direction="column" gap={space}>
      {A.mapWithIndex(xs, (index, xs) => {
        const elements = A.makeWithIndex(numberOfColumns, index => {
          return xs[index] ?? null
        })

        return (
          <Box key={index} direction="row" gap={space}>
            {A.mapWithIndex(elements, (index, element) => {
              return React.isValidElement(element) || isEmpty ? (
                <Box key={index} flex="fluid">
                  {element}
                </Box>
              ) : null
            })}
          </Box>
        )
      })}
    </Box>
  )
}
