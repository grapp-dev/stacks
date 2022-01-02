open ReactNative

open Stacks_hooks
open Stacks_utils
open Stacks_types
open Stacks_styles

module Box = Stacks_component_Box

@react.component @gentype
let make = (
  // Stack props
  ~space=?,
  ~align: option<responsiveProp<[axisX | axisY | stretch]>>=?,
  ~horizontal=?,
  ~divider=?,
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
  ~viewRef=?,
) => {
  let resolveResponsiveProp = useResponsiveProp()
  let space = useSpacing(resolveResponsiveProp(space))
  let align = Stacks_externals.resolve(resolveResponsiveProp, align)
  let horizontal = Stacks_externals.resolve(resolveResponsiveProp, horizontal)
  let direction = horizontal->Belt.Option.mapWithDefaultU(#column, (. value) => {
    value ? #row : #column
  })
  let isVertical = direction == #column
  let width = isVertical ? Some(styles["fullWidth"]) : None
  let marginFn = isVertical ? Stacks_styles.marginBottom : Stacks_styles.marginRight
  let align = isVertical
    ? resolveAlignItemsX(Stacks_externals.resolveAxisX(align))
    : resolveJustifyContentY(Stacks_externals.resolveAxisY(align))
  let debugStyle = useDebugStyle()
  let style = Style.arrayOption([width, style])
  let children = {
    let xs = React.Children.toArray(children)
    Belt.Option.mapWithDefaultU(divider, xs, (. divider) => intersperse(xs, divider))
  }
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
    ?viewRef
    style>
    {Belt.Array.mapWithIndexU(children, (. index, child) => {
      <View
        key={string_of_int(index)}
        style={keepStyle([width, align, debugStyle, isLast(index) ? None : marginFn(Some(space))])}>
        child
      </View>
    })->React.array}
  </Box>
}
