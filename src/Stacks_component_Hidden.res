open Stacks_hooks
open Stacks_utils

@react.component @gentype
let make = (~below: option<string>=?, ~above: option<string>=?, ~children) => {
  let {breakpoints} = useStacks()
  let currentBreakpoint = useCurrentBreakpoint()

  let isHidden = switch (below, above) {
  | (below, None) => isBreakpointBelow(~currentBreakpoint, ~breakpoints, ~boundBreakpoint=below)
  | (None, above) => isBreakpointAbove(~currentBreakpoint, ~breakpoints, ~boundBreakpoint=above)
  | (_, _) => false
  }

  isHidden ? React.null : children
}
