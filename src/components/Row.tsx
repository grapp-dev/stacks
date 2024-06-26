import * as React from 'react';

import { BoxProps } from './Box';

export const Row = (_props: BoxProps): JSX.Element => {
  throw new Error('[Stacks] Row must be a direct child of Rows.');
};

const markAsRow = (node: React.FC) => {
  // @ts-expect-error: this_is_fine.png
  node.__isRow__ = true;
};

const from = <T extends React.FC<any>>(Component: T) => {
  // @ts-expect-error: this_is_fine.png
  Component.__isRowForwarded__ = true;
  return Component;
};

Row.from = from;
Row.displayName = 'Row';
markAsRow(Row);
