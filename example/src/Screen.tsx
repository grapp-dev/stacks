/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

import {
  Box,
  Column,
  Columns,
  Grid,
  Hidden,
  Inline,
  Row,
  Rows,
  Stack,
  Tiles,
  useSpacingHelpers,
} from '@grapp/stacks';

import { StatusBar } from 'expo-status-bar';

import { Placeholder } from './components/Placeholder';

export const Screen = () => {
  const { divide } = useSpacingHelpers();
  return (
    <>
      <Box
        flex="fluid"
        backgroundColor="#fff"
        paddingTop={divide(UnistylesRuntime.insets.top)}
        paddingBottom={divide(UnistylesRuntime.insets.bottom)}
        paddingX={4}
      >
        <StatusBar style="auto" />
        <Rows space={2} alignY="center">
          <Row flex="fluid" paddingX={[0, 12]}>
            <Stack space={4} align="center">
              <Placeholder height={20} width={40} />
              <Placeholder height={40} width={40} />
              <Placeholder height={40} width={40} />
              <Columns space={4} defaultFlex="content" width="100%">
                <Placeholder height={40} width={40} />
                <Column flex="fluid" height={100}>
                  <Placeholder />
                </Column>
                <Placeholder height={40} width={40} />
                <Placeholder height={40} width={40} />
              </Columns>
              <Inline spaceX={2} spaceY={4}>
                <Placeholder height={40} width={40} />
                <Placeholder height={40} width={40} />
                <Placeholder height={40} width={40} />
                <Placeholder height={20} width={40} />
                <Placeholder height={40} width={40} />
                <Placeholder height={40} width={40} />
                <Placeholder height={20} width={40} />
                <Placeholder height={40} width={40} />
                <Placeholder height={20} width={40} />
                <Placeholder height={40} width={40} />
              </Inline>
            </Stack>
          </Row>
          <Hidden below="desktop">
            <Tiles columns={3} space={2}>
              <Placeholder height={10} />
              <Placeholder height={20} />
              <Placeholder height={30} />
              <Placeholder height={40} />
              <Placeholder height={50} />
            </Tiles>
          </Hidden>
        </Rows>
      </Box>
      <Grid columns={8} margin={4} gutter={4} />
    </>
  );
};
