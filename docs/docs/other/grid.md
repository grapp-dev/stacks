---
id: grid
title: Grid
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { defaultTabsProps, Props } from '../../core/components';

`Grid` renders a simple design system grid. Place it only once, at the top of your react tree.

<Tabs {...defaultTabsProps}>
<TabItem value="typescript">

```tsx
declare type Props = {
  readonly gutter?: number
  readonly margin: number
  readonly columns?: number
  readonly opacity?: number
}
```

</TabItem>
<TabItem value="rescript">

```res
@react.component
let make: (
  ~gutter: float=?,
  ~margin: float=?,
  ~columns: int=?,
  ~opacity: float=?,
) => React.element

```

</TabItem>
</Tabs>

## Props

<Props
  data={[
    {
      name: 'columns',
      type: 'int',
      required: false,
      defaultValue: '8',
    },
    {
      name: 'margin',
      type: 'float',
      required: false,
      defaultValue: '1',
    },
    {
      name: 'gutter',
      type: 'float',
      required: false,
      defaultValue: '1',
    },
    {
      name: 'opacity',
      type: 'float',
      required: false,
      defaultValue: '0.1',
    },
  ]}
/>
