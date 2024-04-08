import * as React from 'react';

import { Columns, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={4}>
      <Columns space={2} alignY="top">
        <Placeholder height={60} label="1" />
        <Placeholder height={160} label="2" />
        <Placeholder height={120} label="3" />
        <Placeholder height={80} label="4" />
      </Columns>

      <Columns space={2} alignY="center">
        <Placeholder height={80} label="1" />
        <Placeholder height={120} label="2" />
        <Placeholder height={160} label="3" />
        <Placeholder height={60} label="4" />
      </Columns>

      <Columns space={2} alignY="bottom">
        <Placeholder height={60} label="1" />
        <Placeholder height={160} label="2" />
        <Placeholder height={120} label="3" />
        <Placeholder height={80} label="4" />
      </Columns>
    </Stack>
  );
};

export default Example;
