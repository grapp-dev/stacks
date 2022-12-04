import * as React from 'react'
import { ViewProps } from 'react-native'

import { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../../types'
import { Box } from '../Box'
import { Column } from '../Column/Column.component'

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

type ColumnProps = React.ComponentProps<typeof Column>

type Props = ViewProps &
  BoxProps & {
    readonly space?: ResponsiveProp<number>
    readonly defaultWidth?: ResponsiveProp<Flex>
    readonly alignX?: ResponsiveProp<AxisX | Space>
    readonly alignY?: ResponsiveProp<AxisY>
  }

const getColumnProps = (node: React.ReactNode): ColumnProps | null => {
  return node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this is ok
    node.type.__isColumn__
    ? (node.props as ColumnProps)
    : null
}

export const Columns = (props: Props) => {
  const { children, space, defaultWidth = 'fluid', alignX, alignY, ...rest } = props

  return (
    <Box {...rest} direction="row" gap={space} alignX={alignX}>
      {React.Children.map(children, child => {
        const props = getColumnProps(child)

        if (props) {
          const { children, width, alignX, direction, ...rest } = props

          return (
            <Box
              {...rest}
              flex={width ?? defaultWidth}
              alignY={props.alignY ?? alignY}
              alignX={alignX}
              direction={direction}
            >
              {children}
            </Box>
          )
        }

        return (
          <Box flex={defaultWidth} alignY={alignY}>
            {child}
          </Box>
        )
      })}
    </Box>
  )
}
