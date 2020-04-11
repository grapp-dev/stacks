---
id: provider
title: Provider
---

Pass a default spacing value (a logical pixel) to a `Provider` at the top of your React tree.

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

### `spacing`

- type: `number`
- required: `no`
- default: `4`

### `debug`

- type: `boolean`
- required: `no`
- default: `false`
