import * as React from 'react';

import { Row, Rows } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Rows space={2} defaultFlex="1/5">
      <Placeholder label="1" flex="fluid" />
      <Row flex="fluid">
        <Placeholder label="2" flex="fluid" />
      </Row>
      <Placeholder label="3" flex="fluid" />
      <Placeholder label="4" flex="fluid" />
    </Rows>
  );
};

export default Example;
