import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { AxisY, ResponsiveProp, Space } from '../types';
import { resolveFlexBasis, resolveResponsiveStyle } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'wrap'>;

type TilesProps = {
  readonly columns?: ResponsiveProp<number>;
  readonly fill?: ResponsiveProp<boolean>;
  readonly alignY?: ResponsiveProp<AxisY | Space>;
};

type Props = BoxProps & TilesProps;

export const Tiles = (props: Props) => {
  const { children, columns = 1, fill = false, ...rest } = props;

  return (
    <Box {...rest} direction="row" wrap="wrap">
      {React.Children.toArray(children).map((child, index) => {
        return (
          <Box key={index} style={styles.tile({ columns, fill }) as ViewStyle}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Tiles.displayName = 'Tiles';

const styles = StyleSheet.create({
  tile: (props: Omit<TilesProps, 'alignY'>) => {
    const { columns, fill } = props;

    return {
      flexBasis: resolveFlexBasis(columns),
      flexGrow: resolveResponsiveStyle(fill, {
        false: 0,
        true: 1,
      }),
      flexShrink: 0,
    };
  },
});
