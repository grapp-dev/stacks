import * as React from 'react';

import { Box, FloatBox } from '@grapp/stacks';

import { Placeholder } from '../../components/Placeholder';

const Example = () => {
  return (
    <Box flex="fluid">
      <FloatBox offset="20%">
        <Placeholder flex="fluid" label="offset: 20%" />
      </FloatBox>
      <FloatBox top={0} left={0}>
        <Placeholder width={100} label="t: 0, l: 0" />
      </FloatBox>
      <FloatBox top={0} right={0}>
        <Placeholder width={100} label="t: 0, r: 0" />
      </FloatBox>
      <FloatBox bottom={0} left={0}>
        <Placeholder width={100} label="b: 0, l: 0" />
      </FloatBox>
      <FloatBox bottom={0} right={0}>
        <Placeholder width={100} label="b: 0, r: 0" />
      </FloatBox>
    </Box>
  );
};

export default Example;
