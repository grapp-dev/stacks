import type * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { ResponsiveProp } from '../types';
import { resolveNegativeGap } from '../utils';
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

type BleedProps = {
  readonly edge?: ResponsiveProp<number>;
  readonly horizontal?: ResponsiveProp<number>;
  readonly vertical?: ResponsiveProp<number>;
  readonly top?: ResponsiveProp<number>;
  readonly right?: ResponsiveProp<number>;
  readonly bottom?: ResponsiveProp<number>;
  readonly left?: ResponsiveProp<number>;
  readonly start?: ResponsiveProp<number>;
  readonly end?: ResponsiveProp<number>;
};

type Props = BoxProps & BleedProps;

export const Bleed = (props: Props) => {
  const { children, edge, horizontal, vertical, start, end, top, right, bottom, left, style, ...rest } = props;

  return (
    <Box
      {...rest}
      style={[
        styles.from({
          edge,
          horizontal,
          vertical,
          start,
          end,
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

Bleed.displayName = 'Bleed';

const styles = StyleSheet.create((theme) => {
  return {
    from: (props: BleedProps) => {
      const { edge, horizontal, vertical, start, end, top, right, bottom, left } = props;

      const negativeGap = resolveNegativeGap(theme);

      return {
        margin: negativeGap(edge),
        marginHorizontal: negativeGap(horizontal),
        marginVertical: negativeGap(vertical),
        marginStart: negativeGap(start),
        marginEnd: negativeGap(end),
        marginTop: negativeGap(top),
        marginRight: negativeGap(right),
        marginBottom: negativeGap(bottom),
        marginLeft: negativeGap(left),
      };
    },
  };
});
