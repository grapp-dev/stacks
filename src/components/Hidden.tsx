import * as React from 'react';
import { UnistylesBreakpoints } from 'react-native-unistyles';

import { ResponsiveProp } from '../types';
import { isBreakpointAbove, isBreakpointBelow, resolveResponsiveProp } from '../utils';

type Props = React.PropsWithChildren<{
  readonly above?: ResponsiveProp<keyof UnistylesBreakpoints>;
  readonly below?: ResponsiveProp<keyof UnistylesBreakpoints>;
}>;

export const Hidden = (props: Props) => {
  const { children, below, above } = props;

  if (
    isBreakpointBelow(resolveResponsiveProp(below)) ||
    isBreakpointAbove(resolveResponsiveProp(above))
  ) {
    return null;
  }

  return children;
};
