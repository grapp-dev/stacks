open Stacks_types

let margin: (. float) => ReactNative.Style.t
let marginX: (. float) => ReactNative.Style.t
let marginY: (. float) => ReactNative.Style.t
let marginTop: (. float) => ReactNative.Style.t
let marginRight: (. float) => ReactNative.Style.t
let marginLeft: (. float) => ReactNative.Style.t
let marginBottom: (. float) => ReactNative.Style.t
let marginStart: (. float) => ReactNative.Style.t
let marginEnd: (. float) => ReactNative.Style.t
let padding: (. float) => ReactNative.Style.t
let paddingX: (. float) => ReactNative.Style.t
let paddingY: (. float) => ReactNative.Style.t
let paddingTop: (. float) => ReactNative.Style.t
let paddingRight: (. float) => ReactNative.Style.t
let paddingLeft: (. float) => ReactNative.Style.t
let paddingBottom: (. float) => ReactNative.Style.t
let paddingStart: (. float) => ReactNative.Style.t
let paddingEnd: (. float) => ReactNative.Style.t
let top: (. ReactNative.Style.size) => ReactNative.Style.t
let right: (. ReactNative.Style.size) => ReactNative.Style.t
let bottom: (. ReactNative.Style.size) => ReactNative.Style.t
let left: (. ReactNative.Style.size) => ReactNative.Style.t
let isLastElement: (array<'a>, int) => bool
let randomColor: unit => string
let take: (int, array<'a>) => array<'a>
let drop: (int, array<'a>) => array<'a>
let splitEvery: (int, array<'a>) => array<array<'a>>
export styles: {
  "alignCenter": ReactNative.Style.t,
  "alignEnd": ReactNative.Style.t,
  "alignSelfCenter": ReactNative.Style.t,
  "alignSelfEnd": ReactNative.Style.t,
  "alignSelfStart": ReactNative.Style.t,
  "alignSelfStretch": ReactNative.Style.t,
  "alignStart": ReactNative.Style.t,
  "alignStretch": ReactNative.Style.t,
  "directionColumn": ReactNative.Style.t,
  "directionColumnReverse": ReactNative.Style.t,
  "directionRow": ReactNative.Style.t,
  "directionRowReverse": ReactNative.Style.t,
  "flexBasis12": ReactNative.Style.t,
  "flexBasis13": ReactNative.Style.t,
  "flexBasis14": ReactNative.Style.t,
  "flexBasis15": ReactNative.Style.t,
  "flexBasis23": ReactNative.Style.t,
  "flexBasis25": ReactNative.Style.t,
  "flexBasis34": ReactNative.Style.t,
  "flexBasis35": ReactNative.Style.t,
  "flexBasis45": ReactNative.Style.t,
  "flexContent": ReactNative.Style.t,
  "flexFluid": ReactNative.Style.t,
  "fullHeight": ReactNative.Style.t,
  "fullWidth": ReactNative.Style.t,
  "justifyCenter": ReactNative.Style.t,
  "justifyEnd": ReactNative.Style.t,
  "justifySpaceAround": ReactNative.Style.t,
  "justifySpaceBetween": ReactNative.Style.t,
  "justifySpaceEvenly": ReactNative.Style.t,
  "justifyStart": ReactNative.Style.t,
  "nowrap": ReactNative.Style.t,
  "shrink": ReactNative.Style.t,
  "wrap": ReactNative.Style.t,
}
let resolveAlignItemsX: option<[axisX | stretch]> => option<ReactNative.Style.t>
let resolveAlignItemsY: option<axisY> => option<ReactNative.Style.t>
let resolveAlignItems: option<[axisX | axisY | space | stretch]> => option<ReactNative.Style.t>
let resolveAlignSelf: option<[axisX | axisY | stretch]> => option<ReactNative.Style.t>
let resolveJustifyContentX: option<[axisX | space]> => option<ReactNative.Style.t>
let resolveJustifyContentY: option<axisY> => option<ReactNative.Style.t>
let resolveJustifyContent: option<[axisX | axisY | space | stretch]> => option<ReactNative.Style.t>
let resolveFlexBasis: option<Stacks_types.flex> => option<ReactNative.Style.t>
let resolveDirection: option<direction> => option<ReactNative.Style.t>
let resolveWrap: option<wrap> => option<ReactNative.Style.t>
let dimensionsSource: Wonka_types.sourceT<ReactNative.Dimensions.handler>
let resolveCurrentBreakpoint: (float, Stacks_types.breakpoints) => breakpoint
@genType.import("./Stacks_utils")
let normalizeResponsiveProp: Stacks_types.responsiveProp<'a> => Stacks_types.normalizedProp<'a>
let resolveResponsiveProp: (
  float,
  Stacks_types.breakpoints,
  . option<Stacks_types.responsiveProp<'a>>,
) => option<'a>
let isBreakpointBelow: (breakpoint, option<[#desktop | #tablet]>) => bool
let isBreakpointAbove: (breakpoint, option<[#mobile | #tablet]>) => bool
let resolveCollapsibleProps: (
  ~collapseBelow: option<[#desktop | #tablet]>,
  ~reverse: option<bool>,
  ~currentBreakpoint: breakpoint,
) => Stacks_types.collapsibleProps
