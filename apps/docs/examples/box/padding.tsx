import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid" rowGap={4}>
      <Box padding={4}>
        <Placeholder label="padding = 4" />
      </Box>
      <Box paddingX={4}>
        <Placeholder label="paddingX = 4" />
      </Box>
      <Box paddingY={4}>
        <Placeholder label="paddingY = 4" />
      </Box>
      <Box paddingLeft={4}>
        <Placeholder label="paddingLeft = 4" />
      </Box>
      <Box paddingRight={4}>
        <Placeholder label="paddingRight = 4" />
      </Box>
      <Box paddingTop={4}>
        <Placeholder label="paddingTop = 4" />
      </Box>
      <Box paddingBottom={4}>
        <Placeholder label="paddingBottom = 4" />
      </Box>
    </Box>
  );
};

export default Example;
