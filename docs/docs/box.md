---
id: box
title: Box
---

- `Box` is the most low-level layout component provided by `Stacks`
- `Box` provides a set of `padding` and `margins` options which can be used to create container elements with spacing multiplied by a default value passed to the provider

[[ snack id="stacks-box" name="Box" ]]

### `flex`

- type: `'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5'`
- required: `no`
- default: `content`

### `direction`

- type: `'row' | 'column' | 'row-reverse' | 'column-reverse'`
- required: `no`
- default: `column`

### `alignX`

- type:
  - if direction is `row` or `row-reverse`: `'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'`
  - if direction is `column` or `column-reverse`: `'left' | 'center' | 'right' | 'stretch'`
- required: `no`
- default: `left`

### `alignY`

- type:
  - if direction is `row` or `row-reverse`: `'top' | 'center' | 'bottom' | 'stretch'`
  - if direction is `column` or `column-reverse`: `'top' | 'center' | 'bottom'`
- required: `no`
- default: `top`

### `wrap`

- type: `'wrap' | 'nowrap' | 'wrap-reverse'`
- required: `no`
- default: `nowrap`

### `padding`

- type: `number`
- required: `no`

### `paddingX`

- type: `number`
- required: `no`

### `paddingY`

- type: `number`
- required: `no`

### `paddingTop`

- type: `number`
- required: `no`

### `paddingBottom`

- type: `number`
- required: `no`

### `paddingLeft`

- type: `number`
- required: `no`

### `paddingRight`

- type: `number`
- required: `no`

### `paddingStart`

- type: `number`
- required: `no`

### `paddingEnd`

- type: `number`
- required: `no`

### `margin`

- type: `number`
- required: `no`

### `marginX`

- type: `number`
- required: `no`

### `marginY`

- type: `number`
- required: `no`

### `marginTop`

- type: `number`
- required: `no`

### `marginBottom`

- type: `number`
- required: `no`

### `marginLeft`

- type: `number`
- required: `no`

### `marginRight`

- type: `number`
- required: `no`

### `marginStart`

- type: `number`
- required: `no`

### `marginEnd`

- type: `number`
- required: `no`

### `testID`

- type: `string`
- required: `no`

### `style`

- type: `StyleProp<ViewStyle>`
- required: `no`

:::tip

`Box` component inherits all [`View` props](https://reactnative.dev/docs/view).

:::
