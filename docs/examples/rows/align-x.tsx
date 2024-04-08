import * as React from 'react';

import { Row, Rows } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Rows space={2} alignX="center">
      <Row width={200}>
        <Placeholder flex="fluid" label="1" />
      </Row>
      <Row width={300}>
        <Placeholder flex="fluid" label="2" />
      </Row>
      <Row width={240}>
        <Placeholder flex="fluid" label="3" />
      </Row>
    </Rows>
  );
};

export default Example;
