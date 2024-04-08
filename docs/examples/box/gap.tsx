import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid" columnGap={4} direction="row">
      <Box flex="fluid" rowGap={6}>
        <Placeholder flex="fluid" label="1.1" />
        <Placeholder flex="fluid" label="1.2" />
      </Box>
      <Box flex="fluid" rowGap={8}>
        <Placeholder flex="fluid" label="2.1" />
        <Placeholder flex="fluid" label="2.2" />
        <Placeholder flex="fluid" label="2.3" />
      </Box>
      <Box flex="fluid" rowGap={4}>
        <Placeholder flex="fluid" label="3.1" />
        <Placeholder flex="fluid" label="3.2" />
        <Placeholder flex="fluid" label="3.3" />
      </Box>
    </Box>
  );
};

export default Example;
