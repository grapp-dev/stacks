import * as React from 'react';

import { Box } from './Box';

import { useResponsiveProp } from '../hooks';
import type { AxisX, AxisY, ResponsiveProp } from '../types';
import { flattenChildren, intersperse } from '../utils';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'direction' | 'alignX' | 'alignY' | 'rowGap' | 'columnGap'
>;

export type StackProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly horizontal?: ResponsiveProp<boolean>;
  readonly align?: ResponsiveProp<AxisX | AxisY>;
  readonly divider?: React.ReactElement;
};

export const Stack = (props: StackProps) => {
  const { children, flex = 'content', space, horizontal, align, divider, ...rest } = props;

  const resolveResponsiveProp = useResponsiveProp();
  const isHorizontal = resolveResponsiveProp(horizontal);

  const direction = isHorizontal ? 'row' : 'column';
  const alignY = isHorizontal ? align : undefined;
  const alignX = isHorizontal ? undefined : align;

  return (
    <Box {...rest} flex={flex} direction={direction} gap={space} alignX={alignX} alignY={alignY}>
      {React.isValidElement(divider)
        ? flattenChildren(intersperse(React.Children.toArray(children), divider))
        : children}
    </Box>
  );
};

Stack.displayName = 'Stack';
