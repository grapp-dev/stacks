open ReactNative

open Stacks_component_Columns.Context

open Stacks_hooks
open Stacks_utils

@react.component
let make = (
  // Column props
  ~width=[#fluid],
  // View props
  // ~accessibilityActions=?,
  ~accessibilityComponentType=?,
  ~accessibilityElementsHidden=?,
  ~accessibilityHint=?,
  ~accessibilityIgnoresInvertColors=?,
  ~accessibilityLabel=?,
  ~accessibilityLiveRegion=?,
  ~accessibilityRole=?,
  ~accessibilityState=?,
  ~accessibilityTraits=?,
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
  let {isCollapsed, space, debugStyle} = useColumns()
  let resolveResponsiveProp = useResponsiveProp()
  let width = resolveResponsiveProp(. Some(width))
  let style = {
    let arr = isCollapsed
      ? [Some(styles["fullWidth"]), Some(marginTop(. space))]
      : [resolveFlexBasis(width), Some(styles["shrink"]), Some(marginLeft(. space))]

    Style.arrayOption(Belt.Array.concat(arr, [debugStyle, style]))
  }

  <View
    ?accessibilityComponentType
    ?accessibilityElementsHidden
    ?accessibilityHint
    ?accessibilityIgnoresInvertColors
    ?accessibilityLabel
    ?accessibilityLiveRegion
    ?accessibilityRole
    ?accessibilityState
    ?accessibilityTraits
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
    children
  </View>
}
