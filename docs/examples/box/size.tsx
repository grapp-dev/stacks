import * as React from 'react';

import { Box } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box alignX="center" rowGap={4} flex="fluid">
      <Box width={128} height={128}>
        <Placeholder flex="fluid" label="128x128" />
      </Box>
      <Box height={96} width={96}>
        <Placeholder flex="fluid" label="96x96" />
      </Box>
      <Box height={64} width={64}>
        <Placeholder flex="fluid" label="64x64" />
      </Box>
      <Box height={48} width={48}>
        <Placeholder flex="fluid" label="48x48" />
      </Box>
    </Box>
  );
};

export default Example;
