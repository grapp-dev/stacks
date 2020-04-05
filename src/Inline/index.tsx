import React, { Children, cloneElement, isValidElement } from 'react'
import { View, ViewProps } from 'react-native'
import { lastFactory, wrapOf, directionOf, styles } from '../utils'
import { useSpacing, useDebugStyle } from '../context'

interface Props {
  children: React.ReactNode
  space?: number
  style?: ViewProps['style']
  testID?: ViewProps['testID']
}

export const Inline = (props: Props) => {
  const { children, space = 0, style, testID } = props
  const isLast = lastFactory(children)
  const margin = useSpacing(space)
  const debugStyle = useDebugStyle()

  return (
    <View style={[style, wrapOf('wrap'), directionOf('row')]} testID={testID}>
      {Children.map(children, (child, index) => {
        return isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              style: [
                child.props.style,
                debugStyle,
                isLast(index) ? styles.noMarginRight : { marginRight: margin },
              ],
            })
          : null
      })}
    </View>
  )
}
