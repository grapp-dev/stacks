import * as React from 'react'
import { ViewProps } from 'react-native'

import { Box } from '../Box'
import { ResponsiveProp } from '../../types'

type Props = ViewProps & {
  readonly space?: ResponsiveProp<number>
  readonly horizontal?: ResponsiveProp<number>
  readonly vertical?: ResponsiveProp<number>
  readonly top?: ResponsiveProp<number>
  readonly right?: ResponsiveProp<number>
  readonly bottom?: ResponsiveProp<number>
  readonly left?: ResponsiveProp<number>
}

export const Inset = (props: Props) => {
  const {
    space: padding,
    horizontal: paddingX,
    vertical: paddingY,
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
    children,
    ...rest
  } = props

  return (
    <Box
      {...rest}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    >
      {children}
    </Box>
  )
}
