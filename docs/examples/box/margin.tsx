import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid" rowGap={4}>
      <Box margin={4}>
        <Placeholder label="margin = 4" />
      </Box>
      <Box marginX={-3}>
        <Placeholder label="marginX = -3" />
      </Box>
      <Box marginY={-3}>
        <Placeholder label="marginY = -3" />
      </Box>
      <Box marginLeft={4}>
        <Placeholder label="marginLeft = 4" />
      </Box>
      <Box marginRight={4}>
        <Placeholder label="marginRight = 4" />
      </Box>
      <Box marginTop={4}>
        <Placeholder label="marginTop = 4" />
      </Box>
      <Box marginBottom={4}>
        <Placeholder label="marginBottom = 4" />
      </Box>
    </Box>
  );
};

export default Example;
