import React, { Children, useMemo } from 'react'
import { View, ViewProps } from 'react-native'

import { ResponsiveProp, lastFactory, resolveDirection, splitEvery, styles } from '../utils'
import { Stack } from '../Stack'
import { useBreakpoint, useDebugStyle, useSpacing } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  columns: ResponsiveProp<number>
  space?: ResponsiveProp<number>
}

export const Tiles = (props: Props) => {
  const { children, columns: responsiveColumns, space = 0, style, ...rest } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const debugStyle = useDebugStyle()
  const margin = useSpacing(resolveResponsiveProp(space))
  const columns = resolveResponsiveProp(responsiveColumns)
  const tiles = splitEvery(columns, Children.toArray(children))
  const filledColumns = useMemo(() => new Array(columns).fill(null), [columns])

  return (
    <Stack space={space} style={style} {...rest}>
      {tiles.map((innerChildren, index) => {
        const filledArray = filledColumns.map((x, y) => innerChildren[y] || x)
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
