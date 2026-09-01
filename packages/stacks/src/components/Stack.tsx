import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { AxisX, AxisY, ResponsiveProp } from '../types';
import { flattenChildren, intersperse, resolveFlexAlignment, resolveResponsiveStyle } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'gapX' | 'gapY'>;

type StackProps = {
  readonly horizontal?: ResponsiveProp<boolean>;
  readonly align?: ResponsiveProp<AxisX | AxisY>;
  readonly divider?: React.ReactElement;
};

export type Props = BoxProps & StackProps;

export const Stack = (props: Props) => {
  const { children, flex = 'content', horizontal, align, divider, style, ...rest } = props;

  return (
    <Box {...rest} flex={flex} style={[styles.from({ horizontal, align }) as ViewStyle, style]}>
      {React.isValidElement(divider)
        ? flattenChildren(intersperse(React.Children.toArray(children), divider))
        : children}
    </Box>
  );
};

Stack.displayName = 'Stack';

const styles = StyleSheet.create({
  from: (props: Omit<StackProps, 'divider'>) => {
    const { align, horizontal } = props;
    const { alignItems, justifyContent } = resolveFlexAlignment({
      alignX: align,
      alignY: align,
      horizontal,
    });

    return {
      flexDirection: resolveResponsiveStyle(horizontal, {
        false: 'column',
        true: 'row',
      }),
      alignItems,
      justifyContent,
    };
  },
});
