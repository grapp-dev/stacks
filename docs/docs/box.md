---
id: box
title: Box
---

- `Box` is the most low-level layout component provided by `Stacks`
- `Box` provides a set of `padding` and `margins` options which can be used to create container elements with spacing multiplied by a value passed to the provider

[[ snack id="stacks-box" name="Box" ]]

### `flex`

- type: `'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5'`
- required: `no`
- default: `content`

### `direction`

- type: `ResponsiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>`
- required: `no`
- default: `column`

### `alignX`

- type:
  - if direction is `row` or `row-reverse`: `ResponsiveProp<'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'>`
  - if direction is `column` or `column-reverse`: `ResponsiveProp<'left' | 'center' | 'right' | 'stretch'>`
- required: `no`
- default: `left`

### `alignY`

- type:
  - if direction is `row` or `row-reverse`: `ResponsiveProp<'top' | 'center' | 'bottom' | 'stretch'>`
  - if direction is `column` or `column-reverse`: `ResponsiveProp<'top' | 'center' | 'bottom'>`
- required: `no`
- default: `top`

### `wrap`

- type: `'wrap' | 'nowrap' | 'wrap-reverse'`
- required: `no`
- default: `nowrap`

### `padding`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingX`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingY`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingTop`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingBottom`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingLeft`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingRight`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingStart`

- type: `ResponsiveProp<number>`
- required: `no`

### `paddingEnd`

- type: `ResponsiveProp<number>`
- required: `no`

### `margin`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginX`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginY`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginTop`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginBottom`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginLeft`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginRight`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginStart`

- type: `ResponsiveProp<number>`
- required: `no`

### `marginEnd`

- type: `ResponsiveProp<number>`
- required: `no`

:::tip

`Box` component inherits all [`View` props](https://reactnative.dev/docs/view).

:::
