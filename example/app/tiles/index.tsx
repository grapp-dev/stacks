/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Box, Tiles } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="content">
        <Tiles space={2}>
          <Placeholder label="1" />
          <Placeholder label="2" />
          <Placeholder label="3" />
        </Tiles>
      </Screen.Content>
      <Screen.Content flex="content">
        <Tiles space={2} columns={2}>
          <Placeholder label="1" />
          <Placeholder label="2" />
          <Placeholder label="3" />
        </Tiles>
      </Screen.Content>
      <Screen.Content flex="content">
        <Tiles space={2} columns={4} empty={false}>
          <Placeholder label="1" />
          <Placeholder label="2" />
          <Placeholder label="3" />
          <Placeholder label="4" />
          <Placeholder label="5" />
        </Tiles>
      </Screen.Content>
      <Screen.Content>
        <Tiles flex="fluid" alignY="center" space={2} columns={3} empty={false}>
          <Placeholder width={40} height={50} label="1" />
          <Placeholder width={40} height={60} label="2" />
          <Placeholder width={40} height={50} label="3" />
          <Placeholder height={60} label="4" />
          <Placeholder height={50} label="5" />
        </Tiles>
      </Screen.Content>
      <Screen.Content>
        <Tiles spaceX={6} spaceY={2} columns={2} width={200}>
          <Placeholder flex="fluid" label="1" />
          <Tiles space={2} columns={2}>
            <Placeholder label="2.1" />
            <Placeholder label="2.2" />
            <Placeholder label="2.3" />
            <Placeholder label="2.4" />
          </Tiles>
          <Placeholder label="3" />
          <Placeholder label="4" />
        </Tiles>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
