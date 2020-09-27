open Stacks_hooks
open Stacks_utils

@react.component
let make = (~below=?, ~above=?, ~children) => {
  let currentBreakpoint = useCurrentBreakpoint()
  let isHidden = switch (below, above) {
  | (below, None) => isBreakpointBelow(currentBreakpoint, below)
  | (None, above) => isBreakpointAbove(currentBreakpoint, above)
  | (_, _) => false
  }

  isHidden ? React.null : children
}
