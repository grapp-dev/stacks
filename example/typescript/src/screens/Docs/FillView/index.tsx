import React from 'react'
import { FillView, Box, Stack } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const FillView1 = () => {
  return (
    <FillView alignX="center" alignY="center" direction="row">
      <Box flex="3/4">
        <Stack space={1}>
          <Placeholder height={60} />
          <Placeholder height={60} />
          <Placeholder height={60} />
          <Placeholder height={60} />
        </Stack>
      </Box>
    </FillView>
  )
}
