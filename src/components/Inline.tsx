import * as React from 'react';

import { AxisX, AxisY, ResponsiveProp, Space } from '../types';
import { Box } from './Box';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY' | 'direction' | 'wrap'
>;

type Props = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly spaceX?: ResponsiveProp<number>;
  readonly spaceY?: ResponsiveProp<number>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
};

export const Inline = (props: Props) => {
  const { space, children, spaceX, spaceY, ...rest } = props;

  return (
    <Box {...rest} gap={space} rowGap={spaceY} columnGap={spaceX} direction="row" wrap="wrap">
      {children}
    </Box>
  );
};
