import * as React from 'react';

import { Tiles } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Tiles space={2} columns={3} fill={true}>
      <Placeholder label="1" />
      <Placeholder label="2" />
      <Placeholder label="3" />
      <Placeholder label="4" />
    </Tiles>
  );
};

export default Example;
