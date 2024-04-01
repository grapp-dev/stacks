import * as React from 'react';

import { AxisX, AxisY, ResponsiveProp } from '../types';
import { resolveResponsiveProp } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'direction' | 'alignX' | 'alignY' | 'rowGap' | 'columnGap'
>;

type Props = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly horizontal?: ResponsiveProp<boolean>;
  readonly align?: ResponsiveProp<AxisX | AxisY>;
};

export const Stack = (props: Props) => {
  const { children, flex = 'content', space, horizontal, align, ...rest } = props;

  const isHorizontal = resolveResponsiveProp(horizontal);

  const direction = isHorizontal ? 'row' : 'column';
  const alignY = isHorizontal ? align : undefined;
  const alignX = isHorizontal ? undefined : align;

  return (
    <Box {...rest} flex={flex} direction={direction} gap={space} alignX={alignX} alignY={alignY}>
      {children}
    </Box>
  );
};
