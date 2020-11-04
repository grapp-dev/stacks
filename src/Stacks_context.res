open ReactNative

open Stacks_types
open Stacks_utils

let context = React.createContext({
  debug: false,
  spacing: 4.,
  breakpoints: {
    tablet: 768.,
    desktop: 992.,
  },
  dimensions: Dimensions.get(#window),
})

let useWindowDimensions = () => {
  let (dimensions, setDimensions) = React.useState(() => Dimensions.get(#window))

  React.useEffect0(() => {
    let subscription = {
      open Wonka
      dimensionsSource
      |> debounce((. _) => Platform.os == Platform.web ? 60 : 0)
      |> onPush((. layout: Dimensions.handler) => setDimensions(_ => layout.window))
      |> publish
    }

    Some(subscription.unsubscribe)
  })

  dimensions
}

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
  let make = (~spacing=4., ~debug=false, ~breakpoints={tablet: 772., desktop: 992.}, ~children) => {
    let dimensions = useWindowDimensions()

    <Provider
      value={spacing: spacing, debug: debug, breakpoints: breakpoints, dimensions: dimensions}>
      children
    </Provider>
  }
}
