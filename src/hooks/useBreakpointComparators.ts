import * as React from 'react';
import { useStyles } from 'react-native-unistyles';

import { Breakpoint } from '../types';
import { isBreakpointAbove, isBreakpointBelow } from '../utils';

export const useBreakpointComparators = () => {
  const { breakpoint: currentBreakpoint } = useStyles();

  const isBelow = React.useCallback(
    (breakpoint?: Breakpoint) => {
      return isBreakpointBelow(currentBreakpoint, breakpoint);
    },
    [currentBreakpoint],
  );

  const isAbove = React.useCallback(
    (breakpoint?: Breakpoint) => {
      return isBreakpointAbove(currentBreakpoint, breakpoint);
    },
    [currentBreakpoint],
  );

  return { isBelow, isAbove };
};
