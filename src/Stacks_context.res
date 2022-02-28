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
    alignY: option<responsiveProp<axisY>>,
    height: option<responsiveProp<flex>>,
  }

  let context = React.createContext({
    isCollapsed: false,
    space: None,
    alignY: None,
    height: None,
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
  type t = {space: option<responsiveProp<float>>}

  let context = React.createContext({space: None})
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
