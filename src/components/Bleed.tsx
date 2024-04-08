import * as React from 'react';

import type { ResponsiveProp } from '../types';
import { negate } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginStart'
  | 'marginEnd'
>;

export type BleedProps = BoxProps & {
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

export const Bleed = (props: BleedProps) => {
  const { children, space, horizontal, vertical, start, end, top, right, bottom, left, ...rest } =
    props;

  return (
    <Box
      {...rest}
      margin={negate(space)}
      marginX={negate(horizontal)}
      marginY={negate(vertical)}
      marginStart={negate(start)}
      marginEnd={negate(end)}
      marginTop={negate(top)}
      marginRight={negate(right)}
      marginBottom={negate(bottom)}
      marginLeft={negate(left)}
    >
      {children}
    </Box>
  );
};

Bleed.displayName = 'Bleed';
