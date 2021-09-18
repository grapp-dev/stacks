open ReactNative
open ReactNative.Style

open Stacks_types

@module("react")
external isValidElement: React.element => bool = "isValidElement"

@module("./Stacks_utils.js")
external normalizeResponsiveProp: responsiveProp<'a> => normalizedProp<'a> =
  "normalizeResponsiveProp"

let margin = (. value) => viewStyle(~margin=value |> dp, ())
let marginX = (. value) => viewStyle(~marginHorizontal=value |> dp, ())
let marginY = (. value) => viewStyle(~marginVertical=value |> dp, ())
let marginTop = (. value) => viewStyle(~marginTop=value |> dp, ())
let marginRight = (. value) => viewStyle(~marginRight=value |> dp, ())
let marginLeft = (. value) => viewStyle(~marginLeft=value |> dp, ())
let marginBottom = (. value) => viewStyle(~marginBottom=value |> dp, ())
let marginStart = (. value) => viewStyle(~marginStart=value |> dp, ())
let marginEnd = (. value) => viewStyle(~marginEnd=value |> dp, ())
let padding = (. value) => viewStyle(~padding=value |> dp, ())
let paddingX = (. value) => viewStyle(~paddingHorizontal=value |> dp, ())
let paddingY = (. value) => viewStyle(~paddingVertical=value |> dp, ())
let paddingTop = (. value) => viewStyle(~paddingTop=value |> dp, ())
let paddingRight = (. value) => viewStyle(~paddingRight=value |> dp, ())
let paddingLeft = (. value) => viewStyle(~paddingLeft=value |> dp, ())
let paddingBottom = (. value) => viewStyle(~paddingBottom=value |> dp, ())
let paddingStart = (. value) => viewStyle(~paddingStart=value |> dp, ())
let paddingEnd = (. value) => viewStyle(~paddingEnd=value |> dp, ())

let top = (. value) => viewStyle(~top=value, ())
let right = (. value) => viewStyle(~right=value, ())
let bottom = (. value) => viewStyle(~bottom=value, ())
let left = (. value) => viewStyle(~left=value, ())

let isLastElement = (elements, index) => Belt.Array.length(elements) |> pred == index

let randomColor = () => {
  open Js.Array2

  let arr = Belt.Array.makeByU(3, (. _) => Js.Math.random_int(0, 255))
  let colors = arr->map(string_of_int)->joinWith(", ")

  `rgba(${colors}, 0.2)`
}

let take = (i, xs) => {
  open Belt.Array

  let l = length(xs)
  let len = i < 0 ? 0 : l < i ? l : i

  slice(xs, ~offset=0, ~len)
}

let drop = (i, xs) => {
  open Belt.Array

  let l = length(xs)
  let start = i < 0 ? 0 : l < i ? l : i

  sliceToEnd(xs, start)
}

let rec splitEvery = (size, xs) => {
  size < 1
    ? [xs]
    : xs |> Belt.Array.length <= size
    ? [xs]
    : xs |> drop(size) |> splitEvery(size) |> Belt.Array.concat([xs |> take(size)])
}

let tail = xs => {
  let l = Belt.Array.length(xs)

  if l == 0 {
    None
  } else if l == 1 {
    Some([])
  } else {
    let ys = Belt.Array.sliceToEnd(xs, 1)
    Belt.Array.length(ys) > 0 ? Some(ys) : None
  }
}

let tailOrEmpty = {
  xs =>
    switch tail(xs) {
    | Some(ys) => ys
    | None => []
    }
}

let prependToAll = (delim, xs) => {
  Belt.Array.reduceU(xs, [], (. acc, value) => Belt.Array.concat([delim, value], acc))
}

let intersperse = (delim, xs) => {
  switch Belt.Array.get(xs, 0) {
  | None => []
  | Some(value) => Belt.Array.concat([value], prependToAll(delim, tailOrEmpty(xs)))
  }
}

let styles = StyleSheet.create({
  "fullWidth": viewStyle(~width=100. |> pct, ()),
  "fullHeight": viewStyle(~height=100. |> pct, ()),
  "flexContent": viewStyle(~flex=0., ~flexBasis=auto, ()),
  "flexFluid": viewStyle(~flex=1., ()),
  "flexBasis12": viewStyle(~flexBasis=50. |> pct, ()),
  "flexBasis13": viewStyle(~flexBasis=33. |> pct, ()),
  "flexBasis14": viewStyle(~flexBasis=25. |> pct, ()),
  "flexBasis23": viewStyle(~flexBasis=66. |> pct, ()),
  "flexBasis34": viewStyle(~flexBasis=75. |> pct, ()),
  "flexBasis15": viewStyle(~flexBasis=20. |> pct, ()),
  "flexBasis25": viewStyle(~flexBasis=40. |> pct, ()),
  "flexBasis35": viewStyle(~flexBasis=60. |> pct, ()),
  "flexBasis45": viewStyle(~flexBasis=80. |> pct, ()),
  "alignStart": viewStyle(~alignItems=#flexStart, ()),
  "alignCenter": viewStyle(~alignItems=#center, ()),
  "alignEnd": viewStyle(~alignItems=#flexEnd, ()),
  "alignStretch": viewStyle(~alignItems=#stretch, ()),
  "justifyStart": viewStyle(~justifyContent=#flexStart, ()),
  "justifyCenter": viewStyle(~justifyContent=#center, ()),
  "justifyEnd": viewStyle(~justifyContent=#flexEnd, ()),
  "justifySpaceAround": viewStyle(~justifyContent=#spaceAround, ()),
  "justifySpaceBetween": viewStyle(~justifyContent=#spaceBetween, ()),
  "justifySpaceEvenly": viewStyle(~justifyContent=#spaceEvenly, ()),
  "alignSelfStart": viewStyle(~alignSelf=#flexStart, ()),
  "alignSelfCenter": viewStyle(~alignSelf=#center, ()),
  "alignSelfEnd": viewStyle(~alignSelf=#flexEnd, ()),
  "alignSelfStretch": viewStyle(~alignSelf=#stretch, ()),
  "directionRow": viewStyle(~flexDirection=#row, ()),
  "directionRowReverse": viewStyle(~flexDirection=#rowReverse, ()),
  "directionColumn": viewStyle(~flexDirection=#column, ()),
  "directionColumnReverse": viewStyle(~flexDirection=#columnReverse, ()),
  "wrap": viewStyle(~flexWrap=#wrap, ()),
  "nowrap": viewStyle(~flexWrap=#nowrap, ()),
  "shrink": viewStyle(~flexShrink=1., ()),
})

let resolveAlignItemsX = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #center => styles["alignCenter"]
  | #right => styles["alignEnd"]
  | #left => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignItemsY = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #center => styles["alignCenter"]
  | #bottom => styles["alignEnd"]
  | #top => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignItems = Belt.Option.mapU(_, (. value) => {
  switch value {
  | #top | #left => styles["alignStart"]
  | #bottom | #right => styles["alignEnd"]
  | #center => styles["alignCenter"]
  | _ => styles["alignStretch"]
  }
})

let resolveAlignSelf = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #center => styles["alignSelfCenter"]
  | #bottom | #right => styles["alignSelfEnd"]
  | #top | #left => styles["alignSelfStart"]
  | #stretch => styles["alignSelfStretch"]
  }
)

let resolveJustifyContentX = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #center => styles["justifyCenter"]
  | #right => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  | #left => styles["justifyStart"]
  }
)

let resolveJustifyContentY = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #top => styles["justifyStart"]
  | #center => styles["justifyCenter"]
  | #bottom => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  }
)

let resolveJustifyContent = Belt.Option.mapU(_, (. value) => {
  switch value {
  | #bottom | #right => styles["justifyEnd"]
  | #center => styles["justifyCenter"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  | _ => styles["justifyStart"]
  }
})

let resolveFlexBasis = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #content => styles["flexContent"]
  | #fluid => styles["flexFluid"]
  | #x12 => styles["flexBasis12"]
  | #x13 => styles["flexBasis13"]
  | #x14 => styles["flexBasis14"]
  | #x23 => styles["flexBasis23"]
  | #x34 => styles["flexBasis34"]
  | #x15 => styles["flexBasis15"]
  | #x25 => styles["flexBasis25"]
  | #x35 => styles["flexBasis35"]
  | #x45 => styles["flexBasis45"]
  }
)

let resolveDirection = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #row => styles["directionRow"]
  | #column => styles["directionColumn"]
  | #rowReverse => styles["directionRowReverse"]
  | #columnReverse => styles["directionColumnReverse"]
  }
)

let resolveWrap = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #wrap => styles["wrap"]
  | #nowrap => styles["nowrap"]
  }
)

let dimensionsSource = {
  open Wonka

  make((. observer) => {
    let handleChange = observer.next

    Dimensions.addEventListener(#change, handleChange)

    (. ()) => Dimensions.removeEventListener(#change, handleChange)
  }) |> share
}

let resolveCurrentBreakpoint = (currentWidth, breakpoints) => {
  let {tablet, desktop} = breakpoints

  switch currentWidth {
  | width if width < tablet => #mobile
  | width if width < desktop => #tablet
  | _ => #desktop
  }
}

let resolveResponsiveProp: (float, breakpoints, option<responsiveProp<'a>>) => option<'b> = (
  currentWidth,
  breakpoints,
  values,
) => {
  let {tablet, desktop} = breakpoints

  Belt.Option.mapU(values, (. values) => {
    let (mobileValue, tabletValue, desktopValue) = normalizeResponsiveProp(values)

    switch currentWidth {
    | width if width < tablet => mobileValue
    | width if width < desktop => tabletValue
    | _ => desktopValue
    }
  })
}

let isBreakpointBelow = (breakpoint, below) => {
  let isBelow =
    below->Belt.Option.mapWithDefaultU(false, (. below) =>
      (below == #tablet && breakpoint == #mobile) || (below == #desktop && breakpoint != #desktop)
    )

  isBelow
}

let isBreakpointAbove = (breakpoint, above) => {
  let isAbove =
    above->Belt.Option.mapWithDefaultU(false, (. above) =>
      (above == #tablet && breakpoint == #desktop) || (above == #mobile && breakpoint != #mobile)
    )

  isAbove
}

let resolveCollapsibleProps = (~collapseBelow, ~reverse, ~currentBreakpoint) => {
  let isCollapsed = isBreakpointBelow(currentBreakpoint, collapseBelow)
  let reverse = reverse->Belt.Option.getWithDefault(false)
  let direction = switch (reverse, isCollapsed) {
  | (true, true) => #columnReverse
  | (false, true) => #column
  | (true, false) => #rowReverse
  | _ => #row
  }

  {isCollapsed: isCollapsed, direction: direction}
}

let keepStyles = styles => Belt.Array.keepU(styles, (. style) => Belt.Option.isSome(style))
