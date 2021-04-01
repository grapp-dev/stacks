open Stacks_context
open Stacks_types
open Stacks_hooks

@react.component @gentype
let make = (~spacing=4., ~debug=false, ~breakpoints={tablet: 772., desktop: 992.}, ~children) => {
  let dimensions = useWindowDimensions()

  <Provider
    value={spacing: spacing, debug: debug, breakpoints: breakpoints, dimensions: dimensions}>
    children
  </Provider>
}
