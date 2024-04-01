/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.Content flex="content">
        <Stack space={2}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      </Screen.Content>
      <Screen.ScrollView>
        <Stack space={4} align="right">
          <Placeholder width={140} />
          <Placeholder width={200} />
          <Placeholder width={120} />
          <Placeholder width={140} />
        </Stack>
      </Screen.ScrollView>
      <Screen.ScrollView>
        <Stack space={4} align="center">
          <Placeholder width={140} />
          <Placeholder width={200} />
          <Placeholder width={120} />
          <Placeholder width={140} />
        </Stack>
      </Screen.ScrollView>
      <Screen.ScrollView horizontal={true} flex="content">
        <Stack space={3} align="center" horizontal={true}>
          <Placeholder width={40} />
          <Placeholder width={40} height={60} />
          <Placeholder width={40} height={80} />
          <Placeholder width={40} height={50} />
          <Placeholder width={40} />
          <Placeholder width={40} height={70} />
          <Placeholder width={40} height={60} />
          <Placeholder width={40} />
          <Placeholder width={40} height={60} />
          <Placeholder width={40} height={50} />
          <Placeholder width={40} height={80} />
          <Placeholder width={40} height={70} />
          <Placeholder width={40} />
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
