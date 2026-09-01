import * as React from 'react';

import { Bleed, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={4}>
      <Bleed space={3}>
        <Placeholder label="space = 3" />
      </Bleed>
      <Placeholder />
      <Bleed horizontal={4}>
        <Placeholder label="horizontal = 4" />
      </Bleed>
      <Placeholder />
      <Bleed vertical={3}>
        <Placeholder label="vertical = 3" />
      </Bleed>
      <Placeholder />
      <Bleed bottom={3}>
        <Placeholder label="bottom = 3" />
      </Bleed>
      <Placeholder />
      <Placeholder />
      <Bleed top={3}>
        <Placeholder label="top = 3" />
      </Bleed>
      <Bleed left={4}>
        <Placeholder label="left = 4" />
      </Bleed>
      <Bleed right={4}>
        <Placeholder label="right = 4" />
      </Bleed>
    </Stack>
  );
};

export default Example;
