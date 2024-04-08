/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import * as React from 'react';

import { Bleed, Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.ScrollView>
        <Stack space={4}>
          <Placeholder />
          <Bleed horizontal={4}>
            <Placeholder label="horizontal = 4" />
          </Bleed>
          <Placeholder />
          <Bleed vertical={4}>
            <Placeholder label="vertical = 4" />
          </Bleed>
          <Placeholder />
          <Bleed bottom={4}>
            <Placeholder label="bottom = 4" />
          </Bleed>
          <Placeholder />
          <Placeholder />
          <Bleed top={4}>
            <Placeholder label="top = 4" />
          </Bleed>
          <Bleed left={4}>
            <Placeholder label="left = 4" />
          </Bleed>
          <Bleed right={4}>
            <Placeholder label="right = 4" />
          </Bleed>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
