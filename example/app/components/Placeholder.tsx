import * as React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AxisX, AxisY, Box, Flex, Space } from '@grapp/stacks';

type Props = React.PropsWithChildren<{
  readonly height?: number;
  readonly width?: number;
  readonly flex?: Flex;
  readonly alignX?: AxisX | Space;
  readonly alignY?: AxisY | Space;
}>;

export const Placeholder = (props: Props) => {
  const { width, height = 40, flex, children, alignX = 'center', alignY = 'center' } = props;
  const { styles } = useStyles(stylesheet);

  const common = {
    backgroundColor: '#1BCABE',
    borderRadius: height / 2,
    style: styles.root,
    alignY: alignY,
    alignX: alignX,
  };

  if (flex) {
    return (
      <Box {...common} flex="fluid">
        {children}
      </Box>
    );
  }

  return (
    <Box {...common} width={width} height={height}>
      {children}
    </Box>
  );
};

const stylesheet = createStyleSheet({
  root: {
    borderColor: '#1D525640',
    borderWidth: 1,
  },
});
