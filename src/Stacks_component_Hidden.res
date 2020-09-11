open Stacks_hooks
open Stacks_utils

@react.component
export make = (
  ~children,
  ~below: option<[#tablet | #desktop]>=?,
  ~above: option<[#mobile | #tablet]>=?,
) => {
  let currentBreakpoint = useCurrentBreakpoint()
  let isHidden = switch (below, above) {
  | (below, None) => isBreakpointBelow(currentBreakpoint, below)
  | (None, above) => isBreakpointAbove(currentBreakpoint, above)
  | (_, _) => false
  }

  isHidden ? React.null : children
}
