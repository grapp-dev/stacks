---
id: columns
title: Columns
---

`Columns` (and `Column`) lays out content horizontally. You may want to customize the width of each column individually (all columns are of equal width by default) or set column width to `content` to ensure that it's only as wide as the content within it. Furthermore, you can align columns vertically with the `alignY` prop or horizontally with the `alignX` prop. Last, but not least, you can provide the `collapseBelow` prop to stack the columns vertically on smaller screens.

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

:::note

`Columns` component inherits all [`View` props](https://reactnative.dev/docs/view).

:::
