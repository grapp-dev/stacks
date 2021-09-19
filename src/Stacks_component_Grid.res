open ReactNative

open Stacks_hooks
open Stacks_types

type options = {
  width: float,
  columns: int,
  gutter: float,
  margin: float,
}

let calculateColumnWidth = options => {
  let {width, columns, gutter, margin} = options
  let columns = float_of_int(columns)
  let gutterCount = columns -. 1.

  (width -. margin *. 2. -. gutterCount *. gutter) /. columns
}

let calculateGridWidth = options => {
  let {width, columns, gutter, margin} = options
  let columns = float_of_int(columns)
  let gutterCount = columns -. 1.

  width *. columns +. gutterCount *. gutter +. margin *. 2.
}

let styles = {
  open Style

  StyleSheet.create({
    "root": StyleSheet.flatten([
      StyleSheet.absoluteFillObject,
      viewStyle(~flexDirection=#row, ~justifyContent=#center, ()),
    ]),
    "column": viewStyle(~height=100. |> pct, ~backgroundColor="red", ()),
    "warning": viewStyle(
      ~position=#absolute,
      ~top=44. |> dp,
      ~left=24. |> dp,
      ~right=24. |> dp,
      (),
    ),
    "text": textStyle(~color="red", ()),
  })
}

@react.component @gentype
let make = (~gutter=?, ~margin=?, ~columns=?, ~opacity=0.2) => {
  let {dimensions} = useStacks()
  let {multiply} = useSpacingHelpers()
  let resolveResponsiveProp = useResponsiveProp()
  let resolveFloat = (prop, defaultValue) =>
    Belt.Option.mapWithDefaultU(resolveResponsiveProp(prop), multiply(. defaultValue), multiply)
  let gutter = resolveFloat(gutter, 2.)
  let margin = resolveFloat(margin, 2.)
  let columns = Belt.Option.getWithDefault(wrap(resolveResponsiveProp, columns), 8)

  let options = {
    gutter: gutter,
    margin: margin,
    columns: columns,
    width: 0.,
  }
  let columnWidth = calculateColumnWidth({
    ...options,
    width: dimensions.width,
  })
  let gridWidth = calculateGridWidth({
    ...options,
    width: columnWidth,
  })
  let columnStyle = {
    open Style
    array([
      styles["column"],
      viewStyle(~opacity, ~marginLeft=gutter |> dp, ~width=columnWidth |> dp, ()),
    ])
  }
  let gridStyle = {
    open Style
    array([styles["root"], viewStyle(~paddingHorizontal=gutter |> dp, ())])
  }
  let grid =
    columns
    ->Belt.Array.makeByU((. index) => {
      open Style
      let key = string_of_int(index)
      <View
        key
        style={index == 0 ? array([columnStyle, viewStyle(~marginLeft=0. |> dp, ())]) : columnStyle}
      />
    })
    ->React.array

  <View pointerEvents={#none} style={gridStyle}>
    grid
    {gridWidth != dimensions.width
      ? <View style={styles["warning"]}>
          <Text style={styles["text"]}>
            {`Calculated grid width (${gridWidth |> Js.Float.toString}) is different than window width (${dimensions.width |> Js.Float.toString}). Adjust the grid options.` |> React.string}
          </Text>
        </View>
      : React.null}
  </View>
}
