import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid" columnGap={2} direction="row">
      <Box alignY="top">
        <Placeholder height={80} width={48} label="top" />
      </Box>
      <Box alignY="center">
        <Placeholder height={80} width={48} label="center" />
      </Box>
      <Box alignY="bottom">
        <Placeholder height={80} width={48} label="bottom" />
      </Box>
      <Box alignY="between">
        <Placeholder height={80} width={48} label="be" />
        <Placeholder height={80} width={48} label="twe" />
        <Placeholder height={80} width={48} label="en" />
      </Box>
      <Box alignY="around">
        <Placeholder height={80} width={48} label="ar" />
        <Placeholder height={80} width={48} label="ou" />
        <Placeholder height={80} width={48} label="nd" />
      </Box>
      <Box alignY="evenly">
        <Placeholder height={80} width={48} label="ev" />
        <Placeholder height={80} width={48} label="en" />
        <Placeholder height={80} width={48} label="ly" />
      </Box>
    </Box>
  );
};

export default Example;
