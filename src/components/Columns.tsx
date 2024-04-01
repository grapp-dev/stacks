import * as React from 'react';

import { AxisX, AxisY, Breakpoint, Flex, ResponsiveProp, Space } from '../types';
import { flattenChildren, isBreakpointBelow } from '../utils';
import { Box } from './Box';
import { Column } from './Column';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'alignX' | 'alignY' | 'direction' | 'gap' | 'rowGap' | 'columnGap'
>;

export type ColumnProps = React.ComponentProps<typeof Column>;

export type ColumnsProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
  readonly collapseBelow?: Breakpoint;
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

const isColumnForwarded = (node: React.ReactNode): node is React.ReactElement => {
  return (
    node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this_is_fine.png
    node.type.__isColumnForwarded__ &&
    React.isValidElement(node)
  );
};

export const Columns = (props: ColumnsProps) => {
  const { children, space, defaultFlex = 'fluid', alignX, collapseBelow, ...rest } = props;

  const isCollapsed = isBreakpointBelow(collapseBelow);
  const direction = isCollapsed ? 'column' : 'row';

  return (
    <Box {...rest} direction={direction} gap={space} alignX={alignX}>
      {React.Children.map(flattenChildren(children), child => {
        if (isColumnForwarded(child)) {
          return React.cloneElement(
            child,
            { ...child.props, flex: child.props.flex ?? defaultFlex },
            child.props.children,
          );
        }

        const props = getColumnProps(child);

        if (props) {
          const { children, flex, ...rest } = props;

          return (
            <Box {...rest} flex={flex ?? defaultFlex}>
              {children}
            </Box>
          );
        }

        return <Box flex={defaultFlex}>{child}</Box>;
      })}
    </Box>
  );
};
