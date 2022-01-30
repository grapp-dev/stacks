open ReactNative

open Stacks_context.ColumnsContext

open Stacks_types
open Stacks_styles
open Stacks_externals

module Box = Stacks_component_Box

@react.component @gentype
let make = (
  // Column props
  ~width: responsiveProp<flex>=[#fluid],
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
  ~viewRef=?,
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
  let {isCollapsed, space, debugStyle, alignY} = useColumns()
  let alignY = coerce(alignY)
  let style = Style.arrayOption([debugStyle, style])
  let boxPaddingLeft = isCollapsed ? None : space
  let marginTop = isCollapsed ? space : None
  let flex = isCollapsed ? None : Some(width)

  <Box
    ?flex
    paddingLeft=?boxPaddingLeft
    ?marginTop
    style={Style.arrayOption([isCollapsed ? Some(styles["fullWidth"]) : None])}>
    <Box
      flex=[#fluid]
      ?alignY
      ?padding
      ?paddingX
      ?paddingY
      ?paddingTop
      ?paddingBottom
      ?paddingLeft
      ?paddingRight
      ?paddingEnd
      ?paddingStart
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
      children
    </Box>
  </Box>
}

%%raw("Stacks_component_Column.__isColumn__ = true")
