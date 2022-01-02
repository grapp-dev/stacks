open ReactNative.Style

@module("react-native") @scope("StyleSheet")
external compose: (ReactNative.Style.t, ReactNative.Style.t) => ReactNative.Style.t = "compose"

external coerceArray: array<option<ReactNative.Style.t>> => array<ReactNative.Style.t> = "%identity"

let styles = ReactNative.StyleSheet.create({
  "fullWidth": viewStyle(~width=pct(100.), ()),
  "fullHeight": viewStyle(~height=pct(100.), ()),
  "flexContent": viewStyle(~flex=0., ~flexBasis=auto, ()),
  "flexFluid": viewStyle(~flex=1., ()),
  "flexBasis12": viewStyle(~flexBasis=pct(50.), ()),
  "flexBasis13": viewStyle(~flexBasis=pct(33.), ()),
  "flexBasis14": viewStyle(~flexBasis=pct(25.), ()),
  "flexBasis23": viewStyle(~flexBasis=pct(66.), ()),
  "flexBasis34": viewStyle(~flexBasis=pct(75.), ()),
  "flexBasis15": viewStyle(~flexBasis=pct(20.), ()),
  "flexBasis25": viewStyle(~flexBasis=pct(40.), ()),
  "flexBasis35": viewStyle(~flexBasis=pct(60.), ()),
  "flexBasis45": viewStyle(~flexBasis=pct(80.), ()),
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
  "alignSelfAuto": viewStyle(~alignSelf=#auto, ()),
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

let margin = Belt.Option.mapU(_, (. value) => viewStyle(~margin=dp(value), ()))
let marginX = Belt.Option.mapU(_, (. value) => viewStyle(~marginHorizontal=dp(value), ()))
let marginY = Belt.Option.mapU(_, (. value) => viewStyle(~marginVertical=dp(value), ()))
let marginTop = Belt.Option.mapU(_, (. value) => viewStyle(~marginTop=dp(value), ()))
let marginRight = Belt.Option.mapU(_, (. value) => viewStyle(~marginRight=dp(value), ()))
let marginLeft = Belt.Option.mapU(_, (. value) => viewStyle(~marginLeft=dp(value), ()))
let marginBottom = Belt.Option.mapU(_, (. value) => viewStyle(~marginBottom=dp(value), ()))
let marginStart = Belt.Option.mapU(_, (. value) => viewStyle(~marginStart=dp(value), ()))
let marginEnd = Belt.Option.mapU(_, (. value) => viewStyle(~marginEnd=dp(value), ()))
let padding = Belt.Option.mapU(_, (. value) => viewStyle(~padding=dp(value), ()))
let paddingX = Belt.Option.mapU(_, (. value) => viewStyle(~paddingHorizontal=dp(value), ()))
let paddingY = Belt.Option.mapU(_, (. value) => viewStyle(~paddingVertical=dp(value), ()))
let paddingTop = Belt.Option.mapU(_, (. value) => viewStyle(~paddingTop=dp(value), ()))
let paddingRight = Belt.Option.mapU(_, (. value) => viewStyle(~paddingRight=dp(value), ()))
let paddingLeft = Belt.Option.mapU(_, (. value) => viewStyle(~paddingLeft=dp(value), ()))
let paddingBottom = Belt.Option.mapU(_, (. value) => viewStyle(~paddingBottom=dp(value), ()))
let paddingStart = Belt.Option.mapU(_, (. value) => viewStyle(~paddingStart=dp(value), ()))
let paddingEnd = Belt.Option.mapU(_, (. value) => viewStyle(~paddingEnd=dp(value), ()))

let top = value => ReactNative.Style.unsafeStyle({"top": value})
let right = value => ReactNative.Style.unsafeStyle({"right": value})
let bottom = value => ReactNative.Style.unsafeStyle({"bottom": value})
let left = value => ReactNative.Style.unsafeStyle({"left": value})

let keepStyle = xs => xs->coerceArray->ReactNative.StyleSheet.flatten

@module("./Stacks_styles.js")
external reset_: float = "reset"

@gentype
let reset = reset_

@module("./Stacks_styles.js")
external mapFillViewEdge: option<float> => option<float> = "mapFillViewEdge"

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
  | #top
  | #left =>
    styles["alignStart"]
  | #bottom
  | #right =>
    styles["alignEnd"]
  | #center => styles["alignCenter"]
  | _ => styles["alignStretch"]
  }
})

let resolveAlignSelf = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #center => styles["alignSelfCenter"]
  | #bottom
  | #right =>
    styles["alignSelfEnd"]
  | #top
  | #left =>
    styles["alignSelfStart"]
  | #stretch => styles["alignSelfStretch"]
  | _ => styles["alignSelfAuto"]
  }
)

let resolveJustifyContentX = Belt.Option.mapU(_, (. value) =>
  switch value {
  | #left => styles["justifyStart"]
  | #center => styles["justifyCenter"]
  | #right => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
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
  | #bottom
  | #right =>
    styles["justifyEnd"]
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
