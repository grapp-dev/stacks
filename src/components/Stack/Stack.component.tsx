import * as React from 'react'
import { ViewProps } from 'react-native'

import { AxisX, AxisY, ResponsiveProp } from '../../types'
import { Box } from '../Box'
import { styles } from './Stack.styles'
import { useResponsiveProp } from '../../hooks'

type BoxProps = Pick<
  React.ComponentProps<typeof Box>,
  | 'padding'
  | 'paddingX'
  | 'paddingY'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingEnd'
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginEnd'
>

type Props = ViewProps &
  BoxProps & {
    readonly space?: ResponsiveProp<number>
    readonly reverse?: ResponsiveProp<boolean>
    readonly horizontal?: ResponsiveProp<boolean>
    readonly align?: ResponsiveProp<AxisX | AxisY>
  }

export const Stack = (props: Props) => {
  const { children, space, reverse, horizontal, style, align, ...rest } = props

  const resolveResponsiveProp = useResponsiveProp()
  const isHorizontal = resolveResponsiveProp(horizontal)

  const direction = isHorizontal ? 'row' : 'column'
  const alignY = isHorizontal ? align : undefined
  const alignX = isHorizontal ? undefined : align

  return (
    <Box
      {...rest}
      direction={direction}
      reverse={reverse}
      rowGap={space}
      alignX={alignX}
      alignY={alignY}
      style={[!isHorizontal && styles.root, style]}
    >
      {children}
    </Box>
  )
}
