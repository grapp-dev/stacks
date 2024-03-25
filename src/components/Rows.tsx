import * as React from 'react';

import { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../types';
import { flattenChildren } from '../utils';
import { Box } from './Box';
import { Row } from './Row';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'flex' | 'direction' | 'gap' | 'rowGap' | 'columnGap' | 'alignX' | 'alignY'
>;

type RowProps = React.ComponentProps<typeof Row>;

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

export const Rows = (props: RowsProps) => {
  const { children, space, defaultFlex = 'fluid', alignX, alignY, ...rest } = props;

  return (
    <Box {...rest} flex="fluid" direction="column" gap={space} alignX={alignX} alignY={alignY}>
      {React.Children.map(flattenChildren(children), child => {
        const props = getRowProps(child);

        if (props) {
          const { children, flex, ...rest } = props;

          return (
            <Box
              {...rest}
              flex={flex ?? defaultFlex}
              alignY={props.alignY ?? alignY}
              alignX={props.alignX ?? alignX}
            >
              {children}
            </Box>
          );
        }

        console.log(child);

        return (
          <Box flex={defaultFlex} alignY={alignY} alignX={alignX}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
