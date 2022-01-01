open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils
open Stacks_styles

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
    let resolve = resolveResponsiveProp(~currentWidth=dimensions.width, ~breakpoints)
    resolve(values)
  }
  let resolve = (value, mapFn) =>
    value->resolveResponsiveProp->multiply->Belt.Option.getUnsafe->mapFn

  let padding = resolve(padding, Stacks_styles.padding)
  let paddingX = resolve(paddingX, Stacks_styles.paddingX)
  let paddingY = resolve(paddingY, Stacks_styles.paddingY)
  let paddingTop = resolve(paddingTop, Stacks_styles.paddingTop)
  let paddingBottom = resolve(paddingBottom, Stacks_styles.paddingBottom)
  let paddingLeft = resolve(paddingLeft, Stacks_styles.paddingLeft)
  let paddingRight = resolve(paddingRight, Stacks_styles.paddingRight)
  let paddingEnd = resolve(paddingEnd, Stacks_styles.paddingEnd)
  let paddingStart = resolve(paddingStart, Stacks_styles.paddingStart)
  let margin = resolve(margin, Stacks_styles.margin)
  let marginX = resolve(marginX, Stacks_styles.marginX)
  let marginY = resolve(marginY, Stacks_styles.marginY)
  let marginTop = resolve(marginTop, Stacks_styles.marginTop)
  let marginBottom = resolve(marginBottom, Stacks_styles.marginBottom)
  let marginLeft = resolve(marginLeft, Stacks_styles.marginLeft)
  let marginRight = resolve(marginRight, Stacks_styles.marginRight)
  let marginEnd = resolve(marginEnd, Stacks_styles.marginEnd)
  let marginStart = resolve(marginStart, Stacks_styles.marginStart)

  let alignX = resolveResponsiveProp(alignX)
  let alignY = resolveResponsiveProp(alignY)
  let alignSelf = resolveResponsiveProp(alignSelf)
  let direction = resolveResponsiveProp(direction)
  let wrap = resolveResponsiveProp(wrap)
  let flex = resolveResponsiveProp(flex)

  let style = {
    let (alignX, alignY) = {
      let direction = Belt.Option.getWithDefault(direction, #column)

      switch direction {
      | #column
      | #columnReverse => (resolveAlignItems(alignX), resolveJustifyContent(alignY))
      | _ => (resolveJustifyContent(alignX), resolveAlignItems(alignY))
      }
    }

    Style.array([
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
      unsafeStyle(style),
    ])
  }
  let ref = Belt.Option.getUnsafe(viewRef)

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
    ref
    style>
    {children->Belt.Option.getWithDefault(React.null)}
  </View>
}
