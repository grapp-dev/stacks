open ReactNative.Style

external unsafeStyle: option<ReactNative.Style.t> => ReactNative.Style.t = "%identity"
external unsafeUndefinedStyle: Js.undefined<'a> => ReactNative.Style.t = "%identity"

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

let undefinedStyle = unsafeUndefinedStyle(Js.Undefined.empty)

let margin = (value: float) => ReactNative.Style.unsafeStyle({"margin": value})
let marginX = (value: float) => ReactNative.Style.unsafeStyle({"marginHorizontal": value})
let marginY = (value: float) => ReactNative.Style.unsafeStyle({"marginVertical": value})
let marginTop = (value: float) => ReactNative.Style.unsafeStyle({"marginTop": value})
let marginRight = (value: float) => ReactNative.Style.unsafeStyle({"marginRight": value})
let marginLeft = (value: float) => ReactNative.Style.unsafeStyle({"marginLeft": value})
let marginBottom = (value: float) => ReactNative.Style.unsafeStyle({"marginBottom": value})
let marginStart = (value: float) => ReactNative.Style.unsafeStyle({"marginStart": value})
let marginEnd = (value: float) => ReactNative.Style.unsafeStyle({"marginEnd": value})
let padding = (value: float) => ReactNative.Style.unsafeStyle({"padding": value})
let paddingX = (value: float) => ReactNative.Style.unsafeStyle({"paddingHorizontal": value})
let paddingY = (value: float) => ReactNative.Style.unsafeStyle({"paddingVertical": value})
let paddingTop = (value: float) => ReactNative.Style.unsafeStyle({"paddingTop": value})
let paddingRight = (value: float) => ReactNative.Style.unsafeStyle({"paddingRight": value})
let paddingLeft = (value: float) => ReactNative.Style.unsafeStyle({"paddingLeft": value})
let paddingBottom = (value: float) => ReactNative.Style.unsafeStyle({"paddingBottom": value})
let paddingStart = (value: float) => ReactNative.Style.unsafeStyle({"paddingStart": value})
let paddingEnd = (value: float) => ReactNative.Style.unsafeStyle({"paddingEnd": value})

let top = (value: float) => ReactNative.Style.unsafeStyle({"top": value})
let right = (value: float) => ReactNative.Style.unsafeStyle({"right": value})
let bottom = (value: float) => ReactNative.Style.unsafeStyle({"bottom": value})
let left = (value: float) => ReactNative.Style.unsafeStyle({"left": value})

@module("./Stacks_styles.js")
external reset_: float = "reset"

@gentype
let reset = reset_

@module("./Stacks_styles.js")
external checkAbsoluteFill: float => float = "checkAbsoluteFill"

let resolveAlignItemsX = Belt.Option.mapWithDefaultU(_, styles["alignStretch"], (. value) =>
  switch value {
  | #center => styles["alignCenter"]
  | #right => styles["alignEnd"]
  | #left => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignItemsY = Belt.Option.mapWithDefaultU(_, styles["alignStretch"], (. value) =>
  switch value {
  | #center => styles["alignCenter"]
  | #bottom => styles["alignEnd"]
  | #top => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignItems = Belt.Option.mapWithDefaultU(_, styles["alignStretch"], (. value) => {
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

let resolveAlignSelf = Belt.Option.mapWithDefaultU(_, styles["alignSelfAuto"], (. value) =>
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

let resolveJustifyContentX = Belt.Option.mapWithDefaultU(_, styles["justifyStart"], (. value) =>
  switch value {
  | #left => styles["justifyStart"]
  | #center => styles["justifyCenter"]
  | #right => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  }
)

let resolveJustifyContentY = Belt.Option.mapWithDefaultU(_, styles["justifyStart"], (. value) =>
  switch value {
  | #top => styles["justifyStart"]
  | #center => styles["justifyCenter"]
  | #bottom => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  }
)

let resolveJustifyContent = Belt.Option.mapWithDefaultU(_, styles["justifyStart"], (. value) => {
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

let resolveFlexBasis = Belt.Option.mapWithDefaultU(_, styles["flexContent"], (. value) =>
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

let resolveDirection = Belt.Option.mapWithDefaultU(_, styles["directionColumn"], (. value) =>
  switch value {
  | #row => styles["directionRow"]
  | #column => styles["directionColumn"]
  | #rowReverse => styles["directionRowReverse"]
  | #columnReverse => styles["directionColumnReverse"]
  }
)

let resolveWrap = Belt.Option.mapWithDefaultU(_, styles["nowrap"], (. value) =>
  switch value {
  | #wrap => styles["wrap"]
  | #nowrap => styles["nowrap"]
  }
)
