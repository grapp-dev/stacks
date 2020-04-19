import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import { setWrap, setDirection, setJustify, AxisX, styles } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  space?: number
  align?: AxisX
}

export const Inline = (props: Props) => {
  const { children, space = 0, style, align, ...rest } = props
  const margin = useSpacing(space)
  const debugStyle = useDebugStyle()

  return (
    <View style={style} {...rest}>
      <View
        style={[
          setWrap('wrap'),
          setJustify(align),
          setDirection('row'),
          { marginTop: -margin, marginRight: -margin },
        ]}
      >
        {Children.map(children, child => {
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
