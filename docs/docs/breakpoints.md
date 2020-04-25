---
id: breakpoints
title: Breakpoints
---

`Stacks`, similarly to `Braid` supports the `responsive props` format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the `responsive props` are for you.

```tsx
type ResponsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>
```

There are three available breakpoints: `mobile` (default, `Stacks` components are mobile-first), `tablet` and `desktop`.

```
type Breakpoint = 'mobile' | 'tablet' | 'desktop'
```

You can define custom breakpoints in the provider.

```tsx
import { StacksProvider } from '@mobily/stacks'

const App = () => {
  return (
    <StacksProvider spacing={4} breakpoints={{ tablet: 762, desktop: 992 }}>
      …
    </StacksProvider>
  )
}
```

For example, if you wanted small spacing on mobile but medium spacing from tablet upwards.

```tsx
<Stack space={[1, 4]}>
  …
</Stack>
```

If you wanted top alignment on mobile and center on tablet upwards.

```tsx
<Columns space={1} alignY={['top', 'center']}>
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```

If you would like the columns to stack vertically on smaller screens, you can provide the `collapseBelow` prop.

```tsx
<Columns space={1} collapseBelow="tablet">
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```
