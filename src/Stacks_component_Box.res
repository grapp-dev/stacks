open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

@react.component
let make = (
  // Box props
  ~padding=?,
  ~paddingTop=?,
  ~paddingBottom=?,
  ~paddingLeft=?,
  ~paddingRight=?,
  ~paddingEnd=?,
  ~paddingStart=?,
  ~margin=?,
  ~marginTop=?,
  ~marginBottom=?,
  ~marginLeft=?,
  ~marginRight=?,
  ~marginEnd=?,
  ~marginStart=?,
  ~alignX=?,
  ~alignY=?,
  ~alignSelf=?,
  ~direction=?,
  ~wrap=?,
  ~flex=?,
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
  ~children=?,
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
  let debugStyle = useDebugStyle()

  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }
  let propToDp = value => value |> resolveResponsiveProp |> spacing(. _)

  let padding = padding->propToDp->Belt.Option.map(Stacks_utils.padding)
  let paddingTop = paddingTop->propToDp->Belt.Option.map(Stacks_utils.paddingTop)
  let paddingBottom = paddingBottom->propToDp->Belt.Option.map(Stacks_utils.paddingBottom)
  let paddingLeft = paddingLeft->propToDp->Belt.Option.map(Stacks_utils.paddingLeft)
  let paddingRight = paddingRight->propToDp->Belt.Option.map(Stacks_utils.paddingRight)
  let paddingEnd = paddingEnd->propToDp->Belt.Option.map(Stacks_utils.paddingEnd)
  let paddingStart = paddingStart->propToDp->Belt.Option.map(Stacks_utils.paddingStart)
  let margin = margin->propToDp->Belt.Option.map(Stacks_utils.margin)
  let marginTop = marginTop->propToDp->Belt.Option.map(Stacks_utils.marginTop)
  let marginBottom = marginBottom->propToDp->Belt.Option.map(Stacks_utils.marginBottom)
  let marginLeft = marginLeft->propToDp->Belt.Option.map(Stacks_utils.marginLeft)
  let marginRight = marginRight->propToDp->Belt.Option.map(Stacks_utils.marginRight)
  let marginEnd = marginEnd->propToDp->Belt.Option.map(Stacks_utils.marginEnd)
  let marginStart = marginStart->propToDp->Belt.Option.map(Stacks_utils.marginStart)

  let alignX = resolveResponsiveProp(alignX)
  let alignY = resolveResponsiveProp(alignY)
  let alignSelf = resolveResponsiveProp(alignSelf)
  let direction = resolveResponsiveProp(direction)
  let wrap = resolveResponsiveProp(wrap)
  let flex = resolveResponsiveProp(flex)

  let style = {
    let (alignX, alignY) = {
      let direction = direction->Belt.Option.getWithDefault(#column)

      switch direction {
      | #column | #columnReverse => (resolveAlignItems(alignX), resolveJustifyContent(alignY))
      | _ => (resolveJustifyContent(alignX), resolveAlignItems(alignY))
      }
    }

    Style.arrayOption([
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingEnd,
      paddingStart,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginEnd,
      marginStart,
      alignX,
      alignY,
      resolveDirection(direction),
      resolveWrap(wrap),
      resolveFlexBasis(flex),
      resolveAlignSelf(alignSelf),
      debugStyle,
      style,
    ])
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
    {children->Belt.Option.getWithDefault(React.null)}
  </View>
}
