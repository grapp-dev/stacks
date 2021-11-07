import * as React from 'react'
import { LayoutChangeEvent, ScrollView, Text, View } from 'react-native'
import {
  Box,
  Columns,
  Column,
  Stack,
  Inline,
  Tiles,
  FillView,
  Rows,
  Row,
  reset,
} from '@mobily/stacks'

import styled from 'styled-components/native'

import { Placeholder } from '../../components/Placeholder'
import { Divider } from '../../components/Divider'

const Item = styled(Box)`
  background-color: yellow;
`

export const Playground = () => {
  const viewRef = React.useRef<View>(null)

  const handleLayoutChange = React.useCallback((e: LayoutChangeEvent) => {
    console.log(e.nativeEvent.layout)
  }, [])

  return (
    <ScrollView>
      <Item viewRef={viewRef} padding={2} onLayout={handleLayoutChange}>
        <Text>Styled component</Text>
      </Item>
      <Box style={{ height: 400 }}>
        <FillView alignX="center" alignY="center" right={reset}>
          <Text>abc</Text>
        </FillView>
      </Box>
      <Box padding={2}>
        <Stack space={2}>
          <Text>Rows</Text>
          <Box style={{ height: 400 }}>
            <Rows space={2} alignX="center">
              <Row>
                <Box alignX="center" alignY="center" flex="fluid">
                  <Placeholder width={200} />
                </Box>
              </Row>
              <Row>
                <Placeholder />
              </Row>
            </Rows>
          </Box>

          <Text>Columns</Text>
          <Stack space={3} divider={<Divider />}>
            <Columns space={1}>
              <Column>
                <Text>C1</Text>
              </Column>
              <Column>
                <Box alignX="center">
                  <Text>C2</Text>
                </Box>
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
          <Stack space={4} align={['center', 'bottom']}>
            <Placeholder height={50} width={120}>
              <Text>T1</Text>
            </Placeholder>
            <Placeholder height={70} width={200}>
              <Text>T2</Text>
            </Placeholder>
            <Placeholder height={30} width={150}>
              <Text>T3</Text>
            </Placeholder>
          </Stack>
          <Stack space={4} horizontal={true} align="center">
            <Text>T1</Text>
            <Text>T2</Text>
            <Text>T3</Text>
          </Stack>
          <Stack space={4} horizontal={true} align={['center', 'bottom']}>
            <Placeholder height={50}>
              <Text>T1</Text>
            </Placeholder>
            <Placeholder height={70}>
              <Text>T2</Text>
            </Placeholder>
            <Placeholder height={30}>
              <Text>T3</Text>
            </Placeholder>
          </Stack>
          <Columns style={{ backgroundColor: 'white' }} alignX="evenly">
            <Column width="content" height="fluid">
              <Box alignX="center" flex="fluid">
                <Box style={{ width: 40, height: 40, backgroundColor: 'pink' }}></Box>
                <Box style={{ width: 4, backgroundColor: 'red' }} flex="fluid"></Box>
              </Box>
            </Column>
            <Column>
              <Box>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Text>
              </Box>
            </Column>
          </Columns>
          <Columns style={{ height: 200 }} alignY="center" space={4}>
            <Column width="content">
              <Box style={{ width: 14, height: 40, backgroundColor: 'red' }} />
            </Column>
            <Column>
              <Box style={{ width: 14, height: 100, backgroundColor: 'red' }} />
            </Column>
            <Column width="content">
              <Box style={{ width: 40, height: 40, backgroundColor: 'red' }} />
            </Column>
          </Columns>
          <Columns alignX="center" space={4}>
            <Column width="content">
              <Box style={{ width: 40, height: 40, backgroundColor: 'red' }} />
            </Column>
            <Column width="content">
              <Box style={{ width: 40, height: 40, backgroundColor: 'red' }} />
            </Column>
          </Columns>
        </Stack>
      </Box>
    </ScrollView>
  )
}
