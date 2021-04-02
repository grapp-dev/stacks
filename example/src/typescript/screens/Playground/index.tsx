import React from 'react'
import { Text } from 'react-native'
import { Box, Columns, Column, Stack, Inline, Tiles, FillView } from '@mobily/stacks'

export const Playground = () => {
  return (
    <Box padding={2}>
      <Stack space={2}>
        <Text>Columns</Text>
        <Stack space={3}>
          <Columns space={1}>
            <Column>
              <Text>C1</Text>
            </Column>
            <Column>
              <Text>C2</Text>
            </Column>
            <Column>
              <Text>C3</Text>
            </Column>
          </Columns>
          <Columns space={1} alignY="center">
            <Column>
              <Text>C1</Text>
            </Column>
            <Column>
              <Columns space={2}>
                <Column>
                  <Text>C21</Text>
                </Column>
                <Column>
                  <Text>C22</Text>
                </Column>
              </Columns>
            </Column>
            <Column>
              <Tiles columns={2} space={1}>
                <Text>T1</Text>
                <Text>T2</Text>
                <Text>T3</Text>
              </Tiles>
            </Column>
          </Columns>
          <Columns space={1}>
            <Column width="1/2">
              <Text>C1</Text>
            </Column>
            <Column width="content">
              <Text>C2</Text>
            </Column>
            <Column>
              <Text>C3</Text>
            </Column>
            <Column>
              <Text>C4</Text>
            </Column>
          </Columns>
          <Columns space={2}>
            <Column width="1/4">
              <Columns space={2}>
                <Column width="1/2">
                  <Text>C11</Text>
                </Column>
                <Column width="1/2">
                  <Text>C12</Text>
                </Column>
              </Columns>
            </Column>
            <Column>
              <Text>C2</Text>
              <Text>C3</Text>
            </Column>
          </Columns>
        </Stack>

        <Text>Inline</Text>
        <Inline space={1}>
          <Text>inline 1</Text>
          <Text>inline 2</Text>
          <Text>inline 3</Text>
        </Inline>
        <Inline space={1}>
          <Text>Lorem ipsum</Text>
          <Text>Quisquam hic</Text>
          <Text>nulla ad velit</Text>
          <Text>Lorem ipsum</Text>
        </Inline>

        <Text>Tiles</Text>
        <Tiles columns={2} space={1}>
          <Text>T1</Text>
          <Text>T2</Text>
          <Text>T3</Text>
          <Text>T4</Text>
          <Text>T5</Text>
        </Tiles>

        <Text>Box</Text>
        <Box direction="row">
          <Box flex="fluid" direction="row" alignX="between">
            <Box flex="fluid" alignX="center" alignY="center">
              <Text>B1</Text>
              <Text>B2</Text>
            </Box>
            <Box flex="1/4" style={{ height: 200, backgroundColor: 'pink' }}>
              <Box style={{ height: 100 }}>
                <FillView alignX="center" alignY="center" style={{ backgroundColor: 'yellow' }}>
                  <Text>B0</Text>
                </FillView>
              </Box>
              <Text>B1</Text>
            </Box>
          </Box>
        </Box>
        <Stack space={4} horizontal={true}>
          <Text>T1</Text>
          <Text>T2</Text>
          <Text>T3</Text>
        </Stack>
      </Stack>
    </Box>
  )
}
