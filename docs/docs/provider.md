---
id: provider
title: StacksProvider
---

Use `StacksProvider` at the top of your `react` tree to overwrite default options.

```tsx
import { StacksProvider } from '@mobily/stacks'

const App = () => {
  return (
    <StacksProvider spacing={4}>
      …
    </StacksProvider>
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

### `breakpoints`

- type: `{ tablet: number, desktop: number }`
- required: `no`
- default: `{ tablet: 768, desktop: 992 }`
