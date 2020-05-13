import React from 'react'
import { View, ViewProps } from 'react-native'
import { resolveFlex, styles, Flex } from '../utils'
import { useColumns } from '../context'

export interface Props extends ViewProps {
  children: React.ReactNode
  width?: Flex
}

export const Column = (props: Props) => {
  const { children, width, style, ...rest } = props
  const { isCollapsed } = useColumns()

  const columnStyle = isCollapsed ? [styles.fullWidth] : [styles.shrink, resolveFlex(width)]

  return (
    <View style={[style, ...columnStyle]} {...rest}>
      {children}
    </View>
  )
}
