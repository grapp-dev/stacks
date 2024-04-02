/* eslint-disable react-native/no-raw-text */

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
            <Placeholder width={60} height={20} />
            <Placeholder width={80} height={20} />
            <Placeholder width={70} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={50} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={70} height={20} />
          </Inline>
          <Inline spaceX={3} spaceY={5}>
            <Placeholder width={60} height={20} />
            <Placeholder width={80} height={20} />
            <Placeholder width={70} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={50} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={70} height={20} />
          </Inline>
          <Inline space={2} alignX="center">
            <Placeholder width={60} height={20} />
            <Placeholder width={80} height={20} />
            <Placeholder width={70} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={50} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={60} height={20} />
            <Placeholder width={40} height={20} />
            <Placeholder width={70} height={20} />
          </Inline>
        </Stack>
      </Screen.Content>
      <Screen.Content>
        <Inline space={2} collapseBelow="tablet">
          <Placeholder width={60} height={20} />
          <Placeholder width={80} height={20} />
          <Placeholder width={70} height={20} />
          <Placeholder width={40} height={20} />
          <Placeholder width={50} height={20} />
          <Placeholder width={60} height={20} />
          <Placeholder width={60} height={20} />
          <Placeholder width={40} height={20} />
          <Placeholder width={70} height={20} />
        </Inline>
      </Screen.Content>
      <Screen.Content>
        <Inline flex="fluid" space={2} alignX="between" alignY="center">
          <Placeholder width={60} height={20} />
          <Placeholder width={80} height={20} />
          <Placeholder width={70} height={20} />
          <Placeholder width={40} height={20} />
          <Placeholder width={50} height={20} />
          <Placeholder width={60} height={20} />
          <Placeholder width={60} height={20} />
          <Placeholder width={40} height={20} />
          <Placeholder width={70} height={20} />
        </Inline>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
