import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import { wrapOf, directionOf, justifyTo, AxisX, styles } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

export interface Props {
  children: React.ReactNode
  space?: number
  align?: AxisX
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Inline = (props: Props) => {
  const { children, space = 0, style, align, testID } = props
  const margin = useSpacing(space)
  const debugStyle = useDebugStyle()

  return (
    <View style={style} testID={testID}>
      <View
        style={[
          wrapOf('wrap'),
          justifyTo(align),
          directionOf('row'),
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
