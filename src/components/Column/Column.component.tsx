import * as React from 'react'
import { ViewProps } from 'react-native'

import { AxisX, AxisY, Direction, Flex, ResponsiveProp, Space } from '../../types'
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
>

type Props = ViewProps &
  BoxProps & {
    readonly width?: ResponsiveProp<Flex>
    readonly alignY?: ResponsiveProp<AxisY>
    readonly alignX?: ResponsiveProp<AxisX | Space>
    readonly direction?: ResponsiveProp<Direction>
  }

export const Column = (_props: Props): JSX.Element => {
  // eslint-disable-next-line functional/no-throw-statement
  throw new Error('[@mobily/stacks]: Column nust be a direct child of Columns.')
}

export const markAsColumn = (node: React.FC) => {
  // @ts-expect-error: this is ok
  // eslint-disable-next-line functional/immutable-data
  node.__isColumn__ = true
}

markAsColumn(Column)
