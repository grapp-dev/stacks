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
          <Placeholder label="1" />
          <Placeholder label="2" />
          <Placeholder label="3" />
        </Stack>
      </Screen.Content>
      <Screen.ScrollView>
        <Stack space={4} align="right">
          <Placeholder width={140} label="1" />
          <Placeholder width={200} label="2" />
          <Placeholder width={120} label="3" />
          <Placeholder width={140} label="4" />
        </Stack>
      </Screen.ScrollView>
      <Screen.ScrollView>
        <Stack space={4} align="center" reverse={true}>
          <Placeholder width={140} label="1" />
          <Placeholder width={200} label="2" />
          <Placeholder width={120} label="3" />
          <Placeholder width={140} label="4" />
        </Stack>
      </Screen.ScrollView>
      <Screen.ScrollView horizontal={true} flex="content">
        <Stack space={3} align="center" horizontal={true}>
          <Placeholder width={40} label="1" />
          <Placeholder width={40} height={60} label="2" />
          <Placeholder width={40} height={80} label="3" />
          <Placeholder width={40} height={50} label="4" />
          <Placeholder width={40} label="5" />
          <Placeholder width={40} height={70} label="6" />
          <Placeholder width={40} height={60} label="7" />
          <Placeholder width={40} label="8" />
          <Placeholder width={40} height={60} label="9" />
          <Placeholder width={40} height={50} label="10" />
          <Placeholder width={40} height={80} label="11" />
          <Placeholder width={40} height={70} label="12" />
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
