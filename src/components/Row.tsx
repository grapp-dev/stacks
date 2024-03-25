import * as React from 'react';

import { BoxProps } from './Box';

export const Row = (_props: BoxProps): JSX.Element => {
  throw new Error('Row must be a direct child of Rows.');
};

export const markAsRow = (node: React.FC) => {
  // @ts-expect-error: this_is_fine.png
  node.__isRow__ = true;
};

markAsRow(Row);
