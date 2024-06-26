import * as React from 'react';

import { Box } from './Box';

import { useBreakpointComparators } from '../hooks';
import type { AxisX, AxisY, Breakpoint, ResponsiveProp, Space } from '../types';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY' | 'direction' | 'wrap'
>;

export type InlineProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly spaceX?: ResponsiveProp<number>;
  readonly spaceY?: ResponsiveProp<number>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
  readonly collapseBelow?: Breakpoint;
};

export const Inline = (props: InlineProps) => {
  const { space, children, spaceX, spaceY, alignX, alignY, collapseBelow, ...rest } = props;
  const breakpoint = useBreakpointComparators();

  const isCollapsed = breakpoint.isBelow(collapseBelow);
  const direction = isCollapsed ? 'column' : 'row';
  const wrap = isCollapsed ? 'no-wrap' : 'wrap';

  return (
    <Box
      {...rest}
      direction={direction}
      wrap={wrap}
      gap={space}
      rowGap={spaceY}
      columnGap={spaceX}
      alignX={alignX}
      alignY={alignY}
    >
      {children}
    </Box>
  );
};

Inline.displayName = 'Inline';
