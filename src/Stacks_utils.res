open ReactNative

open Stacks_types

@module("./Stacks_utils.js")
external normalizeResponsiveProp: responsiveProp<'a> => responsiveProp<'a> =
  "normalizeResponsiveProp"

let length = Belt.Array.length
let getLastIndex = elements => elements->length->pred
let isLastElement = (elements, index) => getLastIndex(elements) == index

let randomColor = () => {
  open Js.Array2

  let arr = Belt.Array.makeByU(3, (. _) => Js.Math.random_int(0, 255))
  let colors = arr->map(string_of_int)->joinWith(", ")

  `rgba(${colors}, 0.2)`
}

let splitEvery = (xs, size) => {
  if size < 1 || length(xs) <= size {
    [xs]
  } else {
    let offset = ref(0)
    let arr = []

    while offset.contents < length(xs) {
      let len = offset.contents + size
      Js.Array2.push(arr, Belt.Array.slice(xs, ~offset=offset.contents, ~len=size))->ignore
      offset := len
    }

    arr
  }
}

let intersperse = (xs, delimiter) =>
  Belt.Array.reduceWithIndexU(xs, [], (. acc, value, index) => {
    switch index {
    | x if xs->length->pred == x => Js.Array2.push(acc, value)
    | _ => Js.Array2.pushMany(acc, [value, delimiter])
    }->ignore
    acc
  })

let dimensionsSource = {
  open Wonka

  let source = make((. observer) => {
    let listener = Dimensions.addEventListener(#change, observer.next)
    (. ()) => EventSubscription.remove(listener)
  })

  share(source)
}

let resolveCurrentBreakpoint = (~currentWidth: float, ~breakpoints: breakpoints) => {
  let (name, _) =
    breakpoints
    ->Belt.Array.getByU((. breakpoint) => {
      let (_, value) = breakpoint
      currentWidth > value
    })
    ->Belt.Option.getExn

  name
}

let resolveResponsiveProp = (
  ~currentWidth: float,
  ~breakpoints: breakpoints,
  responsiveProp: option<responsiveProp<'a>>,
): option<'a> => {
  responsiveProp->Belt.Option.mapU((. responsiveProp) => {
    let normalizedValues = normalizeResponsiveProp(responsiveProp)
    let defaultValue = Belt.Array.getUnsafe(normalizedValues, getLastIndex(normalizedValues))

    if length(normalizedValues) == 1 {
      defaultValue
    } else {
      breakpoints
      ->Belt.Array.getIndexByU((. breakpoint) => {
        let (_, value) = breakpoint
        currentWidth > value
      })
      ->Belt.Option.flatMapU((. index) => {
        Belt.Array.get(normalizedValues, getLastIndex(breakpoints) - index)
      })
      ->Belt.Option.getWithDefault(defaultValue)
    }
  })
}

let compareBreakpoints = (
  mapFn,
  ~currentBreakpoint: string,
  ~breakpoints: breakpoints,
  ~boundBreakpoint: option<string>,
) => {
  open Belt.Option

  boundBreakpoint
  ->flatMapU((. boundBreakpoint) =>
    breakpoints
    ->Belt.Array.getIndexByU((. breakpoint) => {
      let (name, _) = breakpoint
      currentBreakpoint == name
    })
    ->mapU((. currentBreakpointIndex) => (boundBreakpoint, currentBreakpointIndex))
  )
  ->flatMapU((. tuple) => {
    let (boundBreakpoint, currentBreakpointIndex) = tuple

    breakpoints
    ->Belt.Array.getIndexByU((. breakpoint) => {
      let (name, _) = breakpoint
      boundBreakpoint == name
    })
    ->mapU((. breakpointIndex) => mapFn(. currentBreakpointIndex, breakpointIndex))
  })
  ->getWithDefault(false)
}

let isBreakpointBelow = compareBreakpoints((. currentBreakpointIndex, breakpointIndex) =>
  currentBreakpointIndex > breakpointIndex
)

let isBreakpointAbove = compareBreakpoints((. currentBreakpointIndex, breakpointIndex) =>
  currentBreakpointIndex < breakpointIndex
)

let resolveCollapsibleProps = (
  ~collapseBelow,
  ~reverse,
  ~currentBreakpoint,
  ~breakpoints,
): collapsibleProps => {
  let isCollapsed = isBreakpointBelow(
    ~currentBreakpoint,
    ~boundBreakpoint=collapseBelow,
    ~breakpoints,
  )
  let reverse = reverse->Belt.Option.getWithDefault(false)
  let direction = switch (reverse, isCollapsed) {
  | (true, true) => #columnReverse
  | (false, true) => #column
  | (true, false) => #rowReverse
  | _ => #row
  }

  {isCollapsed: isCollapsed, direction: direction}
}

let makeBreakpoints = (breakpoints: breakpoints): breakpoints => {
  let breakpoints = Js.Array2.copy(breakpoints)
  Js.Array2.sortInPlaceWith(breakpoints, (a, b) => {
    let (_, fst) = a
    let (_, snd) = b
    int_of_float(snd -. fst)
  })
}
