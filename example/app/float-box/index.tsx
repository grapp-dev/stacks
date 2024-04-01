/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { FloatBox } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="fluid">
        <FloatBox offset="20%">
          <Placeholder flex="fluid" />
        </FloatBox>
        <FloatBox top={0} left={0}>
          <Placeholder width={40} />
        </FloatBox>
        <FloatBox top={0} right={0}>
          <Placeholder width={40} />
        </FloatBox>
        <FloatBox bottom={0} left={0}>
          <Placeholder width={40} />
        </FloatBox>
        <FloatBox bottom={0} right={0}>
          <Placeholder width={40} />
        </FloatBox>
        <FloatBox bottom="40%" right="10%" left="10%">
          <Placeholder />
        </FloatBox>
        <FloatBox top="40%" right="10%" left="10%">
          <Placeholder />
        </FloatBox>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
