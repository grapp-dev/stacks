/* eslint-disable react-native/no-raw-text */
import * as React from 'react';

/* eslint-disable import/no-default-export */
import { Inline, Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="content">
        <Stack space={8}>
          <Inline space={2}>
            <Placeholder width={60} height={20} label="1" />
            <Placeholder width={80} height={20} label="2" />
            <Placeholder width={70} height={20} label="3" />
            <Placeholder width={40} height={20} label="4" />
            <Placeholder width={50} height={20} label="5" />
            <Placeholder width={60} height={20} label="6" />
            <Placeholder width={60} height={20} label="7" />
            <Placeholder width={40} height={20} label="8" />
            <Placeholder width={70} height={20} label="9" />
          </Inline>
          <Inline spaceX={3} spaceY={5}>
            <Placeholder width={60} height={20} label="1" />
            <Placeholder width={80} height={20} label="2" />
            <Placeholder width={70} height={20} label="3" />
            <Placeholder width={40} height={20} label="4" />
            <Placeholder width={50} height={20} label="5" />
            <Placeholder width={60} height={20} label="6" />
            <Placeholder width={60} height={20} label="7" />
            <Placeholder width={40} height={20} label="8" />
            <Placeholder width={70} height={20} label="9" />
          </Inline>
          <Inline space={2} alignX="center">
            <Placeholder width={60} height={20} label="1" />
            <Placeholder width={80} height={20} label="2" />
            <Placeholder width={70} height={20} label="3" />
            <Placeholder width={40} height={20} label="4" />
            <Placeholder width={50} height={20} label="5" />
            <Placeholder width={60} height={20} label="6" />
            <Placeholder width={60} height={20} label="7" />
            <Placeholder width={40} height={20} label="8" />
            <Placeholder width={70} height={20} label="9" />
          </Inline>
          <Inline space={2} alignX="between" alignY="center">
            <Placeholder width={60} height={50} label="1" />
            <Placeholder width={80} height={30} label="2" />
            <Placeholder width={70} height={40} label="3" />
            <Placeholder width={40} height={60} label="4" />
            <Placeholder width={50} height={40} label="5" />
            <Placeholder width={60} height={30} label="6" />
            <Placeholder width={60} height={50} label="7" />
            <Placeholder width={40} height={60} label="8" />
            <Placeholder width={70} height={30} label="9" />
          </Inline>
          <Inline space={2} collapseBelow="tablet">
            <Placeholder width={60} height={20} label="1" />
            <Placeholder width={80} height={20} label="2" />
            <Placeholder width={70} height={20} label="3" />
            <Placeholder width={40} height={20} label="4" />
            <Placeholder width={50} height={20} label="5" />
            <Placeholder width={60} height={20} label="6" />
            <Placeholder width={60} height={20} label="7" />
            <Placeholder width={40} height={20} label="8" />
            <Placeholder width={70} height={20} label="9" />
          </Inline>
          <Inline space={2} alignX="between" backgroundColor="red">
            <Placeholder width={60} height={20} label="1" />
            <Placeholder width={80} height={20} label="2" />
            <Placeholder width={70} height={20} label="3" />
            <Placeholder width={40} height={20} label="4" />
            <Placeholder width={50} height={20} label="5" />
            <Placeholder width={60} height={20} label="6" />
            <Placeholder width={60} height={20} label="7" />
            <Placeholder width={40} height={20} label="8" />
            <Placeholder width={70} height={20} label="9" />
          </Inline>
        </Stack>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
