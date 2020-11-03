open ReactNative

open Stacks_types
open Stacks_utils
open Stacks_context

let useStacks = () => React.useContext(context)

let useSpacing = Belt.Option.mapWithDefaultU(_, 0., (. value) => {
  let {spacing} = useStacks()
  spacing *. value
})

let useSpacingHelpers = () => {
  let {spacing} = useStacks()
  let multiply = (. value) => spacing *. value
  let divide = (. value) => value /. spacing

  {multiply: multiply, divide: divide}
}

let useCurrentBreakpoint = () => {
  let {breakpoints, dimensions} = useStacks()
  let currentBreakpoint = resolveCurrentBreakpoint(dimensions.width, breakpoints)

  currentBreakpoint
}

let useDebugStyle = () => {
  let {debug} = useStacks()
  let style = React.useRef(None)

  style.current = debug ? Some(Style.viewStyle(~backgroundColor=randomColor(), ())) : None

  style.current
}

let useResponsiveProp = () => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = resolveResponsiveProp(dimensions.width, breakpoints)

  resolveResponsiveProp
}

let useResponsiveProp2 = (prop0, prop1) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (resolveResponsiveProp(. prop0), resolveResponsiveProp(. prop1))
}

let useResponsiveProp3 = (prop0, prop1, prop2) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (resolveResponsiveProp(. prop0), resolveResponsiveProp(. prop1), resolveResponsiveProp(. prop2))
}

let useResponsiveProp4 = (prop0, prop1, prop2, prop3) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(. prop0),
    resolveResponsiveProp(. prop1),
    resolveResponsiveProp(. prop2),
    resolveResponsiveProp(. prop3),
  )
}

let useResponsiveProp5 = (prop0, prop1, prop2, prop3, prop4) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(. prop0),
    resolveResponsiveProp(. prop1),
    resolveResponsiveProp(. prop2),
    resolveResponsiveProp(. prop3),
    resolveResponsiveProp(. prop4),
  )
}

let useResponsiveProp6 = (prop0, prop1, prop2, prop3, prop4, prop5) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(. prop0),
    resolveResponsiveProp(. prop1),
    resolveResponsiveProp(. prop2),
    resolveResponsiveProp(. prop3),
    resolveResponsiveProp(. prop4),
    resolveResponsiveProp(. prop5),
  )
}

let useResponsiveProp7 = (prop0, prop1, prop2, prop3, prop4, prop5, prop6) => {
  let {breakpoints, dimensions} = useStacks()
  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(. prop0),
    resolveResponsiveProp(. prop1),
    resolveResponsiveProp(. prop2),
    resolveResponsiveProp(. prop3),
    resolveResponsiveProp(. prop4),
    resolveResponsiveProp(. prop5),
    resolveResponsiveProp(. prop6),
  )
}
