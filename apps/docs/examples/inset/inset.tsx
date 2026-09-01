import * as React from 'react';

import { Inset, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={2}>
      <Inset space={4}>
        <Placeholder label="space = 4" />
      </Inset>
      <Placeholder />
      <Inset horizontal={4}>
        <Placeholder label="horizontal = 4" />
      </Inset>
      <Placeholder />
      <Inset vertical={4}>
        <Placeholder label="vertical = 4" />
      </Inset>
      <Placeholder />
      <Inset bottom={4}>
        <Placeholder label="bottom = 4" />
      </Inset>
      <Placeholder />
      <Inset top={4}>
        <Placeholder label="top = 4" />
      </Inset>
      <Inset left={4}>
        <Placeholder label="left = 4" />
      </Inset>
      <Inset right={4}>
        <Placeholder label="right = 4" />
      </Inset>
    </Stack>
  );
};

export default Example;
