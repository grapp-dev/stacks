open Stacks_context
open Stacks_types
open Stacks_hooks
open Stacks_utils

@react.component @gentype
let make = (~spacing=4., ~debug=false, ~breakpoints=defaultBreakpoints, ~children) => {
  let dimensions = useWindowDimensions()

  <Provider
    value={
      spacing: spacing,
      debug: debug,
      breakpoints: makeBreakpoints(breakpoints),
      dimensions: dimensions,
    }>
    children
  </Provider>
}
