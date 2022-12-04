import * as React from 'react'
import { View, ViewProps } from 'react-native'

import type {
  AxisX,
  AxisY,
  Direction,
  Flex,
  ResponsiveProp,
  Space,
  Stretch,
  Wrap,
} from '../../types'
import { resolveBoxStyle } from './Box.styles'
import { resolveDirectionAndReverse } from '../../utils'
import { useDebugStyle, useResponsiveProp, useSpacingHelpers } from '../../hooks'

type Props = ViewProps & {
  readonly alignX?: ResponsiveProp<AxisX | AxisY | Space | Stretch>
  readonly alignY?: ResponsiveProp<AxisX | AxisY | Space | Stretch>
  readonly gap?: ResponsiveProp<number>
  readonly rowGap?: ResponsiveProp<number>
  readonly columnGap?: ResponsiveProp<number>
  readonly padding?: ResponsiveProp<number>
  readonly paddingX?: ResponsiveProp<number>
  readonly paddingY?: ResponsiveProp<number>
  readonly paddingTop?: ResponsiveProp<number>
  readonly paddingBottom?: ResponsiveProp<number>
  readonly paddingLeft?: ResponsiveProp<number>
  readonly paddingRight?: ResponsiveProp<number>
  readonly paddingEnd?: ResponsiveProp<number>
  readonly paddingStart?: ResponsiveProp<number>
  readonly margin?: ResponsiveProp<number>
  readonly marginX?: ResponsiveProp<number>
  readonly marginY?: ResponsiveProp<number>
  readonly marginTop?: ResponsiveProp<number>
  readonly marginBottom?: ResponsiveProp<number>
  readonly marginLeft?: ResponsiveProp<number>
  readonly marginRight?: ResponsiveProp<number>
  readonly marginStart?: ResponsiveProp<number>
  readonly marginEnd?: ResponsiveProp<number>
  readonly direction?: ResponsiveProp<Direction>
  readonly wrap?: ResponsiveProp<Wrap>
  readonly flex?: ResponsiveProp<Flex>
  readonly reverse?: ResponsiveProp<boolean>
}

export const Box = (props: Props) => {
  const {
    children,
    alignX,
    alignY,
    gap,
    rowGap,
    columnGap,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingEnd,
    paddingStart,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    direction = 'column',
    wrap,
    flex,
    reverse,
    style,
    ...rest
  } = props

  const debugStyle = useDebugStyle()
  const resolveResponsiveProp = useResponsiveProp()
  const { multiply } = useSpacingHelpers()

  const reversed = resolveResponsiveProp(reverse)
  const flexDirection = resolveDirectionAndReverse(resolveResponsiveProp(direction), reversed)

  const isDirectionColumn = flexDirection === 'column' || flexDirection === 'column-reverse'
  const alignItems = resolveResponsiveProp(isDirectionColumn ? alignX : alignY)
  const justifyContent = resolveResponsiveProp(isDirectionColumn ? alignY : alignX)
  const flexWrap = resolveResponsiveProp(wrap)
  const flexBasis = resolveResponsiveProp(flex)

  return (
    <View
      {...rest}
      style={[
        resolveBoxStyle({
          alignItems,
          justifyContent,
          flexDirection,
          flexWrap,
          flexBasis,
        }),
        {
          gap: multiply(resolveResponsiveProp(gap)),
          rowGap: multiply(resolveResponsiveProp(rowGap)),
          columnGap: multiply(resolveResponsiveProp(columnGap)),
          padding: multiply(resolveResponsiveProp(padding)),
          paddingHorizontal: multiply(resolveResponsiveProp(paddingX)),
          paddingVertical: multiply(resolveResponsiveProp(paddingY)),
          paddingTop: multiply(resolveResponsiveProp(paddingTop)),
          paddingBottom: multiply(resolveResponsiveProp(paddingBottom)),
          paddingLeft: multiply(resolveResponsiveProp(paddingLeft)),
          paddingRight: multiply(resolveResponsiveProp(paddingRight)),
          paddingEnd: multiply(resolveResponsiveProp(paddingEnd)),
          paddingStart: multiply(resolveResponsiveProp(paddingStart)),
          margin: multiply(resolveResponsiveProp(margin)),
          marginHorizontal: multiply(resolveResponsiveProp(marginX)),
          marginVertical: multiply(resolveResponsiveProp(marginY)),
          marginTop: multiply(resolveResponsiveProp(marginTop)),
          marginBottom: multiply(resolveResponsiveProp(marginBottom)),
          marginLeft: multiply(resolveResponsiveProp(marginLeft)),
          marginRight: multiply(resolveResponsiveProp(marginRight)),
          marginEnd: multiply(resolveResponsiveProp(marginEnd)),
          marginStart: multiply(resolveResponsiveProp(marginStart)),
        },
        debugStyle,
        style,
      ]}
    >
      {children}
    </View>
  )
}
