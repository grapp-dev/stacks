import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import {
  lastFactory,
  resolveDirection,
  resolveAlign,
  styles,
  AxisX,
  ResponsiveProp,
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
  const isLast = lastFactory(children)

  return (
    <View
      style={[style, styles.fullWidth, resolveDirection('column'), resolveAlign(align)]}
      {...rest}
    >
      {Children.map(children, (child, index) => {
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
