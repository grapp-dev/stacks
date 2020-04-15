import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import { lastFactory, styles, directionOf, alignTo, AxisX } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

export interface Props {
  children: React.ReactNode
  space?: number
  align?: AxisX
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Stack = (props: Props) => {
  const { children, space = 0, align, style, testID } = props
  const margin = useSpacing(space)
  const isLast = lastFactory(children)
  const debugStyle = useDebugStyle()

  return (
    <View style={[style, styles.fullWidth, directionOf('column'), alignTo(align)]} testID={testID}>
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
