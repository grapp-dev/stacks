import * as React from 'react';

import { Stack, Tiles } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={8}>
      <Tiles space={2} columns={2}>
        <Placeholder label="1" />
        <Placeholder label="1" />
        <Placeholder label="3" />
        <Placeholder label="4" />
      </Tiles>
      <Tiles spaceX={2} spaceY={4} columns={3}>
        <Placeholder label="1" />
        <Placeholder label="2" />
        <Placeholder label="3" />
        <Placeholder label="4" />
      </Tiles>
    </Stack>
  );
};

export default Example;
