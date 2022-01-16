open Stacks_types
open Stacks_hooks
open Stacks_context
open Stacks_utils
open Stacks_externals

module Box = Stacks_component_Box
module Row = Stacks_component_Row

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
  let debugStyle = useDebugStyle()
  let alignX = coerce(alignX)
  let alignY = coerce(alignY)
  let direction =
    reverse->Belt.Option.mapWithDefaultU(#column, (. reverse) => reverse ? #columnReverse : #column)
  let negativeSpace = negateSpace(space)

  let config = React.useMemo1(() => {
    let value: RowsContext.t = {
      space: space,
      debugStyle: debugStyle,
    }
    value
  }, [space])

  <RowsContext.Provider value={config}>
    <Box
      flex=[#fluid]
      direction=[#row]
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
      ?style>
      <Box direction=[direction] flex=[#fluid] marginTop=?negativeSpace ?alignX ?alignY>
        {children->React.Children.map(child => {
          let isRow = isRowComponent(child)
          isRow ? child : <Row> child </Row>
        })}
      </Box>
    </Box>
  </RowsContext.Provider>
}
