import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid" rowGap={4}>
      <Box alignX="left">
        <Placeholder width={70} label="left" />
      </Box>
      <Box alignX="center">
        <Placeholder width={70} label="center" />
      </Box>
      <Box alignX="right">
        <Placeholder width={70} label="right" />
      </Box>
      <Box alignX="between" direction="row">
        <Placeholder width={70} label="be" />
        <Placeholder width={70} label="twe" />
        <Placeholder width={70} label="en" />
      </Box>
      <Box alignX="around" direction="row">
        <Placeholder width={70} label="ar" />
        <Placeholder width={70} label="ou" />
        <Placeholder width={70} label="nd" />
      </Box>
      <Box alignX="evenly" direction="row">
        <Placeholder width={70} label="ev" />
        <Placeholder width={70} label="en" />
        <Placeholder width={70} label="ly" />
      </Box>
    </Box>
  );
};

export default Example;
