import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import {
  resolveCollapsibleProps,
  lastFactory,
  resolveDirection,
  resolveAlign,
  resolveJustify,
  styles,
  AxisY,
  Space,
  AxisX,
  ResponsiveProp,
  Breakpoint,
} from '../utils'
import { useBreakpoint, useDebugStyle, useSpacing } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  space?: ResponsiveProp<number>
  reverse?: boolean
  alignY?: ResponsiveProp<AxisY>
  alignX?: ResponsiveProp<Exclude<AxisX, 'stretch'> | Space>
  collapseBelow?: Exclude<Breakpoint, 'mobile'>
}

export const Columns = (props: Props) => {
  const {
    children,
    space = 0,
    reverse = false,
    alignX: responsiveAlignX,
    alignY: responsiveAlignY,
    style,
    collapseBelow,
    ...rest
  } = props
  const { resolveResponsiveProp, currentBreakpoint } = useBreakpoint()
  const elements = Children.toArray(children)
  const isLast = lastFactory(elements)
  const debugStyle = useDebugStyle()

  const alignX = resolveResponsiveProp(responsiveAlignX)
  const alignY = resolveResponsiveProp(responsiveAlignY)
  const margin = useSpacing(resolveResponsiveProp(space))

  const {
    noLastMargin,
    noOppositeMargin,
    spacing,
    direction,
    columnStyle,
  } = resolveCollapsibleProps({
    currentBreakpoint,
    collapseBelow,
    reverse,
    margin,
  })

  return (
    <View
      style={[
        style,
        styles.fullWidth,
        resolveDirection(direction),
        resolveAlign(alignY),
        resolveJustify(alignX),
      ]}
      {...rest}
    >
      {elements.map((child, index) => {
        const marginStyle = isLast(index) ? noLastMargin : spacing

        return isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              style: [child.props.style, columnStyle, debugStyle, noOppositeMargin, marginStyle],
            })
          : null
      })}
    </View>
  )
}
