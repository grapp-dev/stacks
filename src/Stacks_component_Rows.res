open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

module Box = Stacks_component_Box

module Context = {
  type t = {space: float, debugStyle: option<Style.t>}

  let context = React.createContext({space: 0., debugStyle: None})
  let useRows = () => React.useContext(context)

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
  // Rows props
  ~space=?,
  ~reverse=?,
  ~alignX: option<responsiveProp<[axisX]>>=?,
  ~alignY: option<responsiveProp<[axisY | space]>>=?,
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
  let alignX = wrap(resolveResponsiveProp, alignX)
  let alignY = wrap(resolveResponsiveProp, alignY)
  let space = useSpacing(resolveResponsiveProp(space))

  let debugStyle = useDebugStyle()
  let negativeSpace = -.space
  let boxStyle = Style.arrayOption([
    Some(styles["fullWidth"]),
    Some(styles["flexFluid"]),
    Some(styles["directionRow"]),
  ])
  let containerStyle = {
    let direction = Belt.Option.mapWithDefault(reverse, #column, reverse =>
      reverse ? #columnReverse : #column
    )

    Style.arrayOption([
      resolveAlignItemsX(alignX),
      resolveJustifyContentY(alignY),
      resolveDirection(Some(direction)),
      Some(Stacks_utils.marginTop(. negativeSpace)),
      Some(styles["flexFluid"]),
      style,
    ])
  }
  let config: Context.t = {space: space, debugStyle: debugStyle}

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
