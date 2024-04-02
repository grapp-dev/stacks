/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { Row, Rows } from '@grapp/stacks';

import { Placeholder } from '../components/Placeholder';

const Page = () => {
  return (
    <Rows space={4} defaultFlex="1/5" paddingX={4} paddingTop={14} paddingBottom={6}>
      <Placeholder flex="fluid" label="1" />
      <Row flex="fluid">
        <Rows space={4}>
          <Placeholder flex="fluid" label="2.1" />
          <Rows space={2} alignX="center">
            <Placeholder flex="fluid" width={200} label="2.1.1" />
            <Placeholder flex="fluid" width={280} label="2.1.2" />
            <Placeholder flex="fluid" width={240} label="2.1.3" />
          </Rows>
          <Placeholder flex="fluid" label="2.2" />
        </Rows>
      </Row>
      <Placeholder flex="fluid" label="3" />
    </Rows>
  );
};

export default Page;
