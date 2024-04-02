import * as React from 'react';
import { useStyles } from 'react-native-unistyles';

import { ResponsiveProp } from '../types';
import { resolveResponsiveProp } from '../utils';

export const useResponsiveProp = () => {
  const { breakpoint } = useStyles();

  return React.useCallback(
    <T>(value: ResponsiveProp<T>) => {
      return resolveResponsiveProp(value, breakpoint);
    },
    [breakpoint],
  );
};
