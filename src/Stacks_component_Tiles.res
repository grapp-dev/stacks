open ReactNative

open Stacks_hooks
open Stacks_utils
open Stacks_types

module Stack = Stacks_component_Stack

@react.component @gentype
let make = (
  // Tiles props
  ~columns,
  ~space=[0.],
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
  let resolveResponsiveProp = useResponsiveProp()
  let columns = wrap(resolveResponsiveProp, Some(columns))
  let tileSpace = useSpacing(resolveResponsiveProp(Some(space)))
  let debugStyle = useDebugStyle()
  let rowStyle = Style.arrayOption([Some(styles["fullWidth"]), resolveDirection(Some(#row))])
  let columns = Belt.Option.getWithDefault(columns, 1)
  let children = children |> React.Children.toArray |> splitEvery(columns)

  <Stack
    space
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
    ?style>
    {Belt.Array.mapWithIndexU(children, (. index, arr) => {
      let arr = Belt.Array.makeByU(columns, (. index) =>
        arr->Belt.Array.get(index)->Belt.Option.getWithDefault(React.null)
      )
      let isLast = isLastElement(arr)
      let tiles = Belt.Array.mapWithIndexU(arr, (. index, child) => {
        let style = {
          Style.arrayOption([
            Some(styles["flexFluid"]),
            isLast(index) ? None : Some(Stacks_utils.marginRight(. tileSpace)),
            isValidElement(child) ? debugStyle : None,
          ])
        }
        <View key={index |> string_of_int} style> child </View>
      }) |> React.array

      <View key={index |> string_of_int} style=rowStyle> tiles </View>
    }) |> React.array}
  </Stack>
}
