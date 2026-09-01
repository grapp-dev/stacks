import * as React from 'react';

import { Columns } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Columns space={2} collapseBelow="tablet">
      <Placeholder label="1" />
      <Placeholder label="2" />
      <Placeholder label="3" />
      <Placeholder label="4" />
    </Columns>
  );
};

export default Example;
