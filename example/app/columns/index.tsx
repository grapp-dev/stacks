/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Column, Columns, Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.ScrollView>
        <Stack space={8}>
          <Columns space={4}>
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </Columns>
          <Columns alignX="center" defaultFlex="content" space={2}>
            <Placeholder width={40} />
            <Placeholder width={40} />
            <Placeholder width={40} />
          </Columns>
          <Columns defaultFlex="content" space={2}>
            <Placeholder width={40} />
            <Column flex="fluid">
              <Placeholder />
            </Column>
            <Placeholder width={40} />
          </Columns>
          <Columns space={2} defaultFlex="content" alignY="center" alignX="evenly">
            <Placeholder height={50} width={40} />
            <Placeholder height={90} width={40} />
            <Placeholder height={70} width={40} />
            <Placeholder height={50} width={40} />
          </Columns>
          <Columns space={4} alignY="bottom">
            <Placeholder />
            <Columns space={2} height={100}>
              <Placeholder flex="fluid" />
              <Placeholder flex="fluid" />
              <Placeholder flex="fluid" />
            </Columns>
            <Placeholder />
          </Columns>
          <Columns space={2} collapseBelow="tablet">
            <Placeholder />
            <Column>
              <Placeholder />
            </Column>
            <Placeholder />
          </Columns>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
