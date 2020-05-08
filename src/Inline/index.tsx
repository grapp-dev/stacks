import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import {
  resolveWrap,
  resolveDirection,
  resolveJustify,
  styles,
  AxisX,
  ResponsiveProp,
} from '../utils'
import { useSpacing, useDebugStyle, useBreakpoint } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  space?: ResponsiveProp<number>
  align?: ResponsiveProp<AxisX>
}

export const Inline = (props: Props) => {
  const { children, space = 0, style, align: responsiveAlign, ...rest } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const margin = useSpacing(resolveResponsiveProp(space))
  const align = resolveResponsiveProp(responsiveAlign)
  const debugStyle = useDebugStyle()
  const elements = Children.toArray(children)

  return (
    <View style={style} {...rest}>
      <View
        style={[
          resolveWrap('wrap'),
          resolveJustify(align),
          resolveDirection('row'),
          { marginTop: -margin, marginRight: -margin },
        ]}
      >
        {elements.map(child => {
          return isValidElement(child)
            ? cloneElement(child, {
                ...child.props,
                style: [
                  child.props.style,
                  debugStyle,
                  styles.noMarginBottom,
                  styles.noMarginLeft,
                  { marginTop: margin, marginRight: margin },
                ],
              })
            : null
        })}
      </View>
    </View>
  )
}
