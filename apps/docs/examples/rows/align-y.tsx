import * as React from 'react';

import { Row, Rows } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Rows space={2} alignY="center">
      <Row height={60}>
        <Placeholder flex="fluid" label="1" />
      </Row>
      <Row height={140}>
        <Placeholder flex="fluid" label="2" />
      </Row>
      <Row height={100}>
        <Placeholder flex="fluid" label="3" />
      </Row>
    </Rows>
  );
};

export default Example;
