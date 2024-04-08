import * as React from 'react';

import { Columns, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={4}>
      <Columns space={2} defaultFlex="content" alignX="left">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>

      <Columns space={2} defaultFlex="content" alignX="center">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>

      <Columns space={2} defaultFlex="content" alignX="right">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>

      <Columns space={2} defaultFlex="content" alignX="between">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>

      <Columns space={2} defaultFlex="content" alignX="around">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>

      <Columns space={2} defaultFlex="content" alignX="evenly">
        <Placeholder width={50} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={50} label="3" />
      </Columns>
    </Stack>
  );
};

export default Example;
