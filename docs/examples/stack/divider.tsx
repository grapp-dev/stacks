import * as React from 'react';

import { Stack } from '@grapp/stacks';

import { Divider } from '../../components/Divider';
import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={3} divider={<Divider />}>
      <Placeholder label="1" />
      <Placeholder label="2" />
      <Placeholder label="3" />
      <Placeholder label="4" />
    </Stack>
  );
};

export default Example;
