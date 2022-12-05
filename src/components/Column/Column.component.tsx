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
  | 'alignY'
  | 'alignX'
  | 'direction'
>

type Props = ViewProps &
  BoxProps & {
    readonly width?: ResponsiveProp<Flex>
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
