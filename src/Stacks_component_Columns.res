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
  ~reverse=?,
  ~alignX: option<responsiveProp<[axisX | space]>>=?,
  ~alignY: option<responsiveProp<axisY>>=?,
  ~collapseBelow: option<string>=?,
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
  let debugStyle = useDebugStyle()
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
  let fullWidth = Some(styles["fullWidth"])
  let style = Style.arrayOption([fullWidth, debugStyle, style])

  let config = React.useMemo3(() => {
    let value: ColumnsContext.t = {
      isCollapsed: isCollapsed,
      space: space,
      debugStyle: debugStyle,
      alignY: alignY,
    }
    value
  }, (isCollapsed, space, alignY))

  <ColumnsContext.Provider value={config}>
    <Box
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
        flex=[#fluid]
        ?alignX
        marginTop=?boxMarginTop
        marginLeft=?boxMarginLeft>
        {children->React.Children.map(child => {
          let isColumn = isColumnComponent(child)
          isColumn ? child : <Column> child </Column>
        })}
      </Box>
    </Box>
  </ColumnsContext.Provider>
}
