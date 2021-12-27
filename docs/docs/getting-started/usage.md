---
id: usage
title: Usage
---

To use **Stacks** properly you need to pass a default spacing value to `StacksProvider` at the top of your `react` tree.

The spacing value unit is a logical pixel, the same you've been using before for either _margin_ or _padding_. **Stacks** will automatically multiply the default spacing value by value of `space` passed to the components, for instance:

### TypeScript

```tsx
import { StacksProvider } from '@mobily/stacks'

export const App = () => {
  return (
    <StacksProvider spacing={4}>
      …
    </StacksProvider>
  )
}
```

```tsx
<StacksProvider spacing={4}>…</StacksProvider>

<Stack space={2}>…</Stack>
// ⬆️ 4 * 2 = 8 logical pixels

<Box padding={3}>…</Box>
// ⬆️ 4 * 3 = 12 logical pixels
```

### ReScript

```tsx
open Stacks

@react.component
let make = () =>
  <StacksProvider spacing=4.>
    …
  </StacksProvider>
```

```tsx
<StacksProvider spacing=4.>…</StacksProvider>

<Stack space=[2.]>…</Stack>
// ⬆️ 4 * 2 = 8 logical pixels

<Box padding=[3.]>…</Box>
// ⬆️ 4 * 3 = 12 logical pixels
```
