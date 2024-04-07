import * as React from 'react';

import type { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../types';
import { flattenChildren } from '../utils';
import { Box } from './Box';
import { Row } from './Row';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'direction' | 'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY'
>;

export type RowProps = React.ComponentProps<typeof Row>;

export type RowsProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX>;
  readonly alignY?: ResponsiveProp<AxisY | Space>;
};

const getRowProps = (node: React.ReactNode): RowProps | null => {
  return node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this is ok
    node.type.__isRow__
    ? (node.props as RowProps)
    : null;
};

const isRowForwarded = (node: React.ReactNode): node is React.ReactElement => {
  return (
    node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this is ok
    node.type.__isRowForwarded__ &&
    React.isValidElement(node)
  );
};

export const Rows = (props: RowsProps) => {
  const { children, space, defaultFlex = 'fluid', ...rest } = props;

  return (
    <Box {...rest} flex="fluid" direction="column" gap={space}>
      {React.Children.map(flattenChildren(children), child => {
        if (isRowForwarded(child)) {
          return React.cloneElement(
            child,
            { ...child.props, flex: child.props.flex ?? defaultFlex },
            child.props.children,
          );
        }

        const props = getRowProps(child);

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
