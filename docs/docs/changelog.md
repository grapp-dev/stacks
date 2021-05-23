---
id: changelog
title: Changelog
---

### `v1.2.0`

- added two new components: `Rows` and `Row`

### `v1.1.8`

- fixed ESM support (round 3️⃣)
- removed redundant `undefined` values in the styles array

### `v1.1.7`

- added the `height` prop to `Column`

### `v1.1.6`

- fixed bundling `Stacks` in ReScript projects

### `v1.1.5`

- fixed ESM support (round 2️⃣)

### `v1.1.4`

- fixed ESM support

### `v1.1.3`

- fixed `Stack` default width value
- fixed passing style property to the proper inner component in `Columns`

### `v1.1.2`

- fixed `Stack` inner elements alignment when `horizontal` is `true`

### `v1.1.1`

- fixed hooks implementation (`useResponsiveProp`, `useCurrentBreakpoint`)

### `v1.1.0`

- `useBreakpoint` → `useCurrentBreakpoint`
- `FillObject` → `FillView`
- added `padding*` and `margin*` props to all components (`Column` doesn't accept `margin*` props)
- added the `horizontal` prop to `Stack`
- `useSpacing` doesn't return a function anymore
- added `useSpacingHelpers`
- added `useResponsiveProp`
- added `useWindowDimensions`
- added `useDebugStyle`
- removed global `styles`
- added ReScript and Flow support
- fixed typings issues (TS)

### `v0.9.2`

- 🐛 fixed the `Hidden` component implementation

### `v0.9.1`

- 🏷️ fixed `Box` types

### `v0.9.0`

- 🔥 removed the `align` prop in `Column` (use `Box` for inner alignments)
- 🐛 fixed the `collapseBelow` implementation (`Columns`)
- ✨ added the `alignSelf` prop to `Box`
- ✨ `flex` is a responsive prop now in `Box`

### `v0.8.2`

- 🐛 fixed [#6](https://github.com/mobily/stacks/issues/6)

### `v0.8.1`

- 🏷️ fixed `Hidden` types

### `v0.8.0`

- ✨ added the `Hidden` component
- ✨ added initial support for breakpoints
- 💥 `Provider` → `StacksProvider`

### `v0.7.1`

- 🐛 added missing `flexShrink` style property (`Column`)
### `v0.7.0`

- ✨ `Stacks` components accept all `View` props

### `v0.6.2`

- 🔧 added `flexBasis: 'auto'` for `react-native-web` compatibility
- 📝 update docs

### `v0.6.1`

- 🔧 use `stretch` as a default value of the `alignX/Y` prop
