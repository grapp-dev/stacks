---
id: prerequisites
title: Prerequisites
---

To use **Stacks** properly you need to pass a default spacing value to a `Provider` at the top of your React tree.

```tsx
import { Provider as Stacks } from '@mobily/stacks'

const App = () => {
  return (
    <Stacks spacing={4}>
      …
    </Stacks>
  )
}
```

In short, the spacing value unit here is a logical pixel, the same as you've been using before for either _margin_ or _padding_. **Stacks** will automatically multiply the default spacing value by value of `space` (`padding` as well) passed to the components, for instance:

```tsx
<Stacks spacing={4}>…</Stacks>

<Stack space={2}>…</Stack>
// ⬆️ 4 * 2 = 8 logical pixels of the bottom margin

<Box padding={3}>…</Box>
// ⬆️ 4 * 3 = 12 logical pixels of the padding
```
