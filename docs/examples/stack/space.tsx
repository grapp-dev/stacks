import * as React from 'react';

import { Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={4}>
      <Placeholder label="1" />
      <Stack space={2}>
        <Placeholder label="2.1" />
        <Placeholder label="2.2" />
        <Placeholder label="2.3" />
      </Stack>
      <Placeholder label="3" />
    </Stack>
  );
};

export default Example;
