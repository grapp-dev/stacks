# Changelog

## v3.1.0 - 2024-04-11

### What's Changed

#### 🚀 Features

- feat(Box): add support for `borderTopWidth`, `borderRightWidth`, `borderBottomWidth` and `borderLeftWidth` @mobily (#49)

## v3.0.3 - 2024-04-09

### What's Changed

#### 🐛 Bug Fixes

- fix: allow passing 0 to `multiply`/`divide` functions @mobily (#48)

## v3.0.2 - 2024-04-09

### What's Changed

#### 🐛 Bug Fixes

- fix: improve `Row.from` and `Column.from` type signatures @mobily (#47)

## v3.0.1 - 2024-04-08

### What's Changed

#### 🐛 Bug Fixes

- fix: 🐛 Export all props of the components @mobily (#46)

## v3.0.0 - 2024-04-08

### What's Changed

`Stacks` is now published in the `@grapp` scope. So, you need to fix the imports first. Don't worry, it's a quick fix!

~`@mobily/stacks`~ → `@grapp/stacks`

### General

The `Stacks` library has been completely rewritten in TypeScript, so it no longer supports ReScript.
[React Native Unistyles](https://github.com/jpudysz/react-native-unistyles) is a core dependency.
The `flex gap` values now define spaces between components (excluding `Columns`, see [this](https://github.com/Doist/reactist/pull/739#issuecomment-1373825792)).

### Components

#### Provider

`Stacks` now uses Unistyles, which means that you can remove `StacksProvider` from the React component tree and provide configuration values to the `Unistyles` theme object, as described [here](/docs/getting-started).

#### Box

Several new props have been added to the `Box` component, including `width`, `height`, `gap`, `rowGap`, `columnGap`, `backgroundColor`, `borderRadius`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderColor`, `borderWidth`, and `debuggable`.

#### Columns

The `defaultWidth` prop is now `defaultFlex`, and the `width` prop has been changed to `flex`.
Use `Column.from` to create a custom `Column` component.
The `markAsColumn` prop has been removed.

#### FillView

`FillView` has been renamed to `FloatBox`.
The `unset` helper has been removed, and the positioning has been fixed if you don't provide all offset values.

#### Hidden

Experimental support for hiding elements by transforming the React component tree with the provided `Babel` plugin has been added.

#### Inline

The `spaceX` and `spaceY` props have been added.

#### Rows

The `defaultHeight` prop is now `defaultFlex`, and the `height` prop has been changed to `flex`.
Use `Row.from` to create a custom `Row` component.
The `markAsRow` prop has been removed.

#### Tiles

The `spaceX` and `spaceY` props have been added, and `empty` has been renamed to `fill`.

### Hooks

- `useStacks` has been removed, as `StacksProvider` is no longer needed.
- `useCurrentBreakpoint` has been removed. To get the current breakpoint name, you can use `useStyles` from Unistyles.
- `useSpacing` has been removed. To achieve the same result, you can use `useSpacingHelpers` and `multiply`.
- `useWindowDimensions` has been removed. You can now get the screen dimensions with `UnistylesRuntime.screen`.
