import * as React from 'react';

import type { AxisX, AxisY, Flex, ResponsiveProp, Space } from '../types';
import { Box } from './Box';
import { isRowType, Row } from './Row';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'gapX' | 'gapY'>;
type RowProps = React.ComponentProps<typeof Row>;
type RowElement = React.ReactElement<RowProps, typeof Row>;

type RowsProps = {
  readonly children?: RowElement | readonly RowElement[];
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX>;
  readonly alignY?: ResponsiveProp<AxisY | Space>;
};

type Props = BoxProps & RowsProps;

const getRowProps = (child: React.ReactNode) => {
  if (React.isValidElement<RowProps>(child) && isRowType(child.type)) {
    return child.props;
  }

  return undefined;
};

const resolveRowFlex = (props: RowProps, defaultFlex: ResponsiveProp<Flex>) => {
  return props.height === undefined ? (props.flex ?? defaultFlex) : 'content';
};

export const Rows = (props: Props) => {
  const { children, defaultFlex = 'fluid', ...rest } = props;

  return (
    <Box {...rest} flex="fluid" direction="column">
      {React.Children.map(children as React.ReactNode, (child) => {
        const rowProps = getRowProps(child);

        if (rowProps === undefined) {
          throw new Error('Rows accepts only Row components as direct children.');
        }

        if (React.isValidElement<RowProps>(child) && child.type !== Row) {
          return React.cloneElement(child, {
            flex: resolveRowFlex(rowProps, defaultFlex),
          });
        }

        const { children, ...rest } = rowProps;

        return (
          <Box {...rest} flex={resolveRowFlex(rowProps, defaultFlex)}>
            {children}
          </Box>
        );
      })}
    </Box>
  );
};

Rows.displayName = 'Rows';
