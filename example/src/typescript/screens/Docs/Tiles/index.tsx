import React from 'react'
import { Tiles, Stack, Columns, Column } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

export const Tiles1 = () => {
  return (
    <Tiles space={2} columns={3}>
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </Tiles>
  )
}

export const Tiles2 = () => {
  return (
    <Tiles space={2} columns={2}>
      <Columns space={2}>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
      </Columns>
      <Placeholder />
      <Placeholder />
      <Stack space={2}>
        <Placeholder height={46} />
        <Placeholder height={46} />
      </Stack>
    </Tiles>
  )
}
