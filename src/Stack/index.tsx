import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'

import {
  AxisX,
  ResponsiveProp,
  lastFactory,
  resolveAlign,
  resolveDirection,
  styles,
} from '../utils'
import { useBreakpoint, useDebugStyle, useSpacing } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  space?: ResponsiveProp<number>
  align?: ResponsiveProp<AxisX>
}

export const Stack = (props: Props) => {
  const { children, space = 0, align: responsiveAlign, style, ...rest } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const debugStyle = useDebugStyle()

  const margin = useSpacing(resolveResponsiveProp(space))
  const align = resolveResponsiveProp(responsiveAlign)
  const elements = Children.toArray(children)
  const isLast = lastFactory(elements)

  return (
    <View
      style={[styles.fullWidth, style, resolveDirection('column'), resolveAlign(align)]}
      {...rest}
    >
      {elements.map((child, index) => {
        return isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              style: [
                child.props.style,
                debugStyle,
                styles.noMarginTop,
                isLast(index) ? styles.noMarginBottom : { marginBottom: margin },
              ],
            })
          : null
      })}
    </View>
  )
}
