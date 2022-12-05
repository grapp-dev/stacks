import * as React from 'react'
import { StyleSheet, ViewProps } from 'react-native'

import { D } from '@mobily/ts-belt'

import { Box } from '../Box'
import { ResponsiveProp } from '../../types'
import { useResponsiveProp } from '../../hooks'

type BoxProps = React.ComponentProps<typeof Box>

type Props = ViewProps &
  Omit<BoxProps, 'flex'> & {
    readonly top?: ResponsiveProp<number>
    readonly right?: ResponsiveProp<number>
    readonly bottom?: ResponsiveProp<number>
    readonly left?: ResponsiveProp<number>
    readonly offset?: ResponsiveProp<number>
  }

export const FillView = (props: Props) => {
  const { children, top, right, bottom, left, offset, style, ...rest } = props

  const resolveResponsiveProp = useResponsiveProp()
  const defaultValue = resolveResponsiveProp(offset)

  const fillObject = D.mapWithKey(
    {
      top,
      right,
      bottom,
      left,
    },
    (key, value) => {
      return key in props ? resolveResponsiveProp(value) : defaultValue ?? 0
    },
  )

  return (
    <Box {...rest} style={[StyleSheet.absoluteFill, fillObject, style]}>
      {children}
    </Box>
  )
}
