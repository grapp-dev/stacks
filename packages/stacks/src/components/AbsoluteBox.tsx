import type * as React from 'react';
import type { DimensionValue, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { ResponsiveProp } from '../types';
import { resolveResponsiveStyle } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'flex'>;

type AbsoluteBoxProps = {
  readonly inset?: ResponsiveProp<DimensionValue>;
  readonly top?: ResponsiveProp<DimensionValue>;
  readonly right?: ResponsiveProp<DimensionValue>;
  readonly bottom?: ResponsiveProp<DimensionValue>;
  readonly left?: ResponsiveProp<DimensionValue>;
};

type Props = BoxProps & AbsoluteBoxProps;

export const AbsoluteBox = (props: Props) => {
  const { children, inset, top, right, bottom, left, style, ...rest } = props;

  return (
    <Box
      {...rest}
      style={[
        styles.from({
          inset,
          top,
          right,
          bottom,
          left,
        }) as ViewStyle,
        style,
      ]}
    >
      {children}
    </Box>
  );
};

AbsoluteBox.displayName = 'AbsoluteBox';

const styles = StyleSheet.create({
  from: (props: AbsoluteBoxProps) => {
    const { inset, top, right, bottom, left } = props;

    return {
      position: 'absolute',
      top: resolveResponsiveStyle('top' in props ? top : inset),
      right: resolveResponsiveStyle('right' in props ? right : inset),
      bottom: resolveResponsiveStyle('bottom' in props ? bottom : inset),
      left: resolveResponsiveStyle('left' in props ? left : inset),
    };
  },
});
