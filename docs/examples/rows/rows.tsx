import * as React from 'react';

import { Row, Rows } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Rows space={2}>
      <Row flex="content">
        <Placeholder label="header" height={60} />
      </Row>
      <Row>
        <Placeholder label="body" flex="fluid" />
      </Row>
      <Row flex="content">
        <Placeholder label="footer" height={60} />
      </Row>
    </Rows>
  );
};

export default Example;
