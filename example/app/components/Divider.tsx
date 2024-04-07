import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '@grapp/stacks';

type Props = {
  readonly color?: string;
};

export const Divider = (props: Props) => {
  const { color = '#aaa' } = props;

  return <Box backgroundColor={color} height={StyleSheet.hairlineWidth} flex="fluid" />;
};
