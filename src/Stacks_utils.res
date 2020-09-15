open ReactNative
open ReactNative.Style

open Stacks_types
open Stacks_extras

let flexBasis = value => viewStyle(~flexBasis=value |> pct, ())
let alignItems = value => viewStyle(~alignItems=value, ())
let alignSelf = value => viewStyle(~alignSelf=value, ())
let justifyContent = value => viewStyle(~justifyContent=value, ())
let flexDirection = value => viewStyle(~flexDirection=value, ())
let flexWrap = value => viewStyle(~flexWrap=value, ())

let marginTop = value => Some(viewStyle(~marginTop=value |> dp, ()))
let marginRight = value => Some(viewStyle(~marginRight=value |> dp, ()))
let marginLeft = value => Some(viewStyle(~marginLeft=value |> dp, ()))
let marginBottom = value => Some(viewStyle(~marginBottom=value |> dp, ()))

let isLastElement = (elements, index) => Belt.Array.length(elements) |> pred == index

let weakMap: WeakMap.t<React.element, ref<int>> = WeakMap.make()
let counter = ref(1)
let rec uid = element =>
  switch WeakMap.get(weakMap, element) {
  | Some(id) => id.contents |> string_of_int
  | None =>
    counter := counter.contents |> succ

    if element != React.null {
      WeakMap.set(weakMap, element, counter)
      uid(element)
    } else {
      counter.contents |> succ |> string_of_int
    }
  }

let randomColor = () => {
  open Js.Array2

  let arr = Belt.Array.makeBy(3, _ => Js.Math.random_int(0, 255))
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

  let l = Belt.Array.length(xs)
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

let styles = StyleSheet.create({
  "fullWidth": viewStyle(~width=100. |> pct, ()),
  "fullHeight": viewStyle(~height=100. |> pct, ()),
  "flexContent": viewStyle(~flex=0., ~flexBasis=auto, ()),
  "flexFluid": viewStyle(~flex=1., ()),
  "flexBasis12": flexBasis(50.),
  "flexBasis13": flexBasis(33.),
  "flexBasis14": flexBasis(25.),
  "flexBasis23": flexBasis(66.),
  "flexBasis34": flexBasis(75.),
  "flexBasis15": flexBasis(20.),
  "flexBasis25": flexBasis(40.),
  "flexBasis35": flexBasis(60.),
  "flexBasis45": flexBasis(80.),
  "alignStart": alignItems(#flexStart),
  "alignCenter": alignItems(#center),
  "alignEnd": alignItems(#flexEnd),
  "alignStretch": alignItems(#stretch),
  "justifyStart": justifyContent(#flexStart),
  "justifyCenter": justifyContent(#center),
  "justifyEnd": justifyContent(#flexEnd),
  "justifySpaceAround": justifyContent(#spaceAround),
  "justifySpaceBetween": justifyContent(#spaceBetween),
  "justifySpaceEvenly": justifyContent(#spaceEvenly),
  "alignSelfStart": alignSelf(#flexStart),
  "alignSelfCenter": alignSelf(#center),
  "alignSelfEnd": alignSelf(#flexEnd),
  "alignSelfStretch": alignSelf(#stretch),
  "directionRow": flexDirection(#row),
  "directionRowReverse": flexDirection(#rowReverse),
  "directionColumn": flexDirection(#column),
  "directionColumnReverse": flexDirection(#columnReverse),
  "wrap": flexWrap(#wrap),
  "nowrap": flexWrap(#nowrap),
  "shrink": viewStyle(~flexShrink=1., ()),
})

let resolveAlignItemsX = Belt.Option.map(_, value =>
  switch value {
  | #center => styles["alignCenter"]
  | #right => styles["alignEnd"]
  | #left => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignItemsY = Belt.Option.map(_, value =>
  switch value {
  | #center => styles["alignCenter"]
  | #bottom => styles["alignEnd"]
  | #top => styles["alignStart"]
  | #stretch => styles["alignStretch"]
  }
)

let resolveAlignSelf = Belt.Option.map(_, value =>
  switch value {
  | #center => styles["alignSelfCenter"]
  | #bottom | #right => styles["alignSelfEnd"]
  | #top | #left => styles["alignSelfStart"]
  | #stretch => styles["alignSelfStretch"]
  }
)

let resolveJustifyContentX = Belt.Option.map(_, value =>
  switch value {
  | #center => styles["justifyCenter"]
  | #right => styles["justifyEnd"]
  | #around => styles["justifySpaceAround"]
  | #between => styles["justifySpaceBetween"]
  | #evenly => styles["justifySpaceEvenly"]
  | #left => styles["justifyStart"]
  }
)

let resolveJustifyContentY = Belt.Option.map(_, value =>
  switch value {
  | #top => styles["justifyStart"]
  | #center => styles["justifyCenter"]
  | #bottom => styles["justifyEnd"]
  }
)

let resolveFlexBasis = Belt.Option.map(_, value =>
  switch value {
  | #content => styles["flexContent"]
  | #fluid => styles["flexFluid"]
  | #width12 => styles["flexBasis12"]
  | #width13 => styles["flexBasis13"]
  | #width14 => styles["flexBasis14"]
  | #width23 => styles["flexBasis23"]
  | #width34 => styles["flexBasis34"]
  | #width15 => styles["flexBasis15"]
  | #width25 => styles["flexBasis25"]
  | #width35 => styles["flexBasis35"]
  | #width45 => styles["flexBasis45"]
  }
)

let resolveDirection = Belt.Option.map(_, value =>
  switch value {
  | #row => styles["directionRow"]
  | #column => styles["directionColumn"]
  | #rowReverse => styles["directionRowReverse"]
  | #columnReverse => styles["directionColumnReverse"]
  }
)

let resolveWrap = Belt.Option.map(_, value =>
  switch value {
  | #wrap => styles["wrap"]
  | #nowrap => styles["nowrap"]
  }
)

let dimensionsSource = {
  open Wonka

  make((. observer) => {
    let handleChange = layout => observer.next(layout)

    handleChange |> Dimensions.addEventListener(#change)

    (. ()) => handleChange |> Dimensions.removeEventListener(#change)
  }) |> share
}

let resolveCurrentBreakpoint = (currentWidth, breakpoints) => {
  let {tablet, desktop} = breakpoints

  switch currentWidth {
  | width when width < tablet => #mobile
  | width when width < desktop => #tablet
  | _ => #desktop
  }
}

let normalizeResponsiveProp = values =>
  switch values {
  | [mobile, tablet, desktop] => (mobile, tablet, desktop)
  | [mobile, tablet] => (mobile, tablet, tablet)
  | [mobile] => (mobile, mobile, mobile)
  | _ => failwith("Invalid responsive prop length.")
  }

let resolveResponsiveProp = (currentWidth, breakpoints) => {
  let {tablet, desktop} = breakpoints

  (. values) => {
    let responsiveProp = Belt.Option.map(values, values => {
      let (mobileValue, tabletValue, desktopValue) = normalizeResponsiveProp(values)

      switch currentWidth {
      | width when width < tablet => mobileValue
      | width when width < desktop => tabletValue
      | _ => desktopValue
      }
    })

    responsiveProp
  }
}

let isBreakpointBelow = (breakpoint, below) => {
  open Belt.Option

  let isBelow =
    below->mapWithDefault(false, below =>
      (below == #tablet && breakpoint == #mobile) || (below == #desktop && breakpoint != #desktop)
    )

  isBelow
}

let isBreakpointAbove = (breakpoint, above) => {
  open Belt.Option

  let isAbove =
    above->mapWithDefault(false, above =>
      (above == #tablet && breakpoint == #desktop) || (above == #mobile && breakpoint != #mobile)
    )

  isAbove
}

let resolveCollapsibleProps = (~collapseBelow, ~reverse, ~currentBreakpoint) => {
  open Belt.Option

  let isCollapsed = isBreakpointBelow(currentBreakpoint, collapseBelow)
  let reverse = reverse->getWithDefault(false)
  let direction = switch (reverse, isCollapsed) {
  | (true, true) => #columnReverse
  | (false, true) => #column
  | (true, false) => #rowReverse
  | _ => #row
  }

  {isCollapsed: isCollapsed, direction: direction}
}
