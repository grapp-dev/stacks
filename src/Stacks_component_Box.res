open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

@react.component @gentype
let make = (
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
  ~alignX: option<responsiveProp<[axisX | axisY | space | stretch]>>=?,
  ~alignY: option<responsiveProp<[axisX | axisY | space | stretch]>>=?,
  ~alignSelf: option<responsiveProp<[axisX | axisY | stretch]>>=?,
  ~direction: option<responsiveProp<direction>>=?,
  ~wrap: option<responsiveProp<wrap>>=?,
  ~flex: option<responsiveProp<flex>>=?,
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
  ~importantForAccessibility: option<importantForAccessibility>=?,
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
  ~pointerEvents: option<pointerEvents>=?,
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
  let {breakpoints, dimensions} = useStacks()
  let {multiply} = useSpacingHelpers()
  let debugStyle = useDebugStyle()
  let resolveResponsiveProp = values => {
    let resolve = resolveResponsiveProp(dimensions.width, breakpoints)
    resolve(values)
  }
  let propToDp = value => Belt.Option.mapU(resolveResponsiveProp(value), multiply)

  let padding = Belt.Option.mapU(propToDp(padding), Stacks_utils.padding)
  let paddingX = Belt.Option.mapU(propToDp(paddingX), Stacks_utils.paddingX)
  let paddingY = Belt.Option.mapU(propToDp(paddingY), Stacks_utils.paddingY)
  let paddingTop = Belt.Option.mapU(propToDp(paddingTop), Stacks_utils.paddingTop)
  let paddingBottom = Belt.Option.mapU(propToDp(paddingBottom), Stacks_utils.paddingBottom)
  let paddingLeft = Belt.Option.mapU(propToDp(paddingLeft), Stacks_utils.paddingLeft)
  let paddingRight = Belt.Option.mapU(propToDp(paddingRight), Stacks_utils.paddingRight)
  let paddingEnd = Belt.Option.mapU(propToDp(paddingEnd), Stacks_utils.paddingEnd)
  let paddingStart = Belt.Option.mapU(propToDp(paddingStart), Stacks_utils.paddingStart)
  let margin = Belt.Option.mapU(propToDp(margin), Stacks_utils.margin)
  let marginX = Belt.Option.mapU(propToDp(marginX), Stacks_utils.marginX)
  let marginY = Belt.Option.mapU(propToDp(marginY), Stacks_utils.marginY)
  let marginTop = Belt.Option.mapU(propToDp(marginTop), Stacks_utils.marginTop)
  let marginBottom = Belt.Option.mapU(propToDp(marginBottom), Stacks_utils.marginBottom)
  let marginLeft = Belt.Option.mapU(propToDp(marginLeft), Stacks_utils.marginLeft)
  let marginRight = Belt.Option.mapU(propToDp(marginRight), Stacks_utils.marginRight)
  let marginEnd = Belt.Option.mapU(propToDp(marginEnd), Stacks_utils.marginEnd)
  let marginStart = Belt.Option.mapU(propToDp(marginStart), Stacks_utils.marginStart)

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

    Style.arrayOption(
      keepStyles([
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingEnd,
        paddingStart,
        margin,
        marginX,
        marginY,
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
      ]),
    )
  }

  <View
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
    {children->Belt.Option.getWithDefault(React.null)}
  </View>
}
