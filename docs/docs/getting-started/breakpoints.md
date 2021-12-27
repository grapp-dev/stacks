---
id: breakpoints
title: Breakpoints
---

`Stacks` supports the `responsive props` format which allows you to specify an array of values for different screen sizes. Use `responsive props` to customize the spacing, number of columns, or alignments per screen size.

```typescript
type ResponsiveProp<T> = T | readonly T[] // ⬅️ typescript

type responsiveProp<'a> = array<'a> // ⬅️ rescript
```

You can define a new breakpoint with a tuple, the first value is the name of the breakpoint, and the other is a minimum breakpoint width.

```tsx
type Breakpoint = [string, number] // ⬅️ typescript

type breakpoint = (string, number) // ⬅️ rescript
```

### Provider

You can define as many breakpoints as you need in the provider.

```tsx
// ⬇️ typescript
import { StacksProvider } from '@mobily/stacks'

const App = () => {
  return (
    <StacksProvider spacing={4} breakpoints={[['mobile', 0], ['tablet', 768], ['desktop', 992]]}>
      …
    </StacksProvider>
  )
}
```

```tsx
// ⬇️ rescript
open Stacks

@react.component
let make = () =>
  <StacksProvider spacing=4. breakpoints={[("mobile", 0.), ("tablet", 768.), ("desktop", 992.)]}>
    …
  </StacksProvider>
```

### Examples

If you want small spacing on mobile but medium spacing from tablet upwards.

```tsx
// ⬇️ typescript
<Stack space={[1, 4]}>
  …
</Stack>
```

```tsx
// ⬇️ rescript
<Stack space={[1., 4.]}>
  …
</Stack>
```

If you want top alignment on mobile and center on tablet upwards.

```tsx
// ⬇️ typescript
<Columns space={1} alignY={['top', 'center']}>
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```

```tsx
// ⬇️ rescript
<Columns space=[1.] alignY=[#top, #center]>
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```

If you want to stack columns vertically on smaller screens, you can provide the `collapseBelow` prop.

```tsx
// ⬇️ typescript
<Columns space={1} collapseBelow="tablet">
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```

```tsx
// ⬇️ rescript
<Columns space=[1.] collapseBelow=#tablet>
  <Column>
    …
  </Column>
  <Column>
    …
  </Column>
</Columns>
```
