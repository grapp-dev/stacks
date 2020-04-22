---
id: columns
title: Columns
---

- use `Columns` and `Column` to lay out content horizontally
- customise the width of each column individually (all columns are of equal width by default)
- set column width to `content` to ensure that it's only as wide as the content within it
- you can align columns vertically with the `alignY` prop
- you can align columns horizontally with the `alignX` prop
- multiple `Columns` components can be nested to create more complex white space rules

### `space`

- type: `ResponsiveProp<number>`
- required: `no`
- default: `0`

[[ snack id="stacks-columns-space" name="Columns (space)" ]]

[[ snack id="stacks-columns-content-width" name="Columns (content width)" ]]

[[ snack id="stacks-columns-nested-columns" name="Columns (nested)" ]]


### `alignY`

- type: `ResponsiveProp<'top' | 'center' | 'bottom' | 'stretch'>`
- required: `no`
- default: `stretch`

[[ snack id="stacks-columns-align-y" name="Columns (alignY)" ]]

### `alignX`

- type: `ResponsiveProp<'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'>`
- required: `no`
- default: `left`

[[ snack id="stacks-columns-align-x" name="Columns (alignX)" ]]

### `reverse`

- type: `boolean`
- required: `no`
- default: `false`

### `collapseBelow`

- type: `'tablet' | 'desktop'`
- required: `no`

:::tip

`Columns` component inherits all [`View` props](https://reactnative.dev/docs/view).

:::
