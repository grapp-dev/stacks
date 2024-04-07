/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Column, Columns, Hidden, Stack } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';
import { Screen } from '../components/Screen';

const Page = () => {
  return (
    <Screen space={8} paddingX={4}>
      <Screen.ScrollView>
        <Stack space={8}>
          <Stack space={2}>
            <Columns
              space={2}
              backgroundColor="yellow"
              borderRadius={10}
              borderWidth={1}
              borderColor="green"
            >
              <Column flex="1/2">
                <Placeholder label="1/2" backgroundColor="transparent" />
              </Column>
              <Column flex="1/2">
                <Placeholder label="1/2" backgroundColor="transparent" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
              <Column flex="1/2">
                <Placeholder label="1/2" />
              </Column>
              <Column flex="1/4">
                <Placeholder label="1/4" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/3">
                <Placeholder label="1/3" />
              </Column>
              <Column flex="1/3">
                <Placeholder label="1/3" />
              </Column>
              <Column flex="1/3">
                <Placeholder label="1/3" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="2/3">
                <Placeholder label="2/3" />
              </Column>
              <Column flex="1/3">
                <Placeholder label="1/3" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/4" backgroundColor="red" borderWidth={1}>
                <Placeholder label="1/4" backgroundColor="transparent" />
              </Column>
              <Column flex="3/4">
                <Placeholder label="3/4" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/5">
                <Placeholder label="1/5" />
              </Column>
              <Column flex="2/5">
                <Placeholder label="2/5" />
              </Column>
              <Column flex="2/5">
                <Placeholder label="2/5" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/5">
                <Placeholder label="1/5" />
              </Column>
              <Column flex="3/5">
                <Placeholder label="3/5" />
              </Column>
              <Column flex="1/5">
                <Placeholder label="1/5" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Column flex="1/5">
                <Placeholder label="1/5" />
              </Column>
              <Column flex="4/5">
                <Placeholder label="4/5" />
              </Column>
            </Columns>

            <Columns space={2}>
              <Placeholder label="1" />
              <Hidden below="tablet">
                <Placeholder label="2" />
              </Hidden>
              <Placeholder label="3" />
            </Columns>
          </Stack>
          <Columns space={4}>
            <Placeholder label="1" />
            <Placeholder label="2" />
            <Placeholder label="3" />
          </Columns>
          <Columns space={4} reverse={true}>
            <Placeholder label="1" />
            <Placeholder label="2" />
            <Placeholder label="3" />
          </Columns>
          <Columns alignX="center" defaultFlex="content" space={2}>
            <Placeholder width={40} label="1" />
            <Placeholder width={40} label="2" />
            <Placeholder width={40} label="3" />
          </Columns>
          <Columns defaultFlex="content" space={2}>
            <Placeholder width={40} label="1" />
            <Column flex="fluid">
              <Placeholder label="2, fluid" />
            </Column>
            <Placeholder width={40} label="3" />
          </Columns>
          <Columns space={2} defaultFlex="content" alignY="center" alignX="between">
            <Placeholder height={50} width={40} label="1" />
            <Placeholder height={90} width={40} label="2" />
            <Placeholder height={70} width={40} label="3" />
            <Placeholder height={50} width={40} label="4" />
          </Columns>
          <Columns space={4} alignY="bottom">
            <Column width={100} alignY="center">
              <Placeholder label="1" />
            </Column>
            <Columns space={2} height={200}>
              <Placeholder flex="fluid" label="2.1" />
              <Placeholder flex="fluid" label="2.2" />
              <Placeholder flex="fluid" label="2.3" />
            </Columns>
            <Column flex="content">
              <Placeholder width={60} label="3" />
            </Column>
          </Columns>
          <Columns space={2} collapseBelow="tablet">
            <Placeholder label="1" />
            <Column>
              <Placeholder label="2" />
            </Column>
            <Placeholder label="3" />
          </Columns>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

export default Page;
