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
  let columns = columns |> float_of_int

  (width -. ((columns -. 1.) *. gutter +. 2. *. margin)) /. columns
}

let calculateGridWidth = options => {
  let {width, columns, gutter, margin} = options
  let columns = columns |> float_of_int

  width *. columns +. (columns -. 1.) *. gutter +. 2. *. margin
}

let styles = {
  open Style

  StyleSheet.create({
    "root": StyleSheet.flatten([StyleSheet.absoluteFillObject, viewStyle(~flexDirection=#row, ())]),
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

@react.component
let make = (~gutter=4., ~margin=4., ~columns=8, ~opacity=0.1) => {
  let {dimensions} = useStacks()
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
      viewStyle(~opacity, ~marginRight=gutter |> dp, ~width=columnWidth |> dp, ()),
    ])
  }
  let gridStyle = {
    open Style
    array([styles["root"], viewStyle(~paddingLeft=gutter |> dp, ~paddingRight=gutter |> dp, ())])
  }
  let grid = columns->Belt.Array.makeByU((. index) => {
    let key = index |> string_of_int
    <View key style={columnStyle} />
  })->React.array

  <View pointerEvents={#none} style={gridStyle}>
    grid
    {gridWidth != dimensions.width
      ? <View style={styles["warning"]}>
          <Text style={styles["text"]}>
            {`Calculated grid width (${gridWidth |> Js.Float.toString}) is different than window width (${dimensions.width |> Js.Float.toString}). Adjust the grid options.`
              |> React.string}
          </Text>
        </View>
      : React.null}
  </View>
}
