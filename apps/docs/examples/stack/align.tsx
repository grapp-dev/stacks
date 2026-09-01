import * as React from 'react';

import { Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={2} align="center">
      <Placeholder width={140} label="1" />
      <Placeholder width={200} label="2" />
      <Placeholder width={120} label="3" />
      <Placeholder width={140} label="4" />
    </Stack>
  );
};

export default Example;
