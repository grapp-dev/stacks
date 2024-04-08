/* eslint-disable react-native/no-raw-text */
import * as React from 'react';

/* eslint-disable import/no-default-export */
import { FloatBox } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="fluid">
        <FloatBox offset="20%">
          <Placeholder flex="fluid" label="offset: 20%" />
        </FloatBox>
        <FloatBox top={0} left={0}>
          <Placeholder width={80} label="t: 0, l: 0" />
        </FloatBox>
        <FloatBox top={0} right={0}>
          <Placeholder width={80} label="t: 0, r: 0" />
        </FloatBox>
        <FloatBox bottom={0} left={0}>
          <Placeholder width={80} label="b: 0, l: 0" />
        </FloatBox>
        <FloatBox bottom={0} right={0}>
          <Placeholder width={80} label="b: 0, r: 0" />
        </FloatBox>
        <FloatBox bottom="40%" right="10%" left="10%">
          <Placeholder label="b: 40%, r: 10%, l: 10%" />
        </FloatBox>
        <FloatBox top="40%" right="10%" left="10%">
          <Placeholder label="t: 40%, r: 10%, l: 10%" />
        </FloatBox>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
