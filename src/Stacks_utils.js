export const normalizeResponsiveProp = value => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [value]
  }

  if (value && value.length) {
    return value
  }

  console.warn(`Invalid responsive prop value: ${JSON.stringify(value)}`)

  return []
}

export const makeViewProps = props => {
  return {
    accessibilityActions: props.accessibilityActions,
    accessibilityElementsHidden: props.accessibilityElementsHidden,
    accessibilityHint: props.accessibilityHint,
    accessibilityIgnoresInvertColors: props.accessibilityIgnoresInvertColors,
    accessibilityLabel: props.accessibilityLabel,
    accessibilityLiveRegion: props.accessibilityLiveRegion,
    accessibilityRole: props.accessibilityRole,
    accessibilityState: props.accessibilityState,
    accessibilityValue: props.accessibilityValue,
    accessibilityViewIsModal: props.accessibilityViewIsModal,
    accessible: props.accessible,
    collapsable: props.collapsable,
    hitSlop: props.hitSlop,
    importantForAccessibility: props.importantForAccessibility,
    nativeID: props.nativeID,
    needsOffscreenAlphaCompositing: props.needsOffscreenAlphaCompositing,
    onAccessibilityEscape: props.onAccessibilityEscape,
    onAccessibilityTap: props.onAccessibilityTap,
    onLayout: props.onLayout,
    onMagicTap: props.onMagicTap,
    onMoveShouldSetResponder: props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: props.onMoveShouldSetResponderCapture,
    onResponderEnd: props.onResponderEnd,
    onResponderGrant: props.onResponderGrant,
    onResponderMove: props.onResponderMove,
    onResponderReject: props.onResponderReject,
    onResponderRelease: props.onResponderRelease,
    onResponderStart: props.onResponderStart,
    onResponderTerminate: props.onResponderTerminate,
    onResponderTerminationRequest: props.onResponderTerminationRequest,
    onStartShouldSetResponder: props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture: props.onStartShouldSetResponderCapture,
    pointerEvents: props.pointerEvents,
    removeClippedSubviews: props.removeClippedSubviews,
    renderToHardwareTextureAndroid: props.renderToHardwareTextureAndroid,
    shouldRasterizeIOS: props.shouldRasterizeIOS,
    testID: props.testID,
    viewRef: props.viewRef,
    onMouseDown: props.onMouseDown,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onMouseMove: props.onMouseMove,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut,
    onMouseUp: props.onMouseUp,
  }
}
