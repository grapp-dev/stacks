/* eslint-disable @typescript-eslint/no-empty-interface */
import { UnistylesRegistry } from 'react-native-unistyles';

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 998,
} as const;

const theme = {
  stacks: {
    spacing: 4,
    debug: false,
  },
};

type Breakpoints = typeof breakpoints;

type Themes = {
  readonly light: typeof theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends Breakpoints {}
  export interface UnistylesThemes extends Themes {}
}

UnistylesRegistry.addBreakpoints(breakpoints).addThemes({
  light: theme,
});
