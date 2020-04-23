---
id: breakpoints
title: Breakpoints
---

`Stacks`, similarly to `Braid` supports the `responsive props` format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the `responsive props` are for you.

```tsx
type ResponsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>
```
