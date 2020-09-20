open ReactNative

open Stacks_types
open Stacks_utils
open Stacks_context

export useStacks = () => React.useContext(context)

export useWindowDimensions = () => {
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

export useSpacing = Belt.Option.mapWithDefault(_, 0., value => {
  let {spacing} = useStacks()
  spacing *. value
})

export useSpacingHandler = () => {
  let {spacing} = useStacks()
  let multiply = (. value) => Belt.Option.map(value, value => spacing *. value)
  multiply
}

export useCurrentBreakpoint = () => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let currentBreakpoint = resolveCurrentBreakpoint(dimensions.width, breakpoints)

  currentBreakpoint
}

export useDebugStyle = () => {
  let {debug} = useStacks()
  let style = React.useRef(None)

  style.current = debug ? Some(Style.viewStyle(~backgroundColor=randomColor(), ())) : None

  style.current
}

export useResponsiveProp = () => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = resolveResponsiveProp(dimensions.width, breakpoints)

  resolveResponsiveProp
}

let useResponsiveProp2 = (prop0, prop1) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (resolveResponsiveProp(prop0), resolveResponsiveProp(prop1))
}

let useResponsiveProp3 = (prop0, prop1, prop2) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (resolveResponsiveProp(prop0), resolveResponsiveProp(prop1), resolveResponsiveProp(prop2))
}

let useResponsiveProp4 = (prop0, prop1, prop2, prop3) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(prop0),
    resolveResponsiveProp(prop1),
    resolveResponsiveProp(prop2),
    resolveResponsiveProp(prop3),
  )
}

let useResponsiveProp5 = (prop0, prop1, prop2, prop3, prop4) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(prop0),
    resolveResponsiveProp(prop1),
    resolveResponsiveProp(prop2),
    resolveResponsiveProp(prop3),
    resolveResponsiveProp(prop4),
  )
}

let useResponsiveProp6 = (prop0, prop1, prop2, prop3, prop4, prop5) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(prop0),
    resolveResponsiveProp(prop1),
    resolveResponsiveProp(prop2),
    resolveResponsiveProp(prop3),
    resolveResponsiveProp(prop4),
    resolveResponsiveProp(prop5),
  )
}

let useResponsiveProp7 = (prop0, prop1, prop2, prop3, prop4, prop5, prop6) => {
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }

  (
    resolveResponsiveProp(prop0),
    resolveResponsiveProp(prop1),
    resolveResponsiveProp(prop2),
    resolveResponsiveProp(prop3),
    resolveResponsiveProp(prop4),
    resolveResponsiveProp(prop5),
    resolveResponsiveProp(prop6),
  )
}
