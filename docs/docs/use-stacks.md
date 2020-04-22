---
id: use-stacks
title: useStacks
---

`useStacks` returns `Stacks` options passed to the provider.

```tsx
import { useStacks } from '@mobily/stacks'

const Component = () => {
  const { spacing, debug, breakpoints } = useStacks()

  return (
    <View>
      …
    </View>
  )
}
```
