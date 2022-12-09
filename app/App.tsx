import * as React from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native'
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
  Row,
  Rows,
  Stack,
  StacksProvider,
  Tiles,
  markAsColumn,
  useCurrentBreakpoint,
} from '@mobily/stacks'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const Test = props => {
  const { visible = true, children } = props

  return visible ? (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text>{children}</Text>
    </View>
  ) : null
}

type ColumnProps = React.ComponentProps<typeof Column> & {
  readonly backgroundColor?: string
}

const ColumnTest = (props: ColumnProps) => {
  const { children, style, backgroundColor, ...rest } = props
  return (
    <Column {...rest} style={[{ backgroundColor }, style]}>
      {children}
    </Column>
  )
}

markAsColumn(ColumnTest)

const RootScreen = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
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
          <Box style={{ height: 300 }}>
            <Rows space={2}>
              <Row alignY="around">
                <Test>test1</Test>
                <Test>test1</Test>
                <Test>test1</Test>
              </Row>
              <Row alignY="center" alignX="between" direction="row">
                <Test>test2</Test>
                <Test>test2</Test>
              </Row>
              <Test>test3</Test>
              <Row height="content">
                <Test>test4</Test>
              </Row>
            </Rows>
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
            <ColumnTest width="fluid" alignX="center" backgroundColor="yellow">
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
    </SafeAreaView>
  )
}
const data = new Array(100).fill(0)
const data2 = new Array(100).fill(1)

const TestScreenColumns = () => {
  const [isNext, setIsNext] = React.useState(false)
  const renderItem = React.useCallback(item => {
    return (
      <Box style={{ height: 100 }}>
        <Columns>
          <Box style={{ backgroundColor: 'blue' }}>
            <Text>{item.item}</Text>
          </Box>
          <Box style={{ backgroundColor: 'red' }} />
        </Columns>
      </Box>
    )
  }, [])

  return (
    <SafeAreaView>
      <Columns>
        <TouchableOpacity
          onPress={() => {
            setIsNext(false)
          }}
          style={{ height: 60 }}
        >
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsNext(true)
          }}
          style={{ height: 60 }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </Columns>
      <FlatList renderItem={renderItem} data={isNext ? data2 : data} />
    </SafeAreaView>
  )
}

const TestScreenViews = () => {
  const [isNext, setIsNext] = React.useState(false)
  const renderItem = React.useCallback(item => {
    return (
      <View style={{ height: 100 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
          <View style={{ backgroundColor: 'blue', width: '50%', height: '100%' }}>
            <Text>{item.item}</Text>
          </View>
          <View style={{ backgroundColor: 'red', width: '50%', height: '100%' }} />
        </View>
      </View>
    )
  }, [])

  return (
    <SafeAreaView>
      <Columns>
        <TouchableOpacity
          onPress={() => {
            setIsNext(false)
          }}
          style={{ height: 60 }}
        >
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsNext(true)
          }}
          style={{ height: 60 }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </Columns>
      <FlatList renderItem={renderItem} data={isNext ? data2 : data} />
    </SafeAreaView>
  )
}

const App = () => {
  return (
    <StacksProvider
      debug={true}
      spacing={[4, 8]}
      breakpoints={[
        ['mobile', 0],
        ['tablet', 568],
      ]}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={RootScreen} />
          <Tab.Screen name="Columns" component={TestScreenColumns} />
          <Tab.Screen name="Views" component={TestScreenViews} />
        </Tab.Navigator>
      </NavigationContainer>
    </StacksProvider>
  )
}

export default App
