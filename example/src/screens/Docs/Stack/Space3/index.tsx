import React from 'react'
import { Stack } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const StackSpace3 = () => {
  return (
    <Stack space={8}>
      <Stack space={1}>
        <Placeholder />
        <Placeholder />
      </Stack>
      <Stack space={1}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>
    </Stack>
  )
}
