---
id: prerequisites
title: Prerequisites
---

To use **Stacks** properly you need to pass a default spacing value to `StacksProvider` at the top of your `react` tree.

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

In short, the spacing value unit here is a logical pixel, the same as you've been using before for either _margin_ or _padding_. **Stacks** will automatically multiply the default spacing value by value of `space` (`padding` as well) passed to the components, for instance:

```tsx
<Stacks spacing={4}>…</Stacks>

<Stack space={2}>…</Stack>
// ⬆️ 4 * 2 = 8 logical pixels of the bottom margin

<Box padding={3}>…</Box>
// ⬆️ 4 * 3 = 12 logical pixels of the padding
```

Consistent and clear!

Another required thing, you always have to pass `style` property to your components if you want to use them properly within **Stacks** components.

```tsx
import { View, ViewProps } from 'react-native'
import { styles } from './styles'
// ⬆️ your custom styles

interface Props {
  …
  style?: ViewProps['style']
}

export const Placeholder = (props: Props) => {
  const { …, style } = props

  return (
    <View style={[styles.root, style]}>
      …
    </View>
  )
}
```
