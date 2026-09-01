import type * as React from 'react';

import type { Box } from './Box';

type Props = Omit<
  React.ComponentProps<typeof Box>,
  | 'backgroundColor'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderRightWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
  | 'borderColor'
>;

const columnTypes = new Set<unknown>();

const markAsColumn = <T,>(Component: T) => {
  columnTypes.add(Component);
  return Component;
};

export const isColumnType = (type: unknown) => {
  return columnTypes.has(type);
};

export const Column = markAsColumn((_props: Props): React.ReactElement => {
  throw new Error('Column must be a direct child of Columns.');
}) as React.ComponentType<Props> & {
  from: <T>(Component: T) => T;
};

Column.from = markAsColumn;
Column.displayName = 'Column';
