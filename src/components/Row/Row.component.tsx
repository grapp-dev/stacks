import * as React from 'react'
import { ViewProps } from 'react-native'

import { Box } from '../Box'
import { Flex, ResponsiveProp } from '../../types'

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
  | 'alignX'
  | 'alignY'
  | 'direction'
>

type Props = ViewProps &
  BoxProps & {
    readonly height?: ResponsiveProp<Flex>
  }

export const Row = (_props: Props): JSX.Element => {
  // eslint-disable-next-line functional/no-throw-statement
  throw new Error('[@mobily/stacks]: Row nust be a direct child of Rows.')
}

export const markAsRow = (node: React.FC) => {
  // @ts-expect-error: this is ok
  // eslint-disable-next-line functional/immutable-data
  node.__isRow__ = true
}

markAsRow(Row)
