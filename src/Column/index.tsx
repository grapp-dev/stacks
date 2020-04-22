import React from 'react'
import { View, ViewProps } from 'react-native'
import { resolveFlex, resolveAlign, styles, Flex, AxisX, ResponsiveProp } from '../utils'
import { useBreakpoint } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  width?: Flex
  align?: ResponsiveProp<AxisX>
}

export const Column = (props: Props) => {
  const { children, width, align: responsiveAlign, style, ...rest } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const align = resolveResponsiveProp(responsiveAlign)

  return (
    <View style={[style, styles.shrink, resolveFlex(width), resolveAlign(align)]} {...rest}>
      {children}
    </View>
  )
}
