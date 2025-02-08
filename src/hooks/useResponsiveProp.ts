import * as React from 'react';
import { useUnistyles } from 'react-native-unistyles';

import { Breakpoint, ResponsiveProp } from '../types';
import { resolveResponsiveProp } from '../utils';

export const useResponsiveProp = () => {
  const { rt } = useUnistyles();

  return React.useCallback(
    <T>(value: ResponsiveProp<T>) => {
      return resolveResponsiveProp(value, rt.breakpoint as Breakpoint);
    },
    [rt.breakpoint],
  );
};
