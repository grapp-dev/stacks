import * as React from 'react';

import { ResponsiveProp } from '../types';
import { Box } from './Box';

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

type Props = BoxProps & {
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

export const Inset = (props: Props) => {
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
