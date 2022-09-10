---
id: changelog
title: Changelog
---

### `v2.2.1`

- 🐛 fixed the `empty` prop type (`Tiles`)

### `v2.2.0`

- ✨ added the [`as`](/api/components/box#as) prop to `Box`, which allows rendering another element (for instance `Animated.View`) instead of `View`

### `v2.1.0`

- ✨ added the [`defaultWidth`](/api/components/columns#default-width) prop to `Columns`, which allows to set a default column width behavior ([@domeknn](https://github.com/domeknn))
- ✨ added the [`defaultHeight`](/api/components/rows#default-height) prop to `Rows`, which allows to set a default row height behavior ([@domeknn](https://github.com/domeknn))
- 🐛 fixed an issue occured in `react-testing-library` and `react-native-web`, [#35](https://github.com/mobily/stacks/issues/35)
- 🐛 minor bug fixes

### `v2.0.0`

- ✨ added the `Bleed` component
- ✨ added the `Inset` component
- ♻️ `Column`: removed the `height` prop (as it has been added to the `Columns` component)
- 🔥 `FillView`: removed the `flex` prop
- ♻️ `FillView`: renamed `reset` to `unset`
- ♻️ `Inline`: `align` is now `alignX`
- ✨ `Inline`: added the `alignY` prop
- ✨ `Tiles`: added the `empty` prop
- 🐛 minor tweaks and fixes

You can also use `Columns/Rows` with no `Column/Row` in the markup tree, for instance, the following:

```tsx
<Columns>
  <Placeholder />
  <Rows>
    <Placeholder />
    <Placeholder />
  </Rows>
</Columns>
```

equals to:

```tsx
<Columns>
  <Column>
    <Placeholder />
  </Column>
  <Column>
    <Rows>
      <Row>
        <Placeholder />
      </Row>
      <Row>
        <Placeholder />
      </Row>
    </Rows>
  </Column>
</Columns>
```

### `v1.4.1`

- 🐛 fixed React Native components shims/types

### `v1.4.0`

- ✨ added support for defining more than 3 breakpoints
- 🐛 fixed `Columns` alignment on the `y` axis

### `v1.3.1`

- 🐛 fixed columns width calculations in the `Grid` component

### `v1.3.0`

- ✨ added the `viewRef` prop to all components
- ✨ added the `divider` prop to `Stack`

### `v1.2.1`

- 🐛 fixed passing the `style` prop to the `Rows` and `Columns` root component

### `v1.2.0`

- ✨ added two new components: `Rows` and `Row`

### `v1.1.8`

- 🐛 fixed ESM support (round 3️⃣)
- 🔥 removed redundant `undefined` values in the styles array

### `v1.1.7`

- ✨ added the `height` prop to `Column`

### `v1.1.6`

- 🐛 fixed bundling `Stacks` in ReScript projects

### `v1.1.5`

- 🐛 fixed ESM support (round 2️⃣)

### `v1.1.4`

- 🐛 fixed ESM support

### `v1.1.3`

- 🐛 fixed the `Stack` default width value
- 🐛 fixed passing the `style` prop to the inner `Columns` component

### `v1.1.2`

- 🐛 fixed `Stack` inner elements alignment when `horizontal` is `true`

### `v1.1.1`

- 🐛 fixed hooks implementation (`useResponsiveProp`, `useCurrentBreakpoint`)

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
