import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box rowGap={4}>
      <Box flex="fluid">
        <Placeholder label="fluid" />
      </Box>
      <Box direction="row">
        <Box flex="4/5">
          <Placeholder label="4/5" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="3/4">
          <Placeholder label="3/4" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="2/3">
          <Placeholder label="2/3" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="3/5">
          <Placeholder label="3/5" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/2">
          <Placeholder label="1/2" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/3">
          <Placeholder label="1/3" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/4">
          <Placeholder label="1/4" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/5">
          <Placeholder label="1/5" />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="content">
          <Placeholder width={240} label="content, width: 240" />
        </Box>
      </Box>
    </Box>
  );
};

export default Example;
