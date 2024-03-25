import * as React from 'react';

import { ResponsiveProp } from '../types';
import { makeWithIndex, resolveResponsiveProp, splitEvery } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'gap' | 'rowGap' | 'columnGap' | 'direction'
>;

type Props = BoxProps & {
  readonly columns?: ResponsiveProp<number>;
  readonly space?: ResponsiveProp<number>;
  readonly spaceX?: ResponsiveProp<number>;
  readonly spaceY?: ResponsiveProp<number>;
  readonly empty?: ResponsiveProp<boolean>;
};

export const Tiles = (props: Props) => {
  const { children, columns, space, spaceX, spaceY, empty, ...rest } = props;

  const numberOfColumns = Math.max(resolveResponsiveProp(columns) ?? 1, 1);
  const isEmpty = resolveResponsiveProp(empty) ?? true;
  const rows = splitEvery(React.Children.toArray(children), numberOfColumns);

  return (
    <Box {...rest} direction="column" gap={space} rowGap={spaceY}>
      {rows.map((columns, rowIndex) => {
        const elements = makeWithIndex(numberOfColumns, index => {
          return columns[index] ?? null;
        });

        return (
          <Box key={rowIndex} direction="row" gap={space} columnGap={spaceX}>
            {elements.map((element, columnIndex) => {
              return React.isValidElement(element) || isEmpty ? (
                <Box key={`${rowIndex}-${columnIndex}`} flex="fluid">
                  {element}
                </Box>
              ) : null;
            })}
          </Box>
        );
      })}
    </Box>
  );
};
