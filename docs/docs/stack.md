---
id: stack
title: Stack
---

- distribute white space evenly between components (vertically)
- multiple `Stack` components can be nested to create more complex white space rules

### `space`

- type: `number`
- required: `no`
- default: `0`

```tsx
<Stack space={1}>

</Stack>
```

```tsx
<Stack space={4}>

</Stack>
```

```tsx
<Stack space={3}>
  <Stack space={1}>

  </Stack>
  <Stack space={1}>

  </Stack>
</Stack>
```

### `align`

- type: `'left' | 'center' | 'right'`
- required: `no`
- default: `left`

```tsx
<Stack space={1} align="center">

</Stack>
```

```tsx
<Stack space={1} align="right">

</Stack>
```

### `testID`

- type: `string`
- required: `no`

### `style`

- type: `StyleProp<ViewStyle>`
- required: `no`
