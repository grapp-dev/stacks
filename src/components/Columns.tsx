import * as React from 'react';

import { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../types';
import { flattenChildren } from '../utils';
import { Box } from './Box';
import { Column } from './Column';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'alignX' | 'alignY' | 'direction' | 'gap' | 'rowGap' | 'columnGap'
>;

type ColumnProps = React.ComponentProps<typeof Column>;

export type ColumnsProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
};

const getColumnProps = (node: React.ReactNode): ColumnProps | null => {
  return node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this_is_fine.png
    node.type.__isColumn__
    ? (node.props as ColumnProps)
    : null;
};

export const Columns = (props: ColumnsProps) => {
  const { children, space, defaultFlex = 'fluid', alignX, alignY, ...rest } = props;

  return (
    <Box {...rest} direction="row" gap={space} alignX={alignX}>
      {React.Children.map(flattenChildren(children), child => {
        const props = getColumnProps(child);

        if (props) {
          const { children, flex, ...rest } = props;

          return (
            <Box {...rest} flex={flex ?? defaultFlex} alignY={props.alignY ?? alignY}>
              {children}
            </Box>
          );
        }

        return (
          <Box flex={defaultFlex} alignY={alignY}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
