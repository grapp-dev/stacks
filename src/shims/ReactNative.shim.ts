import {
  AccessibilityState,
  AccessibilityActionInfo,
  AccessibilityValue,
  AccessibilityRole,
  AccessibilityPropsAndroid,
  GestureResponderEvent,
  Insets,
  LayoutChangeEvent,
  ScaledSize,
  StyleProp,
  ViewStyle,
} from 'react-native'

export type Event_layoutEvent = LayoutChangeEvent
export type Event_pressEvent = GestureResponderEvent
export type Style_t = StyleProp<ViewStyle>
export type Accessibility_value = AccessibilityValue
export type Accessibility_state = AccessibilityState
export type Accessibility_liveRegion = AccessibilityPropsAndroid['accessibilityLiveRegion']
export type Accessibility_role = AccessibilityRole
export type View_View_edgeInsets = Insets
export type Dimensions_displayMetrics = ScaledSize
export type Accessibility_actionInfo = AccessibilityActionInfo
export type Style_size = number | string
export type Dimensions_handler = ({
  window,
  screen,
}: {
  window: ScaledSize
  screen: ScaledSize
}) => void
