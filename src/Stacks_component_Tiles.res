open ReactNative

open Stacks_hooks
open Stacks_utils
open Stacks_externals

module Stack = Stacks_component_Stack
module Box = Stacks_component_Box

@react.component @gentype
let make = (
  // Tiles props
  ~columns=?,
  ~space=?,
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
  let resolveResponsiveProp = useResponsiveProp()
  let columns =
    columns
    ->resolveResponsiveProp
    ->Belt.Option.mapWithDefaultU(1, (. value) => value < 1 ? 1 : value)
  let debugStyle = useDebugStyle()
  let children = children->React.Children.toArray->splitEvery(columns)
  let negativeSpace = negateSpace(space)

  <Stack
    ?space
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
    {Belt.Array.mapWithIndexU(children, (. index, arr) => {
      let arr = Belt.Array.makeByU(columns, (. index) =>
        arr->Belt.Array.get(index)->Belt.Option.getWithDefault(React.null)
      )
      let tiles = Belt.Array.mapWithIndexU(arr, (. index, child) => {
        let style = Style.arrayOption([isValidElement(child) ? debugStyle : None])
        <Box key={string_of_int(index)} flex=[#fluid] marginLeft=?space style> child </Box>
      })->React.array

      <Box key={string_of_int(index)} marginLeft=?negativeSpace direction=[#row]> tiles </Box>
    })->React.array}
  </Stack>
}
