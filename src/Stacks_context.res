open ReactNative

open Stacks_types
open Stacks_utils

let context = React.createContext({
  debug: false,
  spacing: 4.,
  breakpoints: defaultBreakpoints,
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
    width: option<responsiveProp<flex>>,
  }

  let context = React.createContext({
    isCollapsed: false,
    space: None,
    alignY: None,
    height: None,
    width: None,
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
  type t = {
    space: option<responsiveProp<float>>,
    defaultHeight: option<responsiveProp<flex>>,
  }

  let context = React.createContext({
    space: None,
    defaultHeight: None,
  })
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
