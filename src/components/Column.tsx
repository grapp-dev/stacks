import * as React from 'react';

import { BoxProps } from './Box';

export const Column = (_props: BoxProps): JSX.Element => {
  throw new Error('[Stacks] Column must be a direct child of Columns.');
};

const markAsColumn = (node: React.FC) => {
  // @ts-expect-error: this_is_fine.png
  // eslint-disable-next-line functional/immutable-data
  node.__isColumn__ = true;
};

const from = <T extends React.FC<any>>(Component: T) => {
  // @ts-expect-error: this_is_fine.png
  Component.__isColumnForwarded__ = true;
  return Component;
};

Column.from = from;
Column.displayName = 'Column';
markAsColumn(Column);
