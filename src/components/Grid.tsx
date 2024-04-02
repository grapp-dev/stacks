import * as React from 'react';
import { Platform, Text } from 'react-native';
import { createStyleSheet, UnistylesRuntime, useStyles } from 'react-native-unistyles';

import { useResponsiveProp, useSpacingHelpers } from '../hooks';
import type { ResponsiveProp } from '../types';
import { makeWithIndex } from '../utils';
import { Box } from './Box';
import { FloatBox } from './FloatBox';

type Props = {
  readonly gutter?: ResponsiveProp<number>;
  readonly margin?: ResponsiveProp<number>;
  readonly columns?: ResponsiveProp<number>;
  readonly opacity?: ResponsiveProp<number>;
  readonly color?: ResponsiveProp<string>;
};

type Options = {
  readonly width: number;
  readonly columns: number;
  readonly gutter: number;
  readonly margin: number;
};

const calculateColumnWidth = (options: Options) => {
  const { columns } = options;
  const gutterCount = columns - 1;
  return (options.width - options.margin * 2 - gutterCount * options.gutter) / columns;
};

const calculateGridWidth = (options: Options) => {
  const { columns } = options;
  const gutterCount = columns - 1;
  return options.width * columns + gutterCount * options.gutter + options.margin * 2;
};

export const Grid = (props: Props) => {
  const { gutter = 2, margin = 2, opacity = 0.2, columns = 8, color = 'red' } = props;

  const { multiply } = useSpacingHelpers();
  const { styles } = useStyles(stylesheet);
  const resolveResponsiveProp = useResponsiveProp();

  const numberOfColumns = resolveResponsiveProp(columns);
  const defaultOpacity = resolveResponsiveProp(opacity);
  const backgroundColor = resolveResponsiveProp(color);

  const options: Options = {
    width: UnistylesRuntime.screen.width,
    columns: numberOfColumns,
    margin: multiply(resolveResponsiveProp(margin)),
    gutter: multiply(resolveResponsiveProp(gutter)),
  };

  const columnWidth = calculateColumnWidth(options);
  const gridWidth = calculateGridWidth({
    ...options,
    width: columnWidth,
  });
  const columnStyle = { opacity: defaultOpacity, backgroundColor };

  return (
    <>
      <FloatBox
        offset={0}
        paddingX={margin}
        direction="row"
        alignX="center"
        gap={gutter}
        style={styles.root}
      >
        {makeWithIndex(numberOfColumns, index => {
          return <Box key={index} style={columnStyle} flex="fluid" />;
        })}
      </FloatBox>
      {gridWidth !== UnistylesRuntime.screen.width ? (
        <FloatBox padding={2} right={16} bottom={32} backgroundColor="red" borderRadius={4}>
          <Text
            style={styles.text}
          >{`Calculated grid width (${gridWidth}) doesn't equal to the window width (${UnistylesRuntime.screen.width}). Please, adjust \`Grid\` options.`}</Text>
        </FloatBox>
      ) : null}
    </>
  );
};

const stylesheet = createStyleSheet({
  root: {
    pointerEvents: 'none',
  },
  text: {
    color: 'white',
    fontFamily:
      Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'sans-serif',
  },
});
