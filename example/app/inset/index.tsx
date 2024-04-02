/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Inset, Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.ScrollView>
        <Stack space={4}>
          <Placeholder />
          <Inset horizontal={4}>
            <Placeholder label="horizontal = 4" />
          </Inset>
          <Placeholder />
          <Inset vertical={4}>
            <Placeholder label="vertical = 4" />
          </Inset>
          <Placeholder />
          <Inset bottom={4}>
            <Placeholder label="bottom = 4" />
          </Inset>
          <Placeholder />
          <Placeholder />
          <Inset top={4}>
            <Placeholder label="top = 4" />
          </Inset>
          <Inset left={4}>
            <Placeholder label="left = 4" />
          </Inset>
          <Inset right={4}>
            <Placeholder label="right = 4" />
          </Inset>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
