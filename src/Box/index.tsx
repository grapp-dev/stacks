import React from 'react'
import { View, ViewStyle, ViewProps } from 'react-native'
import {
  resolveFlex,
  resolveDirection,
  resolveAlign,
  resolveJustify,
  resolveWrap,
  resolveAlignSelf,
  AxisX,
  AxisY,
  Space,
  Flex,
  Wrap,
  Direction,
  ResponsiveProp,
} from '../utils'
import { useSpacing, useDebugStyle, useBreakpoint } from '../context'

type ExtractAlignX<T> = T extends 'column' | 'column-reverse'
  ? AxisX
  : Exclude<AxisX, 'stretch'> | Space
type ExtractAlignY<T> = T extends 'column' | 'column-reverse' ? Exclude<AxisY, 'stretch'> : AxisY

type SpacingTuple = [keyof ViewStyle, ResponsiveProp<number> | undefined]
type ResponsiveProps<T> = { [P in keyof T]: ResponsiveProp<number> }

type StyleProps = ResponsiveProps<
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
  children?: React.ReactNode
  flex?: ResponsiveProps<Flex>
  direction?: ResponsiveProp<T>
  paddingX?: ResponsiveProp<number>
  paddingY?: ResponsiveProp<number>
  marginX?: ResponsiveProp<number>
  marginY?: ResponsiveProp<number>
  alignX?: ResponsiveProp<ExtractAlignX<T>>
  alignY?: ResponsiveProp<ExtractAlignY<T>>
  alignSelf?: ResponsiveProp<ExtractAlignY<T>>
  wrap?: Wrap
}

export const Box = <T extends Direction>(props: Props<T>) => {
  const {
    children,
    flex: responsiveFlex = 'content',
    direction: responsiveDirection = 'column',
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
    alignX: responsiveAlignX,
    alignY: responsiveAlignY,
    alignSelf: responsiveAlignSelf,
    style,
    wrap,
    ...rest
  } = props
  const { resolveResponsiveProp } = useBreakpoint()
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
    return value ? { ...acc, [name]: spacing(resolveResponsiveProp(value)) } : acc
  }, {})
  const direction = resolveResponsiveProp(responsiveDirection)
  const alignX = resolveResponsiveProp(responsiveAlignX)
  const alignY = resolveResponsiveProp(responsiveAlignY)
  const alignSelf = resolveResponsiveProp(responsiveAlignSelf)
  const flex = resolveResponsiveProp(responsiveFlex)

  const alignments =
    direction === 'column' || direction === 'column-reverse'
      ? [resolveAlign(alignX as AxisX), resolveJustify(alignY)]
      : [resolveAlign(alignY), resolveJustify(alignX)]

  return (
    <View
      style={[
        style,
        box,
        resolveFlex(flex),
        resolveDirection(direction as Direction),
        resolveWrap(wrap),
        resolveAlignSelf(alignSelf),
        debugStyle,
        ...alignments,
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}
