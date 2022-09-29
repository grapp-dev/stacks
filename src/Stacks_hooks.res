open ReactNative

open Stacks_types
open Stacks_utils
open Stacks_context

@gentype
let useWindowDimensions = () => {
  let (dimensions, setDimensions) = React.useState(() => Dimensions.get(#window))

  React.useEffect0(() => {
    let subscription = {
      open Wonka
      dimensionsSource
      |> debounce((. _) => Platform.os == Platform.web ? 60 : 0)
      |> onPush((. layout: Dimensions.handler) => setDimensions(_ => layout.window))
      |> publish
    }

    Some(subscription.unsubscribe)
  })

  dimensions
}

@gentype
let useStacks = () => React.useContext(context)

@gentype
let useSpacing = Belt.Option.mapWithDefaultU(_, 0., (. value) => {
  let {spacing} = useStacks()
  spacing *. value
})

@gentype
let useSpacingHelpers = () => {
  let {spacing} = useStacks()
  let multiply = Belt.Option.mapU(_, (. value) => spacing *. value)
  let divide = Belt.Option.mapU(_, (. value) => value /. spacing)

  {multiply, divide}
}

@gentype
let useCurrentBreakpoint = () => {
  let {breakpoints, dimensions} = useStacks()
  resolveCurrentBreakpoint(~currentWidth=dimensions.width, ~breakpoints)
}

@gentype
let useDebugStyle = () => {
  let {debug} = useStacks()
  let style = React.useRef(None)

  style.current = debug ? Some(Style.unsafeStyle({"backgroundColor": randomColor()})) : None

  style.current
}

@gentype
let useResponsiveProp = (): resolveResponsiveProp<'a> => {
  let {breakpoints, dimensions} = useStacks()
  resolveResponsiveProp(~currentWidth=dimensions.width, ~breakpoints)
}

let useDeepMemoize = deps => {
  let ref = React.useRef([])

  if deps != ref.current {
    ref.current = deps
  }

  ref.current
}
