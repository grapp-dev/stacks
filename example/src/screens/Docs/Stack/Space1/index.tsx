import React from 'react'
import { Stack } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const StackSpace1 = () => {
  return (
    <Stack space={1}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Stack>
  )
}
