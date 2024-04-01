import { UnistylesRegistry } from 'react-native-unistyles';

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 998,
} as const;

const lightTheme = {
  layout: {
    spacing: 4,
    debug: false,
  },
};

type Breakpoints = typeof breakpoints;

type Themes = {
  readonly light: typeof lightTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends Breakpoints {}
  export interface UnistylesThemes extends Themes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
