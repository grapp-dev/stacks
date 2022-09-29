open ReactNative

open Stacks_types
open Stacks_context
open Stacks_hooks
open Stacks_utils
open Stacks_styles
open Stacks_externals

module Box = Stacks_component_Box
module Column = Stacks_component_Column

@react.component @gentype
let make = (
  // Columns props
  ~space=?,
  ~height: responsiveProp<flex>=[#content],
  ~reverse=?,
  ~alignX: option<responsiveProp<[axisX | space]>>=?,
  ~alignY: option<responsiveProp<axisY>>=?,
  ~collapseBelow: option<string>=?,
  ~defaultWidth: responsiveProp<flex>=[#fluid],
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
  let {breakpoints} = useStacks()
  let currentBreakpoint = useCurrentBreakpoint()
  let {isCollapsed, direction} = resolveCollapsibleProps(
    ~collapseBelow,
    ~reverse,
    ~currentBreakpoint,
    ~breakpoints,
  )
  let alignY = coerce(alignY)
  let alignX = isCollapsed ? None : coerce(alignX)
  let boxMarginTop = isCollapsed ? negateSpace(space) : None
  let boxMarginLeft = isCollapsed ? None : negateSpace(space)
  let style = Style.arrayOption([Some(styles["fullWidth"]), style])

  let config = React.useMemo5(() => {
    let value: ColumnsContext.t = {
      isCollapsed,
      space,
      alignY,
      height: Some(height),
      width: Some(defaultWidth),
    }
    value
  }, (isCollapsed, space, alignY, height, defaultWidth))

  <ColumnsContext.Provider value={config}>
    <Box
      flex=height
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
      <Box
        direction=[direction]
        flex=height
        ?alignX
        ?alignY
        marginTop=?boxMarginTop
        marginLeft=?boxMarginLeft>
        {children->React.Children.map(child => {
          isValidElement(child)
            ? isColumnComponent(child) ? child : <Column> child </Column>
            : React.null
        })}
      </Box>
    </Box>
  </ColumnsContext.Provider>
}
