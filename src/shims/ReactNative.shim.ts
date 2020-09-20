import {
  AccessibilityState,
  AccessibilityTrait,
  AccessibilityValue,
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
export type View_edgeInsets = Insets
export type Accessibility_value = AccessibilityValue
export type Accessibility_state = AccessibilityState
export type AccessibilityTrait_t = AccessibilityTrait
export type Dimensions_displayMetrics = ScaledSize
export type Style_size = number | string
export type Dimensions_handler = ({
  window,
  screen,
}: {
  window: ScaledSize
  screen: ScaledSize
}) => void
