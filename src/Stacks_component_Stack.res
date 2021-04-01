open ReactNative

open Stacks_hooks
open Stacks_utils
open Stacks_types

module Box = Stacks_component_Box

@react.component @gentype
let make = (
  // Stack props
  ~space: option<responsiveProp<float>>=?,
  ~align: option<responsiveProp<[axisX | stretch]>>=?,
  ~horizontal: option<responsiveProp<bool>>=?,
  // Box props
  ~padding=?,
  ~paddingX=?,
  ~paddingY=?,
  ~paddingTop=?,
  ~paddingBottom=?,
  ~paddingLeft=?,
  ~paddingRight=?,
  ~paddingEnd=?,
  ~paddingStart=?,
  ~margin=?,
  ~marginX=?,
  ~marginY=?,
  ~marginTop=?,
  ~marginBottom=?,
  ~marginLeft=?,
  ~marginRight=?,
  ~marginEnd=?,
  ~marginStart=?,
  // View props
  ~accessibilityActions=?,
  ~accessibilityElementsHidden=?,
  ~accessibilityHint=?,
  ~accessibilityIgnoresInvertColors=?,
  ~accessibilityLabel=?,
  ~accessibilityLiveRegion=?,
  ~accessibilityRole=?,
  ~accessibilityState=?,
  ~accessibilityValue=?,
  ~accessibilityViewIsModal=?,
  ~accessible=?,
  ~collapsable=?,
  ~hitSlop=?,
  ~importantForAccessibility=?,
  ~nativeID=?,
  ~needsOffscreenAlphaCompositing=?,
  ~onAccessibilityEscape=?,
  ~onAccessibilityTap=?,
  ~onLayout=?,
  ~onMagicTap=?,
  ~onMoveShouldSetResponder=?,
  ~onMoveShouldSetResponderCapture=?,
  ~onResponderEnd=?,
  ~onResponderGrant=?,
  ~onResponderMove=?,
  ~onResponderReject=?,
  ~onResponderRelease=?,
  ~onResponderStart=?,
  ~onResponderTerminate=?,
  ~onResponderTerminationRequest=?,
  ~onStartShouldSetResponder=?,
  ~onStartShouldSetResponderCapture=?,
  ~pointerEvents=?,
  ~removeClippedSubviews=?,
  ~renderToHardwareTextureAndroid=?,
  ~shouldRasterizeIOS=?,
  ~style=?,
  ~testID=?,
  ~children,
  // React Native Web props
  ~onMouseDown=?,
  ~onMouseEnter=?,
  ~onMouseLeave=?,
  ~onMouseMove=?,
  ~onMouseOver=?,
  ~onMouseOut=?,
  ~onMouseUp=?,
) => {
  let resolveResponsiveProp = useResponsiveProp()
  let space = useSpacing(resolveResponsiveProp(space))
  let align = wrap(resolveResponsiveProp, align)
  let horizontal = wrap(resolveResponsiveProp, horizontal)
  let width = horizontal->Belt.Option.flatMapU((. value) => {
    value ? None : Some(styles["fullWidth"])
  })
  let direction = horizontal->Belt.Option.mapWithDefaultU(#column, (. value) => {
    value ? #row : #column
  })
  let marginFn =
    horizontal
    ->Belt.Option.mapU((. value) => {
      value ? Stacks_utils.marginRight : Stacks_utils.marginBottom
    })
    ->Belt.Option.getWithDefault(Stacks_utils.marginBottom)
  let debugStyle = useDebugStyle()
  let style = Style.arrayOption([width, style])
  let children = React.Children.toArray(children)
  let isLast = isLastElement(children)

  <Box
    direction=[direction]
    ?padding
    ?paddingX
    ?paddingY
    ?paddingTop
    ?paddingBottom
    ?paddingLeft
    ?paddingRight
    ?paddingEnd
    ?paddingStart
    ?margin
    ?marginX
    ?marginY
    ?marginTop
    ?marginBottom
    ?marginLeft
    ?marginRight
    ?marginEnd
    ?marginStart
    ?accessibilityActions
    ?accessibilityElementsHidden
    ?accessibilityHint
    ?accessibilityIgnoresInvertColors
    ?accessibilityLabel
    ?accessibilityLiveRegion
    ?accessibilityRole
    ?accessibilityState
    ?accessibilityValue
    ?accessibilityViewIsModal
    ?accessible
    ?collapsable
    ?hitSlop
    ?importantForAccessibility
    ?nativeID
    ?needsOffscreenAlphaCompositing
    ?onAccessibilityEscape
    ?onAccessibilityTap
    ?onLayout
    ?onMagicTap
    ?onMoveShouldSetResponder
    ?onMoveShouldSetResponderCapture
    ?onResponderEnd
    ?onResponderGrant
    ?onResponderMove
    ?onResponderReject
    ?onResponderRelease
    ?onResponderStart
    ?onResponderTerminate
    ?onResponderTerminationRequest
    ?onStartShouldSetResponder
    ?onStartShouldSetResponderCapture
    ?pointerEvents
    ?removeClippedSubviews
    ?renderToHardwareTextureAndroid
    ?shouldRasterizeIOS
    ?testID
    ?onMouseDown
    ?onMouseEnter
    ?onMouseLeave
    ?onMouseMove
    ?onMouseOver
    ?onMouseOut
    ?onMouseUp
    style>
    {Belt.Array.mapWithIndexU(children, (. index, child) => {
      <View
        key={index |> string_of_int}
        style={Style.arrayOption([
          width,
          resolveAlignItemsX(align),
          debugStyle,
          isLast(index) ? None : Some(marginFn(. space)),
        ])}>
        child
      </View>
    }) |> React.array}
  </Box>
}
