import { StyleSheet } from 'react-native-unistyles';

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

const themes = {
  light: theme,
  dark: theme,
};

type Breakpoints = typeof breakpoints;

type Themes = {
  readonly light: typeof theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends Breakpoints {}
  export interface UnistylesThemes extends Themes {}
}

declare module '@grapp/stacks' {
  export interface StacksBreakpoints extends Breakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
  themes,
});
