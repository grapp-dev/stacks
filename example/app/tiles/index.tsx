/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Tiles } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="content">
        <Tiles space={2}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Tiles>
      </Screen.Content>
      <Screen.Content flex="content">
        <Tiles space={2} columns={2}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Tiles>
      </Screen.Content>
      <Screen.Content flex="content">
        <Tiles space={2} columns={4} empty={false}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Tiles>
      </Screen.Content>
      <Screen.Content>
        <Tiles flex="fluid" alignY="center" space={2} columns={4} empty={false}>
          <Placeholder width={40} height={50} />
          <Placeholder width={40} height={60} />
          <Placeholder width={40} height={50} />
          <Placeholder width={40} height={60} />
          <Placeholder height={50} />
        </Tiles>
      </Screen.Content>
      <Screen.Content>
        <Tiles spaceX={6} spaceY={2} columns={2} width={200}>
          <Placeholder flex="fluid" />
          <Tiles space={2} columns={2}>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </Tiles>
          <Placeholder />
          <Placeholder />
        </Tiles>
      </Screen.Content>
    </Screen>
  );
};

export default Page;
