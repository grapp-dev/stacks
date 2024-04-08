import * as React from 'react';

import { Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={4} align="center" horizontal={true}>
      <Placeholder width={40} label="1" />
      <Placeholder width={40} height={60} label="2" />
      <Placeholder width={40} height={80} label="3" />
      <Placeholder width={40} height={50} label="4" />
      <Placeholder width={40} label="5" />
      <Placeholder width={40} height={70} label="6" />
    </Stack>
  );
};

export default Example;
