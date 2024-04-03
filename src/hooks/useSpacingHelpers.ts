import * as React from 'react';
import { useStyles } from 'react-native-unistyles';

import { useResponsiveProp } from './useResponsiveProp';

type SpacingHelper = {
  (value: number): number;
  (value: number | undefined): number | undefined;
};

export const useSpacingHelpers = () => {
  const { theme } = useStyles();

  const resolveResponsiveProp = useResponsiveProp();
  // @ts-expect-error: this_is_fine.png
  const spacing = resolveResponsiveProp(theme?.stacks?.spacing ?? 4);

  const multiply = React.useCallback(
    value => {
      if (value) {
        return value * spacing;
      }

      return undefined;
    },
    [spacing],
  ) as SpacingHelper;

  const divide = React.useCallback(
    (value: number | undefined) => {
      if (value) {
        return value / spacing;
      }

      return undefined;
    },
    [spacing],
  ) as SpacingHelper;

  return {
    multiply,
    divide,
  };
};
