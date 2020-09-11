open Stacks_types

let context = React.createContext({
  debug: false,
  spacing: 4.,
  breakpoints: {
    tablet: 768.,
    desktop: 992.,
  },
})

module Provider = {
  let make = React.Context.provider(context)
  let makeProps = (~value, ~children, ()) =>
    {
      "value": value,
      "children": children,
    }
}

module StacksProvider = {
  @react.component
  let make = (~spacing=4., ~debug=false, ~breakpoints={tablet: 772., desktop: 992.}, ~children) =>
    <Provider value={spacing: spacing, debug: debug, breakpoints: breakpoints}> children </Provider>
}
