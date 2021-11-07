open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils
open Stacks_styles

module Box = Stacks_component_Box

module Context = {
  type t = {
    isCollapsed: bool,
    space: float,
    debugStyle: ReactNative.Style.t,
    alignY: ReactNative.Style.t,
  }

  let context = React.createContext({
    isCollapsed: false,
    space: 0.,
    debugStyle: undefinedStyle,
    alignY: undefinedStyle,
  })
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
  let currentBreakpoint = useCurrentBreakpoint()
  let resolveResponsiveProp = useResponsiveProp()
  let alignX = Stacks_externals.resolve(resolveResponsiveProp, alignX)
  let alignY = Stacks_externals.resolve(resolveResponsiveProp, alignY)
  let space = useSpacing(resolveResponsiveProp(space))

  let debugStyle = useDebugStyle()
  let {isCollapsed, direction} = resolveCollapsibleProps(
    ~collapseBelow,
    ~reverse,
    ~currentBreakpoint,
  )
  let negativeSpace = -.space
  let viewStyle = Style.array([styles["fullWidth"]])
  let style = Style.array(
    isCollapsed
      ? [styles["fullWidth"], Stacks_styles.marginTop(negativeSpace), unsafeStyle(style)]
      : [
          Stacks_styles.marginLeft(negativeSpace),
          resolveDirection(Some(direction)),
          resolveJustifyContentX(alignX),
          unsafeStyle(style),
        ],
  )

  let config: Context.t = {
    isCollapsed: isCollapsed,
    space: space,
    debugStyle: debugStyle,
    alignY: resolveJustifyContentY(alignY),
  }

  <Context.Provider value={config}>
    <View style={viewStyle}>
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
        ?viewRef
        style>
        children
      </Box>
    </View>
  </Context.Provider>
}
