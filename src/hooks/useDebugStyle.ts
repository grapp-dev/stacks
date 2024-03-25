import * as React from 'react';
import { ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { randomColor } from '../utils';

export const useDebugStyle = (isActive?: boolean) => {
  const { theme } = useStyles();
  const backgroundColor = React.useRef(randomColor()).current;
  const debug = theme?.layout?.debug || isActive;
  const style = React.useRef<ViewStyle | undefined>(debug ? { backgroundColor } : undefined);

  React.useEffect(() => {
    style.current = debug
      ? {
          backgroundColor,
        }
      : undefined;
  }, [debug]);

  return style.current;
};
