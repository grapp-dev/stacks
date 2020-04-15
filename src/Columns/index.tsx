import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import { lastFactory, directionOf, alignTo, justifyTo, styles, AxisY, Space, AxisX } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

export interface Props {
  children: React.ReactNode
  space?: number
  reverse?: boolean
  alignY?: AxisY
  alignX?: AxisX | Space
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Columns = (props: Props) => {
  const { children, space = 0, reverse = false, alignX, alignY, style, testID } = props
  const isLast = lastFactory(children)
  const margin = useSpacing(space)
  const debugStyle = useDebugStyle()

  const noLastMargin = reverse ? styles.noMarginLeft : styles.noMarginRight
  const noOppositeMargin = reverse ? styles.noMarginRight : styles.noMarginLeft

  return (
    <View
      style={[
        style,
        styles.fullWidth,
        directionOf(reverse ? 'row-reverse' : 'row'),
        alignTo(alignY),
        justifyTo(alignX),
      ]}
      testID={testID}
    >
      {Children.map(children, (child, index) => {
        const marginStyle = isLast(index)
          ? noLastMargin
          : reverse
          ? { marginLeft: margin }
          : { marginRight: margin }

        return isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              style: [child.props.style, debugStyle, noOppositeMargin, marginStyle],
            })
          : null
      })}
    </View>
  )
}
