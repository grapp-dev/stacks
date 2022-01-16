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

module ColumnsContext = {
  type t = {
    isCollapsed: bool,
    space: option<responsiveProp<float>>,
    debugStyle: option<ReactNative.Style.t>,
    alignY: option<responsiveProp<axisY>>,
  }

  let context = React.createContext({
    isCollapsed: false,
    space: None,
    debugStyle: None,
    alignY: None,
  })
  let useColumns = () => React.useContext(context)

  module Provider = {
    let make = React.Context.provider(context)
    let makeProps = (~value, ~children, ()) =>
      {
        "value": value,
        "children": children,
      }
  }
}

module RowsContext = {
  type t = {space: option<responsiveProp<float>>, debugStyle: option<Style.t>}

  let context = React.createContext({space: None, debugStyle: None})
  let useRows = () => React.useContext(context)

  module Provider = {
    let make = React.Context.provider(context)
    let makeProps = (~value, ~children, ()) =>
      {
        "value": value,
        "children": children,
      }
  }
}
