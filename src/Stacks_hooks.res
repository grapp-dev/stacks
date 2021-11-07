open ReactNative

open Stacks_types
open Stacks_utils
open Stacks_context
open Stacks_styles

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

  {multiply: multiply, divide: divide}
}

@gentype
let useCurrentBreakpoint = () => {
  let {breakpoints, dimensions} = useStacks()
  resolveCurrentBreakpoint(~currentWidth=dimensions.width, ~breakpoints)
}

@gentype
let useDebugStyle = () => {
  let {debug} = useStacks()
  let style = React.useRef(undefinedStyle)

  style.current = debug ? Style.unsafeStyle({"backgroundColor": randomColor()}) : undefinedStyle

  style.current
}

@gentype
let useResponsiveProp = (): resolveResponsiveProp<'a> => {
  let {breakpoints, dimensions} = useStacks()
  resolveResponsiveProp(~currentWidth=dimensions.width, ~breakpoints)
}
