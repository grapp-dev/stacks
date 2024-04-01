import * as React from 'react';

import { AxisY, ResponsiveProp, Space } from '../types';
import { makeWithIndex, resolveResponsiveProp, splitEvery } from '../utils';
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
  readonly empty?: ResponsiveProp<boolean>;
  readonly alignY?: ResponsiveProp<AxisY | Space>;
};

export const Tiles = (props: Props) => {
  const {
    children,
    flex = 'content',
    columns,
    space,
    spaceX,
    spaceY,
    empty = true,
    reverse,
    ...rest
  } = props;

  const numberOfColumns = Math.max(resolveResponsiveProp(columns) ?? 1, 1);
  const isEmpty = resolveResponsiveProp(empty);
  const rows = splitEvery(React.Children.toArray(children), numberOfColumns);

  return (
    <Box {...rest} flex={flex} direction="column" gap={space} rowGap={spaceY}>
      {rows.map((columns, rowIndex) => {
        const elements = makeWithIndex(numberOfColumns, index => {
          return columns[index] ?? null;
        });

        return (
          <Box key={rowIndex} direction="row" gap={space} columnGap={spaceX} reverse={reverse}>
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
