open ReactNative

open Stacks_types

let context = React.createContext({
  debug: false,
  spacing: 4.,
  breakpoints: {
    tablet: 768.,
    desktop: 992.,
  },
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
