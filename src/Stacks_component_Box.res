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
  let {breakpoints} = useStacks()
  let {multiply} = useSpacingHelpers()
  let dimensions = useWindowDimensions()
  let debugStyle = useDebugStyle()

  let resolveResponsiveProp = (. values) => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(. values)
  }
  let propToDp = (. value) => Belt.Option.mapU(resolveResponsiveProp(. value), multiply)

  let padding = Belt.Option.mapU(propToDp(. padding), Stacks_utils.padding)
  let paddingTop = Belt.Option.mapU(propToDp(. paddingTop), Stacks_utils.paddingTop)
  let paddingBottom = Belt.Option.mapU(propToDp(. paddingBottom), Stacks_utils.paddingBottom)
  let paddingLeft = Belt.Option.mapU(propToDp(. paddingLeft), Stacks_utils.paddingLeft)
  let paddingRight = Belt.Option.mapU(propToDp(. paddingRight), Stacks_utils.paddingRight)
  let paddingEnd = Belt.Option.mapU(propToDp(. paddingEnd), Stacks_utils.paddingEnd)
  let paddingStart = Belt.Option.mapU(propToDp(. paddingStart), Stacks_utils.paddingStart)
  let margin = Belt.Option.mapU(propToDp(. margin), Stacks_utils.margin)
  let marginTop = Belt.Option.mapU(propToDp(. marginTop), Stacks_utils.marginTop)
  let marginBottom = Belt.Option.mapU(propToDp(. marginBottom), Stacks_utils.marginBottom)
  let marginLeft = Belt.Option.mapU(propToDp(. marginLeft), Stacks_utils.marginLeft)
  let marginRight = Belt.Option.mapU(propToDp(. marginRight), Stacks_utils.marginRight)
  let marginEnd = Belt.Option.mapU(propToDp(. marginEnd), Stacks_utils.marginEnd)
  let marginStart = Belt.Option.mapU(propToDp(. marginStart), Stacks_utils.marginStart)

  let alignX = resolveResponsiveProp(. alignX)
  let alignY = resolveResponsiveProp(. alignY)
  let alignSelf = resolveResponsiveProp(. alignSelf)
  let direction = resolveResponsiveProp(. direction)
  let wrap = resolveResponsiveProp(. wrap)
  let flex = resolveResponsiveProp(. flex)

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
