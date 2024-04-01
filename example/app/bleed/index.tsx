/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
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
            <Placeholder />
          </Bleed>
          <Placeholder />
          <Bleed vertical={4}>
            <Placeholder />
          </Bleed>
          <Placeholder />
          <Bleed bottom={4}>
            <Placeholder />
          </Bleed>
          <Placeholder />
          <Placeholder />
          <Bleed top={4}>
            <Placeholder />
          </Bleed>
          <Bleed left={4}>
            <Placeholder />
          </Bleed>
          <Bleed right={4}>
            <Placeholder />
          </Bleed>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
