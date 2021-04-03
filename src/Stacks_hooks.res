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
  let multiply = (. value) => spacing *. value
  let divide = (. value) => value /. spacing

  {multiply: multiply, divide: divide}
}

@gentype
let useCurrentBreakpoint = () => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let currentBreakpoint = resolveCurrentBreakpoint(dimensions.width, breakpoints)

  currentBreakpoint
}

@gentype
let useDebugStyle = () => {
  let {debug} = useStacks()
  let style = React.useRef(None)

  style.current = debug ? Some(Style.viewStyle(~backgroundColor=randomColor(), ())) : None

  style.current
}

@gentype
let useResponsiveProp: unit => resolveResponsiveProp<'a> = () => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = resolveResponsiveProp(dimensions.width, breakpoints)

  resolveResponsiveProp
}
