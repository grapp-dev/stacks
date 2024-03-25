import * as React from 'react';
import { useStyles } from 'react-native-unistyles';

import { resolveResponsiveProp } from '../utils';

type SpacingHelper = {
  (value: number): number;
  (value: number | undefined): number | undefined;
};

export const useSpacingHelpers = () => {
  const { theme } = useStyles();

  const spacing = resolveResponsiveProp(theme?.layout?.spacing ?? 4);

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
