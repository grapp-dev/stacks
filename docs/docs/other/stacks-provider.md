---
id: stacks-provider
title: StacksProvider
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { defaultTabsProps, Props } from '../../core/components';

Use `StacksProvider` at the top of your `react` tree to overwrite default options.

<Tabs {...defaultTabsProps}>
<TabItem value="typescript">

```tsx
declare type Breakpoints = {
  readonly tablet: number
  readonly desktop: number
}

declare type Props = {
  readonly breakpoints?: Breakpoints
  readonly children: React.ReactNode
  readonly debug?: boolean
  readonly spacing?: number
}
```

</TabItem>
<TabItem value="rescript">

```res
type breakpoints = {
  tablet: float,
  desktop: float,
}

@react.component
let make: (
  ~spacing: float=?,
  ~debug: bool=?,
  ~breakpoints: breakpoints=?,
  ~children: React.element,
) => React.element

```

</TabItem>
</Tabs>

## Example

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

## Props

<Props
  data={[
    {
      name: 'spacing',
      type: 'float',
      required: false,
      defaultValue: '4',
    },
    {
      name: 'debug',
      type: 'bool',
      required: false,
      defaultValue: 'false',
    },
    {
      name: 'breakpoints',
      type: 'breakpoints',
      rawTsType: 'Breakpoints',
      required: false,
      defaultValue: '{ tablet: 768, desktop: 992 }',
    }
  ]}
/>
