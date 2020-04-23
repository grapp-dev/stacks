---
id: use-breakpoint
title: useBreakpoint
---

`useBreakpoint` returns an object that contains a current breakpoint value (`currentBreakpoint`) and a function that allows resolving responsive property (`resolveResponsiveProp`) passed to your custom components.

```tsx
import { useBreakpoint, useSpacing, ResponsiveProp } from '@mobily/stacks'

interface Props {
  …
  size?: ResponsiveProp<number>
}

const Component = (props: Props) => {
  const { …, size: responsiveSize = 4 } = props
  const { resolveResponsiveProp } = useBreakpoint()
  const size = useSpacing(resolveResponsiveProp(responsiveSize))

  return (
    <View style={[styles.root, { width: size, height: size }]}>
      …
    </View>
  )
}
```

```tsx
import { useBreakpoint } from '@mobily/stacks'

interface Props {
  …
}

const Component = (props: Props) => {
  const { currentBreakpoint } = useBreakpoint()

  return currentBreakpoint === 'mobile' ? <View>…</View> : null
}
```
