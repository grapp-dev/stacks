open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

@react.component
export make = (
  ~children,
  // Box props
  ~padding: option<responsiveProp<float>>=?,
  ~paddingTop: option<responsiveProp<float>>=?,
  ~paddingBottom: option<responsiveProp<float>>=?,
  ~paddingLeft: option<responsiveProp<float>>=?,
  ~paddingRight: option<responsiveProp<float>>=?,
  ~paddingEnd: option<responsiveProp<float>>=?,
  ~paddingStart: option<responsiveProp<float>>=?,
  ~margin: option<responsiveProp<float>>=?,
  ~marginTop: option<responsiveProp<float>>=?,
  ~marginBottom: option<responsiveProp<float>>=?,
  ~marginLeft: option<responsiveProp<float>>=?,
  ~marginRight: option<responsiveProp<float>>=?,
  ~marginEnd: option<responsiveProp<float>>=?,
  ~marginStart: option<responsiveProp<float>>=?,
  ~alignX: option<responsiveProp<[axisX | stretch]>>=?,
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
  // React Native Web props
  ~onMouseDown=?,
  ~onMouseEnter=?,
  ~onMouseLeave=?,
  ~onMouseMove=?,
  ~onMouseOver=?,
  ~onMouseOut=?,
  ~onMouseUp=?,
) => {
  let spacing = useSpacingHandler()
  let {breakpoints} = useStacks()
  let dimensions = useWindowDimensions()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }
  let propToDp = value => value |> resolveResponsiveProp |> spacing(. _) |> Style.dp

  let padding = propToDp(padding)
  let paddingTop = propToDp(paddingTop)
  let paddingBottom = propToDp(paddingBottom)
  let paddingLeft = propToDp(paddingLeft)
  let paddingRight = propToDp(paddingRight)
  let paddingEnd = propToDp(paddingEnd)
  let paddingStart = propToDp(paddingStart)
  let margin = propToDp(margin)
  let marginTop = propToDp(marginTop)
  let marginBottom = propToDp(marginBottom)
  let marginLeft = propToDp(marginLeft)
  let marginRight = propToDp(marginRight)
  let marginEnd = propToDp(marginEnd)
  let marginStart = propToDp(marginStart)
  let alignX = resolveResponsiveProp(alignX)

  let style = Style.arrayOption([
    Some(
      Style.viewStyle(
        ~padding,
        ~paddingTop,
        ~paddingBottom,
        ~paddingLeft,
        ~paddingRight,
        ~paddingEnd,
        ~paddingStart,
        ~margin,
        ~marginTop,
        ~marginBottom,
        ~marginLeft,
        ~marginRight,
        ~marginEnd,
        ~marginStart,
        (),
      ),
    ),
    style,
  ])

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
