import * as React from 'react';

import { Box } from './Box';

import type { ResponsiveProp } from '../types';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  | 'padding'
  | 'paddingX'
  | 'paddingY'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingStart'
  | 'paddingEnd'
>;

export type InsetProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly horizontal?: ResponsiveProp<number>;
  readonly vertical?: ResponsiveProp<number>;
  readonly top?: ResponsiveProp<number>;
  readonly right?: ResponsiveProp<number>;
  readonly bottom?: ResponsiveProp<number>;
  readonly left?: ResponsiveProp<number>;
  readonly start?: ResponsiveProp<number>;
  readonly end?: ResponsiveProp<number>;
};

export const Inset = (props: InsetProps) => {
  const { children, space, horizontal, vertical, start, end, top, right, bottom, left, ...rest } =
    props;

  return (
    <Box
      {...rest}
      padding={space}
      paddingX={horizontal}
      paddingY={vertical}
      paddingStart={start}
      paddingEnd={end}
      paddingTop={top}
      paddingRight={right}
      paddingBottom={bottom}
      paddingLeft={left}
    >
      {children}
    </Box>
  );
};

Inset.displayName = 'Inset';
