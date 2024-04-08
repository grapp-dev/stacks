import * as React from 'react';

import { useResponsiveProp } from '../hooks';
import type { AxisY, ResponsiveProp, Space } from '../types';
import { makeWithIndex, splitEvery } from '../utils';
import { Box } from './Box';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'gap' | 'rowGap' | 'columnGap' | 'direction' | 'alignX' | 'alignY'
>;

type Props = BoxProps & {
  readonly columns?: ResponsiveProp<number>;
  readonly space?: ResponsiveProp<number>;
  readonly spaceX?: ResponsiveProp<number>;
  readonly spaceY?: ResponsiveProp<number>;
  readonly fill?: ResponsiveProp<boolean>;
  readonly alignY?: ResponsiveProp<AxisY | Space>;
};

export const Tiles = (props: Props) => {
  const { children, columns = 1, space, spaceX, spaceY, fill = false, reverse, ...rest } = props;

  const resolveResponsiveProp = useResponsiveProp();

  const numberOfColumns = Math.max(resolveResponsiveProp(columns), 1);
  const shouldFill = resolveResponsiveProp(fill);
  const rows = splitEvery(React.Children.toArray(children), numberOfColumns);

  return (
    <Box {...rest} direction="column" gap={space} rowGap={spaceY}>
      {rows.map((columns, rowIndex) => {
        const elements = makeWithIndex(numberOfColumns, index => {
          return columns[index] ?? null;
        });

        return (
          <Box key={rowIndex} direction="row" gap={space} columnGap={spaceX} reverse={reverse}>
            {elements.map((element, columnIndex) => {
              return React.isValidElement(element) || !shouldFill ? (
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

Tiles.displayName = 'Tiles';
