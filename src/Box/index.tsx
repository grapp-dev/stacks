import React from 'react'
import { View, ViewStyle, ViewProps } from 'react-native'
import {
  flexOf,
  directionOf,
  AxisX,
  AxisY,
  Space,
  Flex,
  Wrap,
  Direction,
  alignTo,
  justifyTo,
  wrapOf,
} from '../utils'
import { useSpacing, useDebugStyle } from '../context'

type ExtractAlignX<T> = T extends 'row' | 'row-reverse' ? AxisX | Space : AxisX

type SpacingTuple = [keyof ViewStyle, number | undefined]
type TakeNumbers<T> = { [P in keyof T]: number }

type StyleProps = TakeNumbers<
  Pick<
    ViewStyle,
    | 'padding'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingEnd'
    | 'paddingStart'
    | 'margin'
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginEnd'
    | 'marginStart'
  >
>

export interface Props<T extends Direction> extends StyleProps, ViewProps {
  children: React.ReactNode
  flex?: Flex
  direction?: T
  paddingX?: number
  paddingY?: number
  marginX?: number
  marginY?: number
  alignX?: ExtractAlignX<T>
  alignY?: AxisY
  wrap?: Wrap
}

export const Box = <T extends Direction>(props: Props<T>) => {
  const {
    children,
    flex = 'content',
    direction = 'column',
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
    marginEnd,
    marginStart,
    alignX,
    alignY,
    style,
    wrap,
    ...rest
  } = props
  const spacing = useSpacing()
  const debugStyle = useDebugStyle()
  const list: SpacingTuple[] = [
    ['padding', padding],
    ['paddingVertical', paddingY],
    ['paddingHorizontal', paddingX],
    ['paddingTop', paddingTop],
    ['paddingBottom', paddingBottom],
    ['paddingLeft', paddingLeft],
    ['paddingRight', paddingRight],
    ['paddingEnd', paddingEnd],
    ['paddingStart', paddingStart],
    ['margin', margin],
    ['marginHorizontal', marginX],
    ['marginVertical', marginY],
    ['marginTop', marginTop],
    ['marginBottom', marginBottom],
    ['marginLeft', marginLeft],
    ['marginRight', marginRight],
    ['marginEnd', marginEnd],
    ['marginStart', marginStart],
  ]
  const box = list.reduce((acc, tuple) => {
    const [name, value] = tuple
    return value ? { ...acc, [name]: spacing(value) } : acc
  }, {})
  const alignments =
    direction === 'column' || direction === 'column-reverse'
      ? [alignTo(alignX as AxisX), justifyTo(alignY)]
      : [alignTo(alignY), justifyTo(alignX)]

  return (
    <View
      {...rest}
      style={[
        style,
        box,
        flexOf(flex),
        directionOf(direction as Direction),
        wrapOf(wrap),
        debugStyle,
        ...alignments,
      ]}
    >
      {children}
    </View>
  )
}
