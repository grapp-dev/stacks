import type * as React from 'react';

import type { Box } from './Box';

type Props = React.ComponentProps<typeof Box>;
type RowComponent<P extends Props = Props> = React.ComponentType<P>;

const rowTypes = new Set<RowComponent>();

const markAsRow = <T extends RowComponent>(Component: T) => {
  rowTypes.add(Component);
  return Component;
};

export const isRowType = (type: unknown): type is RowComponent => {
  return typeof type === 'function' && rowTypes.has(type as RowComponent);
};

export const Row = markAsRow((_props: Props): React.ReactElement => {
  throw new Error('Row must be a direct child of Rows.');
}) as RowComponent & {
  from: <T extends RowComponent>(Component: T) => T;
};

Row.from = markAsRow;
Row.displayName = 'Row';
