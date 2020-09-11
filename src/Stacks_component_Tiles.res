open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

module Stack = Stacks_component_Stack

@react.component
export make = (
  ~children,
  // Tiles props
  ~columns: responsiveProp<int>,
  ~space: option<responsiveProp<float>>=?,
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
  // React Native Web props
  ~onMouseDown=?,
  ~onMouseEnter=?,
  ~onMouseLeave=?,
  ~onMouseMove=?,
  ~onMouseOver=?,
  ~onMouseOut=?,
  ~onMouseUp=?,
) => {
  let (space', columns) = useResponsiveProp2(space, Some(columns))
  let space' = useSpacing(space')
  let debugStyle = useDebugStyle()
  let style' = Style.arrayOption([Some(styles["fullWidth"]), resolveDirection(Some(#row))])
  let columns = columns->Belt.Option.getWithDefault(0)
  let children = children |> React.Children.toArray |> splitEvery(columns)

  <Stack
    ?space
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
    ?style>
    {Js.Array2.map(children, arr => {
      let arr = Belt.Array.makeBy(columns, index =>
        arr->Belt.Array.get(index)->Belt.Option.getWithDefault(React.null)
      )
      let isLast = isLastElement(arr)
      let tiles = Js.Array2.mapi(arr, (child, index) => {
        let style = {
          Style.arrayOption([
            Some(styles["flexFluid"]),
            isLast(index) ? None : marginRight(space'),
            child == React.null ? None : debugStyle,
          ])
        }
        <View key={uid(child)} style> child </View>
      }) |> React.array

      <View style=style'> tiles </View>
    }) |> React.array}
  </Stack>
}
