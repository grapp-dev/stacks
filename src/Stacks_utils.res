open ReactNative

open Stacks_types

@module("./Stacks_utils.js")
external normalizeResponsiveProp: responsiveProp<'a> => responsiveProp<'a> =
  "normalizeResponsiveProp"

let length = Belt.Array.length
let getLastIndex = elements => pred(length(elements))
let isLastElement = (elements, index) => getLastIndex(elements) == index

let randomColor = () => {
  open Js.Array2

  let arr = Belt.Array.makeByU(3, (. _) => Js.Math.random_int(0, 255))
  let colors = arr->map(string_of_int)->joinWith(", ")

  `rgba(${colors}, 0.2)`
}

let take = (i, xs) => {
  let l = length(xs)
  let len = i < 0 ? 0 : l < i ? l : i

  Belt.Array.slice(xs, ~offset=0, ~len)
}

let drop = (i, xs) => {
  let l = length(xs)
  let start = i < 0 ? 0 : l < i ? l : i

  Belt.Array.sliceToEnd(xs, start)
}

let rec splitEvery = (size, xs) => {
  size < 1
    ? [xs]
    : length(xs) <= size
    ? [xs]
    : xs |> drop(size) |> splitEvery(size) |> Belt.Array.concat([xs |> take(size)])
}

let tail = xs => {
  let l = length(xs)

  if l == 0 {
    None
  } else if l == 1 {
    Some([])
  } else {
    let ys = Belt.Array.sliceToEnd(xs, 1)
    length(ys) > 0 ? Some(ys) : None
  }
}

let tailOrEmpty = xs => {
  Belt.Option.getWithDefault(tail(xs), [])
}

let prependToAll = (delimiter, xs) => {
  Belt.Array.reduceU(xs, [], (. acc, value) => Belt.Array.concat([delimiter, value], acc))
}

let intersperse = (delimiter, xs) => {
  switch Belt.Array.get(xs, 0) {
  | None => []
  | Some(value) => Belt.Array.concat([value], prependToAll(delimiter, tailOrEmpty(xs)))
  }
}

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

let isBreakpointBelow = (breakpoint, below) => {
  // let isBelow =
  //   below->Belt.Option.mapWithDefaultU(false, (. below) =>
  //     (below == #tablet && breakpoint == #mobile) || (below == #desktop && breakpoint != #desktop)
  //   )

  // isBelow
  false
}

let isBreakpointAbove = (breakpoint, above) => {
  // let isAbove =
  //   above->Belt.Option.mapWithDefaultU(false, (. above) =>
  //     (above == #tablet && breakpoint == #desktop) || (above == #mobile && breakpoint != #mobile)
  //   )

  // isAbove
  false
}

let resolveCollapsibleProps = (~collapseBelow, ~reverse, ~currentBreakpoint): collapsibleProps => {
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

let makeBreakpoints = (breakpoints: breakpoints): breakpoints => {
  Belt.SortArray.stableSortByU(breakpoints, (. a, b) => {
    let (_, fst) = a
    let (_, snd) = b
    int_of_float(snd -. fst)
  })
}
