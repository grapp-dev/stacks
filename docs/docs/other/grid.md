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
  readonly gutter?: ResponsiveProp<number>
  readonly margin?: ResponsiveProp<number>
  readonly columns?: ResponsiveProp<number>
  readonly opacity?: number
}
```

</TabItem>
<TabItem value="rescript">

```res
@react.component
let make: (
  ~gutter: responsiveProp<float>=?,
  ~margin: responsiveProp<float>=?,
  ~columns: responsiveProp<int>=?,
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
      type: 'responsiveProp<int>',
      required: false,
      defaultValue: '8',
    },
    {
      name: 'margin',
      type: 'responsiveProp<float>',
      required: false,
      defaultValue: '2',
    },
    {
      name: 'gutter',
      type: 'responsiveProp<float>',
      required: false,
      defaultValue: '2',
    },
    {
      name: 'opacity',
      type: 'float',
      required: false,
      defaultValue: '0.2',
    },
  ]}
/>
