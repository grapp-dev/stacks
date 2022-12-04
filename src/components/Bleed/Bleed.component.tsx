import * as React from 'react'
import { ViewProps } from 'react-native'

import { Box } from '../Box'
import { ResponsiveProp } from '../../types'
import { negate } from '../../utils'
import { useResponsiveProp } from '../../hooks'

type Props = ViewProps & {
  readonly space?: ResponsiveProp<number>
  readonly horizontal?: ResponsiveProp<number>
  readonly vertical?: ResponsiveProp<number>
  readonly top?: ResponsiveProp<number>
  readonly right?: ResponsiveProp<number>
  readonly bottom?: ResponsiveProp<number>
  readonly left?: ResponsiveProp<number>
}

export const Bleed = (props: Props) => {
  const { space, horizontal, vertical, top, right, bottom, left, children, ...rest } = props

  const resolveResponsiveProp = useResponsiveProp()
  const margin = negate(resolveResponsiveProp(space))
  const marginX = negate(resolveResponsiveProp(horizontal))
  const marginY = negate(resolveResponsiveProp(vertical))
  const marginTop = negate(resolveResponsiveProp(top))
  const marginRight = negate(resolveResponsiveProp(right))
  const marginBottom = negate(resolveResponsiveProp(bottom))
  const marginLeft = negate(resolveResponsiveProp(left))

  return (
    <Box
      {...rest}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      {children}
    </Box>
  )
}
