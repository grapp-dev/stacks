### `v1.1.0`

- `useBreakpoint` → `useCurrentBreakpoint`
- `FillObject` → `FillView`
- added `padding*` and `margin*` props to all components (only `Column` doesn't accept `margin*` props)
- added `horizontal` prop to `Stack`
- `useSpacing` doesn't return a function anymore
- added `useSpacingHelpers` hook
- added `useResponsiveProp`
- added `useWindowDimensions`
- added `useDebugStyle`
- removed global `styles`
- added ReScript and Flow support
- fixed typings issues (TS)

### `v0.9.2`

- 🐛 fix `Hidden` component implementation [668b22e](https://github.com/mobily/stacks/commit/668b22e91182179a44b20c3f228f4db39bb98b05)

### `v0.9.1`

- 🏷️ fix `Box` types [2b3aa6a](https://github.com/mobily/stacks/commit/2b3aa6a5c6d53e62bdb71915f811330399e054c6)

### `v0.9.0`

- 🔥 remove `align` prop (`Column`, use `Box` for inner alignments) [84d20f7](https://github.com/mobily/stacks/commit/84d20f7b92710ddd5e28d52b68a43b90827d0c8d)
- 🐛 fix `collapseBelow` implementation (`Columns`) [84d20f7](https://github.com/mobily/stacks/commit/84d20f7b92710ddd5e28d52b68a43b90827d0c8d)
- ✨ add `alignSelf` prop (`Box`) [a56a889](https://github.com/mobily/stacks/commit/a56a889e5429d4cef0cd097e968f72d62d473cb5)
- ✨ `flex` is a responsive prop now (`Box`) [a56a889](https://github.com/mobily/stacks/commit/a56a889e5429d4cef0cd097e968f72d62d473cb5)
- 📝 update docs [df09b1b](https://github.com/mobily/stacks/commit/df09b1ba3d34175d49cd40e943b28d1b1e6ed0b0)

### `v0.8.2`

- 🐛 fix [#6](https://github.com/mobily/stacks/issues/6) [24f4a9d](https://github.com/mobily/stacks/commit/24f4a9d9512347175bc015bcd40cc77d2e6d8008)

### `v0.8.1`

- 🏷️ update `Hidden` type signature [9b33f30](https://github.com/mobily/stacks/commit/9b33f302d5e3e04d0ae2b479f0a3bb8f9d2b9dd5)

### `v0.8.0`

- ✨ add `Hidden` component [d9a86c1](https://github.com/mobily/stacks/commit/d9a86c110c2854f5f11d58d7f20a5e5ae1a819c9)
- ✨ add breakpoints initial support
- 💥 rename `Provider` to `StacksProvider` [a2d8e07](https://github.com/mobily/stacks/commit/a2d8e075b73169b89fe4b46810f02e7cc14b1d44)
- 📝 update docs

### `v0.7.1`

- 🐛 add missing `flexShrink` style property (`Column`) [214d20e](https://github.com/mobily/stacks/commit/214d20e2fd827714bafbebc886218c6a568246b9)

### `v0.7.0`

- ✨ allow passing `View` props to `Stacks` components [0103882](https://github.com/mobily/stacks/commit/010388266d07f21d5d5873754f7263633ff10112)
- 📝 update docs [4800a10](https://github.com/mobily/stacks/commit/4800a10471f43827f1fc46ef9a8b94ca062ec5cd)

### `v0.6.2`

- 🔧 add `flexBasis: 'auto'` (primarily for `react-native-web` compatibility) [2d454ad](https://github.com/mobily/stacks/commit/2d454addabe3bfdbd701e84d86db89d4bf052b1c)
- 📝 update docs

### `v0.6.1`

- 🔧 use `stretch` as a default value of `alignX/Y` property (Stack, Columns, Box) [f38ddc7](https://github.com/mobily/stacks/commit/f38ddc74b25fff0c8217a475b7dbf6bcb779692c) [4e3822c](https://github.com/mobily/stacks/commit/4e3822c1f5aca3277a3d31860e2ca3f1a0b35a7b) [10b1dea](https://github.com/mobily/stacks/commit/10b1dea042d4dd4380e5a9459096eea7134f1e1e)
- 📝 update docs [393157d](https://github.com/mobily/stacks/commit/393157d6376f88a5ee948ac18b09e586ca4cfa7b)
