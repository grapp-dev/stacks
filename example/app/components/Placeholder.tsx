import * as React from 'react';
import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AxisX, AxisY, Box, Flex, FloatBox, Space } from '@grapp/stacks';

type Props = React.PropsWithChildren<{
  readonly height?: number;
  readonly width?: number;
  readonly flex?: Flex;
  readonly alignX?: AxisX | Space;
  readonly alignY?: AxisY | Space;
  readonly label?: string;
}>;

export const Placeholder = (props: Props) => {
  const { width, height = 40, flex, children, alignX = 'center', alignY = 'center', label } = props;
  const { styles } = useStyles(stylesheet);

  const common = {
    backgroundColor: '#1BCABE',
    borderRadius: height / 2,
    style: styles.root,
    alignY: alignY,
    alignX: alignX,
  };

  const labelComponent = (
    <FloatBox offset={0} alignX="center" alignY="center">
      <Text>{label}</Text>
    </FloatBox>
  );

  if (flex) {
    return (
      <Box {...common} flex={flex} width={width}>
        {children}
        {labelComponent}
      </Box>
    );
  }

  return (
    <Box {...common} flex={flex} width={width} height={height}>
      {children}
      {labelComponent}
    </Box>
  );
};

const stylesheet = createStyleSheet({
  root: {
    borderColor: '#1D525640',
    borderWidth: 1,
  },
});
