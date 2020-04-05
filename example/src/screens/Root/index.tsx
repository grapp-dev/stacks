import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider as Stacks, Grid } from '@mobily/stacks'
import { Profile } from 'screens/Profile'

export const Root = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stacks spacing={4} debug={false}>
        <SafeAreaView>
          <Profile />
        </SafeAreaView>
        <Grid margin={4} gutter={2} columns={8} opacity={0.2} />
      </Stacks>
    </>
  )
}
