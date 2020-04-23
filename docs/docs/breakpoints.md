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
