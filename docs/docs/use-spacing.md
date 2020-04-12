---
id: use-spacing
title: useSpacing
---

- use `useSpacing` hook in your custom components to ensure that they follow proper spacing rules

```tsx
import { useSpacing } from '@mobily/stacks'

interface Props {
  …
  marginBottom?: number
}

const Component = (props: Props) => {
  const { …, marginBottom = 1 } = props
  const margin = useSpacing(marginBottom)

  return (
    <View style={[styles.root, { marginBottom: margin }]}>
      …
    </View>
  )
}
```

```tsx
import { useSpacing } from '@mobily/stacks'

interface Props {
  …
  margin?: number
  padding?: number
}

const Component = (props: Props) => {
  const { …, margin = 1, padding = 1 } = props
  const spacing = useSpacing()

  return (
    <View style={[styles.root, { margin: spacing(margin), padding: spacing(padding) }]}>
      …
    </View>
  )
}
```
