import * as React from 'react';

import { Inline, Stack } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Stack space={8}>
      <Inline space={2}>
        <Placeholder width={40} label="1" />
        <Placeholder width={50} label="2" />
        <Placeholder width={90} label="3" />
        <Placeholder width={40} label="4" />
        <Placeholder width={60} label="5" />
        <Placeholder width={80} label="6" />
        <Placeholder width={50} label="7" />
        <Placeholder width={40} label="8" />
        <Placeholder width={50} label="9" />
      </Inline>
      <Inline spaceX={2} spaceY={4}>
        <Placeholder width={60} label="1" />
        <Placeholder width={80} label="2" />
        <Placeholder width={70} label="3" />
        <Placeholder width={40} label="4" />
        <Placeholder width={50} label="5" />
        <Placeholder width={60} label="6" />
        <Placeholder width={60} label="7" />
        <Placeholder width={40} label="8" />
        <Placeholder width={70} label="9" />
      </Inline>
    </Stack>
  );
};

export default Example;
