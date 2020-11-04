open ReactNative

open Stacks_hooks
open Stacks_utils
open Stacks_extras

module Stack = Stacks_component_Stack

@react.component
let make = (
  // Tiles props
  ~columns,
  ~space=?,
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
  let (tileSpace, columns) = useResponsiveProp2(space, Some(columns))
  let tileSpace = useSpacing(tileSpace)
  let debugStyle = useDebugStyle()
  let rowStyle = Style.arrayOption([Some(styles["fullWidth"]), resolveDirection(Some(#row))])
  let columns = Belt.Option.getWithDefault(columns, 1)
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
    {Js.Array2.mapi(children, (arr, index) => {
      let arr = Belt.Array.makeByU(columns, (. index) =>
        arr->Belt.Array.get(index)->Belt.Option.getWithDefault(React.null)
      )
      let isLast = isLastElement(arr)
      let tiles = Js.Array2.mapi(arr, (child, index) => {
        let style = {
          Style.arrayOption([
            Some(styles["flexFluid"]),
            isLast(index) ? None : Some(marginRight(. tileSpace)),
            isValidElement(child) ? debugStyle : None,
          ])
        }
        <View key={index |> string_of_int} style> child </View>
      }) |> React.array

      <View key={index |> string_of_int} style=rowStyle> tiles </View>
    }) |> React.array}
  </Stack>
}
