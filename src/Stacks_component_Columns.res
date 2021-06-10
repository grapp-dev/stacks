open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

module Box = Stacks_component_Box

module Context = {
  type t = {isCollapsed: bool, space: float, debugStyle: option<Style.t>}

  let context = React.createContext({isCollapsed: false, space: 0., debugStyle: None})
  let useColumns = () => React.useContext(context)

  module Provider = {
    let make = React.Context.provider(context)
    let makeProps = (~value, ~children, ()) =>
      {
        "value": value,
        "children": children,
      }
  }
}

@react.component @gentype
let make = (
  // Columns props
  ~space=?,
  ~reverse=?,
  ~alignX: option<responsiveProp<[axisX | space]>>=?,
  ~alignY: option<responsiveProp<axisY>>=?,
  ~collapseBelow: option<[#tablet | #desktop]>=?,
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
  let currentBreakpoint = useCurrentBreakpoint()
  let resolveResponsiveProp = useResponsiveProp()
  let alignX = wrap(resolveResponsiveProp, alignX)
  let alignY = wrap(resolveResponsiveProp, alignY)
  let space = useSpacing(resolveResponsiveProp(space))

  let debugStyle = useDebugStyle()
  let {isCollapsed, direction} = resolveCollapsibleProps(
    ~collapseBelow,
    ~reverse,
    ~currentBreakpoint,
  )
  let negativeSpace = -.space
  let boxStyle = Style.arrayOption([Some(styles["fullWidth"]), style])
  let containerStyle = {
    let arr = isCollapsed
      ? [Some(styles["fullWidth"]), Some(Stacks_utils.marginTop(. negativeSpace))]
      : [
          resolveJustifyContentX(alignX),
          resolveAlignItemsY(alignY),
          Some(Stacks_utils.marginLeft(. negativeSpace)),
        ]

    Style.arrayOption(Belt.Array.concat(arr, [resolveDirection(Some(direction))]))
  }
  let config: Context.t = {isCollapsed: isCollapsed, space: space, debugStyle: debugStyle}

  <Context.Provider value={config}>
    <Box
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
      style=boxStyle>
      <View style=containerStyle> children </View>
    </Box>
  </Context.Provider>
}
