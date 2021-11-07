open ReactNative

open Stacks_types
open Stacks_utils

let context = React.createContext({
  debug: false,
  spacing: 4.,
  breakpoints: makeBreakpoints([("mobile", 0.), ("tablet", 768.), ("desktop", 992.)]),
  dimensions: Dimensions.get(#window),
})

module Provider = {
  let make = React.Context.provider(context)
  let makeProps = (~value, ~children, ()) =>
    {
      "value": value,
      "children": children,
    }
}
