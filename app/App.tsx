import * as React from 'react'
import { SafeAreaView, ScrollView, Text, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import {
  Bleed,
  Box,
  Column,
  Columns,
  FillView,
  Grid,
  Inline,
  Inset,
  Stack,
  StacksProvider,
  Tiles,
  markAsColumn,
  useCurrentBreakpoint,
} from '@mobily/stacks'

const Test = props => {
  const { visible = true, children } = props

  return visible ? (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text>{children}</Text>
    </View>
  ) : null
}

const ColumnTest = props => {
  const { children } = props
  return children
}

markAsColumn(ColumnTest)

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StacksProvider
        debug={true}
        spacing={4}
        breakpoints={[
          ['mobile', 0],
          ['tablet', 568],
        ]}
      >
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Stack space={8}>
            <Box
              alignX={['center', 'right']}
              alignY={['center', 'top']}
              gap={[8, 16]}
              padding={4}
              direction={['row', 'row']}
              style={{ height: 280 }}
            >
              <Test>test1</Test>
              <Test>test2</Test>
              {/* <Test visible={false}>test3</Test> */}
              {/* <Test>test4</Test> */}
              {/* <Test visible={false}>test5</Test> */}
            </Box>
            <Box style={{ height: 100 }}>
              <FillView alignX="center" alignY="center">
                <Test>FillView</Test>
              </FillView>
            </Box>
            <Columns space={4} alignY="center" defaultWidth="content">
              <Column
                style={{ height: 120 }}
                alignY="center"
                alignX="around"
                width="fluid"
                direction="row"
              >
                <Text>t1</Text>
                <Text>t2</Text>
                <Text>t3</Text>
              </Column>
              <Column>
                <Test>test2</Test>
              </Column>
              <ColumnTest width="fluid">
                <Box flex="fluid" style={{ width: 4, backgroundColor: 'red' }} />
              </ColumnTest>
              <Test>test4</Test>
            </Columns>
            <Inline space={2} spaceY={8}>
              <Test>hello world1</Test>
              <Test>hello world2</Test>
              <Test>hello world3</Test>
              <Test>hello world4</Test>
              <Test>hello world5</Test>
              <Test>hello world6</Test>
              <Test>hello world7</Test>
              <Test>hello world8</Test>
            </Inline>
            <Tiles columns={3} space={4}>
              <Test>hello world1</Test>
              <Test>hello world2</Test>
              <Test>hello world3</Test>
              <Test>hello world4</Test>
              <Test>hello world5</Test>
              <Test>hello world6</Test>
              <Test>hello world7</Test>
              <Test>hello world8</Test>
            </Tiles>
            <Stack space={8}>
              <Bleed space={4}>
                <Inset space={4}>
                  <Test>test1</Test>
                </Inset>
              </Bleed>
              <Test visible={false}>test2</Test>
              <Test>test3</Test>
            </Stack>
            <View
              style={{
                gap: 16,
                backgroundColor: 'red',
              }}
            >
              <View style={{ backgroundColor: 'yellow' }}>
                <Text>test1</Text>
              </View>
              <View style={{ backgroundColor: 'yellow' }}>
                <Text>test2</Text>
              </View>
              <View style={{ backgroundColor: 'yellow' }}>
                <Text>test2</Text>
              </View>
            </View>
          </Stack>
        </ScrollView>
        {/* <Grid opacity={0.3} columns={8} margin={6} gutter={4} /> */}
      </StacksProvider>
    </SafeAreaView>
  )
}

export default App
