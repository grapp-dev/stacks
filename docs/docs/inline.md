---
id: inline
title: Inline
---

- use `Inline` to render a set of components in a row with equal spacing around them, wrapping onto multiple lines when necessary
- `Inline` supports horizontal alignment of its children
- multiple `Inline` components can be nested to create more complex white space rules

### `space`

- type: `ResponsiveProp<number>`
- required: `no`
- default: `0`

[[ snack id="stacks-inline" name="Inline" ]]

[[ snack id="stacks-inline-nested" name="Inline (nested)" ]]

### `align`

- type: `ResponsiveProp<'left' | 'center' | 'right'>`
- required: `no`
- default: `left`

[[ snack id="stacks-inline-align" name="Inline (align)" ]]

:::tip

`Inline` component inherits all [`View` props](https://reactnative.dev/docs/view).

:::
