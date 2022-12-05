import * as React from 'react'
import { ViewProps } from 'react-native'

import { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../../types'
import { Box } from '../Box'
import { Row } from '../Row'
import { flatten } from '../../utils'

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

type RowProps = React.ComponentProps<typeof Row>

type Props = ViewProps &
  BoxProps & {
    readonly space?: ResponsiveProp<number>
    readonly defaultHeight?: ResponsiveProp<Flex>
    readonly reverse?: ResponsiveProp<boolean>
    readonly alignX?: ResponsiveProp<AxisX>
    readonly alignY?: ResponsiveProp<AxisY | Space>
  }

const getRowProps = (node: React.ReactNode): RowProps | null => {
  return node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this is ok
    node.type.__isRow__
    ? (node.props as RowProps)
    : null
}

export const Rows = (props: Props) => {
  const { children, space, defaultHeight = 'fluid', alignX, alignY, reverse, ...rest } = props

  return (
    <Box
      {...rest}
      flex="fluid"
      direction="column"
      gap={space}
      alignX={alignX}
      alignY={alignY}
      reverse={reverse}
    >
      {React.Children.map(flatten(children), child => {
        const props = getRowProps(child)

        if (props) {
          const { children, height, direction, ...rest } = props

          return (
            <Box
              {...rest}
              flex={height ?? defaultHeight}
              alignY={props.alignY ?? alignY}
              alignX={props.alignX ?? alignX}
              direction={direction}
            >
              {children}
            </Box>
          )
        }

        return (
          <Box flex={defaultHeight} alignY={alignY} alignX={alignX}>
            {child}
          </Box>
        )
      })}
    </Box>
  )
}
