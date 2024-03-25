import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ResponsiveProp } from '../types';
import { resolveResponsiveProp } from '../utils';
import { Box } from './Box';

type BoxProps = React.ComponentProps<typeof Box>;

type Props = Omit<BoxProps, 'flex'> & {
  readonly top?: ResponsiveProp<number>;
  readonly right?: ResponsiveProp<number>;
  readonly bottom?: ResponsiveProp<number>;
  readonly left?: ResponsiveProp<number>;
  readonly offset?: ResponsiveProp<number>;
};

export const FloatBox = (props: Props) => {
  const { children, top, right, bottom, left, offset, style, ...rest } = props;

  const all = resolveResponsiveProp(offset);
  const edges = {
    top,
    right,
    bottom,
    left,
  };

  const fillObject = Object.fromEntries(
    Object.entries(edges).map(([key, value]) => {
      return [key, key in props ? resolveResponsiveProp(value) : all ?? undefined];
    }),
  );

  return (
    <Box {...rest} style={[StyleSheet.absoluteFill, fillObject, style]}>
      {children}
    </Box>
  );
};
