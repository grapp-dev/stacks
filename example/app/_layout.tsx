/* eslint-disable import/no-default-export */
import { UnistylesRuntime } from 'react-native-unistyles';

import { Box, useSpacingHelpers } from '@grapp/stacks';

import { Stack } from 'expo-router';

import './styles/unistyles';

const Layout = () => {
  const { divide } = useSpacingHelpers();

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default Layout;
