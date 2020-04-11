import React from 'react'
import { Grid, Tiles, Columns, Column, Stack, Box } from '@mobily/stacks'
import { Placeholder } from 'components/Placeholder'

interface Props {
  paddingX: number
  space: number
}

export const GridContent = (props: Props) => {
  const { paddingX, space } = props

  return (
    <Box paddingX={paddingX}>
      <Tiles space={space} columns={2}>
        <Columns space={space}>
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
        <Placeholder />
      </Tiles>
    </Box>
  )
}

export const Grid1 = () => {
  return <Grid columns={8} margin={2} gutter={2} />
}

export const Grid2 = () => {
  return <Grid columns={4} margin={8} gutter={2} />
}

export const Grid3 = () => {
  return <Grid columns={4} margin={4} gutter={8} />
}
