let context: React.Context.t<Stacks_types.context>
export useWindowDimensions: unit => ReactNative.Dimensions.displayMetrics

module StacksProvider: {
  @react.component
  export make: (
    ~spacing: float=?,
    ~debug: bool=?,
    ~breakpoints: Stacks_types.breakpoints=?,
    ~children: React.element,
  ) => React.element
}
