import * as React from 'react';
import { DimensionValue, StyleSheet } from 'react-native';

import { useResponsiveProp } from '../hooks';
import { ResponsiveProp } from '../types';
import { Box } from './Box';

type BoxProps = React.ComponentProps<typeof Box>;

type Props = Omit<BoxProps, 'flex'> & {
  readonly top?: ResponsiveProp<DimensionValue>;
  readonly right?: ResponsiveProp<DimensionValue>;
  readonly bottom?: ResponsiveProp<DimensionValue>;
  readonly left?: ResponsiveProp<DimensionValue>;
  readonly offset?: ResponsiveProp<DimensionValue>;
};

export const FloatBox = (props: Props) => {
  const { children, top, right, bottom, left, offset, style, ...rest } = props;

  const resolveResponsiveProp = useResponsiveProp();

  const all = resolveResponsiveProp(offset);
  const edges = {
    top,
    right,
    bottom,
    left,
  };

  const fillObject = Object.fromEntries(
    Object.entries(edges).map(([key, value]) => {
      return [key, key in props ? resolveResponsiveProp(value) : all ?? null];
    }),
  );

  return (
    <Box {...rest} style={[StyleSheet.absoluteFill, fillObject, style]}>
      {children}
    </Box>
  );
};
