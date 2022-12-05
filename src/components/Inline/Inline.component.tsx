import * as React from 'react'
import { ViewProps } from 'react-native'

import { AxisX, AxisY, ResponsiveProp, Space } from '../../types'
import { Box } from '../Box'

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
    readonly spaceX?: ResponsiveProp<number>
    readonly spaceY?: ResponsiveProp<number>
    readonly reverse?: ResponsiveProp<boolean>
    readonly alignX?: ResponsiveProp<AxisX | Space>
    readonly alignY?: ResponsiveProp<AxisY>
  }

export const Inline = (props: Props) => {
  const { space, reverse, children, spaceX, spaceY, ...rest } = props

  return (
    <Box
      {...rest}
      gap={space}
      rowGap={spaceY}
      columnGap={spaceX}
      reverse={reverse}
      direction="row"
      wrap="wrap"
    >
      {children}
    </Box>
  )
}
