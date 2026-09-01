import type * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { AxisX, AxisY, Breakpoint, ResponsiveProp, Space } from '../types';
import { resolveCollapse, resolveFlexAlignment } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'wrap'>;

type InlineProps = {
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
  readonly collapseBelow?: Breakpoint;
};

export type Props = BoxProps & InlineProps;

export const Inline = (props: Props) => {
  const { children, alignX, alignY, collapseBelow, style, ...rest } = props;

  return (
    <Box {...rest} style={[styles.from({ alignX, alignY, collapseBelow }) as ViewStyle, style]}>
      {children}
    </Box>
  );
};

Inline.displayName = 'Inline';

const styles = StyleSheet.create({
  from: (props: InlineProps) => {
    const { alignX, alignY, collapseBelow } = props;
    const { alignItems, justifyContent } = resolveFlexAlignment({
      alignX,
      alignY,
      direction: 'row',
      collapseBelow,
    });

    return {
      flexDirection: resolveCollapse({
        collapseBelow,
        expanded: 'row',
        collapsed: 'column',
      }),
      flexWrap: resolveCollapse({
        collapseBelow,
        expanded: 'wrap',
        collapsed: 'nowrap',
      }),
      alignItems,
      justifyContent,
    };
  },
});
