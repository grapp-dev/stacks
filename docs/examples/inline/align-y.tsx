import * as React from 'react';

import { Inline } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Inline space={2} alignX="between" alignY="center">
      <Placeholder width={60} height={50} label="1" />
      <Placeholder width={80} height={30} label="2" />
      <Placeholder width={70} height={40} label="3" />
      <Placeholder width={40} height={60} label="4" />
      <Placeholder width={50} height={40} label="5" />
      <Placeholder width={60} height={30} label="6" />
      <Placeholder width={60} height={50} label="7" />
      <Placeholder width={40} height={60} label="8" />
      <Placeholder width={70} height={30} label="9" />
    </Inline>
  );
};

export default Example;
