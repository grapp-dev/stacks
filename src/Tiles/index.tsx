import React, { Children } from 'react'
import { View, ViewProps } from 'react-native'

import { Stack } from '../Stack'
import { lastFactory, splitEvery, resolveDirection, styles, ResponsiveProp } from '../utils'
import { useBreakpoint, useDebugStyle, useSpacing } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  columns: ResponsiveProp<number>
  space?: ResponsiveProp<number>
}

export const Tiles = (props: Props) => {
  const { children, columns: responsiveColumns, space = 0, style, ...rest } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const margin = useSpacing(resolveResponsiveProp(space))
  const columns = resolveResponsiveProp(responsiveColumns)
  const arr = splitEvery(columns, Children.toArray(children))
  const filledColumns = new Array(columns)
  const debugStyle = useDebugStyle()

  return (
    <Stack space={space} style={style} {...rest}>
      {arr.map((innerChildren, index) => {
        const filledArray = filledColumns.fill(null).map((x, y) => innerChildren[y] || x)
        const isLast = lastFactory(filledArray)

        return (
          <View style={[styles.fullWidth, resolveDirection('row')]} key={index}>
            {filledArray.map((child, innerIndex) => {
              return (
                <View
                  style={[
                    styles.flexFluid,
                    child && debugStyle,
                    isLast(innerIndex) ? styles.noMarginRight : { marginRight: margin },
                  ]}
                  key={innerIndex}
                >
                  {child}
                </View>
              )
            })}
          </View>
        )
      })}
    </Stack>
  )
}
