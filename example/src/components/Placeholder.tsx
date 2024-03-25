import * as React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Box, useDebugStyle } from '@grapp/stacks';

type Props = {
  readonly width?: number;
  readonly height?: number;
};

export const Placeholder = (props: Props) => {
  const { width, height } = props;
  const { styles } = useStyles(stylesheet);

  if (width || height) {
    return (
      <Box
        backgroundColor="#ABD4CD"
        borderRadius={16}
        width={width}
        height={height}
        style={styles.root}
      />
    );
  }

  return <Box flex="fluid" backgroundColor="#ABD4CD" borderRadius={16} style={styles.root} />;
};

const stylesheet = createStyleSheet({
  root: {
    borderColor: '#7BBCB0',
    borderWidth: 1,
  },
});
