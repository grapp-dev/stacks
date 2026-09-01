import * as React from 'react';

import { Column, Columns } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Columns space={2} reverse={true}>
      <Column flex="1/4">
        <Placeholder label="1" />
      </Column>
      <Placeholder label="2" />
      <Column flex="1/4">
        <Placeholder label="3" />
      </Column>
    </Columns>
  );
};

export default Example;
