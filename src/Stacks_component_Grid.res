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
    "column": viewStyle(~height=pct(100.), ~backgroundColor="red", ()),
    "warning": viewStyle(~position=#absolute, ~top=dp(44.), ~left=dp(24.), ~right=dp(24.), ()),
    "text": textStyle(~color="red", ()),
  })
}

@react.component @gentype
let make = (~gutter=?, ~margin=?, ~columns=?, ~opacity=0.2) => {
  let {dimensions} = useStacks()
  let {multiply} = useSpacingHelpers()
  let resolveResponsiveProp = useResponsiveProp()
  let resolveFloat = (prop, defaultValue) => {
    resolveResponsiveProp(prop)
    ->Belt.Option.mapWithDefaultU(multiply(Some(defaultValue)), (. value) => multiply(value))
    ->Belt.Option.getWithDefault(0.)
  }
  let gutter = resolveFloat(gutter, 2.)
  let margin = resolveFloat(margin, 2.)
  let columns = Belt.Option.getWithDefault(
    Stacks_externals.resolve(resolveResponsiveProp, columns),
    8,
  )

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
      viewStyle(~opacity, ~marginLeft=dp(gutter), ~width=dp(columnWidth), ()),
    ])
  }
  let gridStyle = {
    open Style
    array([styles["root"], viewStyle(~paddingHorizontal=dp(gutter), ())])
  }
  let grid =
    columns
    ->Belt.Array.makeByU((. index) => {
      open Style
      let key = string_of_int(index)
      <View
        key
        style={index == 0 ? array([columnStyle, viewStyle(~marginLeft=dp(0.), ())]) : columnStyle}
      />
    })
    ->React.array

  <View pointerEvents={#none} style={gridStyle}>
    grid
    {gridWidth != dimensions.width
      ? <View style={styles["warning"]}>
          <Text style={styles["text"]}>
            {React.string(
              `Calculated grid width (${Js.Float.toString(
                  gridWidth,
                )}) is different than window width (${Js.Float.toString(
                  dimensions.width,
                )}). Adjust the grid options.`,
            )}
          </Text>
        </View>
      : React.null}
  </View>
}
