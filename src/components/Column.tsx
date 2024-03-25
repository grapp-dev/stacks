import * as React from 'react';

import { BoxProps } from './Box';

export const Column = (_props: BoxProps): JSX.Element => {
  throw new Error('Column must be a direct child of Columns.');
};

export const markAsColumn = (node: React.FC) => {
  // @ts-expect-error: this_is_fine.png
  // eslint-disable-next-line functional/immutable-data
  node.__isColumn__ = true;
};

markAsColumn(Column);
