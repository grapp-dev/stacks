import { type DimensionValue, View, type ViewProps, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type {
  AxisX,
  AxisY,
  BackfaceVisibility,
  BorderCurve,
  BorderRadius,
  Color,
  Direction,
  Flex,
  Gap,
  Margin,
  OutlineStyle,
  Overflow,
  Padding,
  PointerEvent,
  ResponsiveProp,
  Space,
  Stretch,
  Wrap,
} from '../types';
import {
  resolveBorderRadius,
  resolveColor,
  resolveFlexAlignment,
  resolveFlexDirection,
  resolveFlexSizing,
  resolveFlexWrap,
  resolveGap,
  resolveMargin,
  resolvePadding,
  resolveResponsiveStyle,
} from '../utils';
import type { Polymorphic } from '../polymorphic';

type BoxProps = {
  readonly alignX?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
  readonly alignY?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
  readonly gap?: ResponsiveProp<Gap>;
  readonly gapX?: ResponsiveProp<Gap>;
  readonly gapY?: ResponsiveProp<Gap>;
  readonly padding?: ResponsiveProp<Padding>;
  readonly paddingX?: ResponsiveProp<Padding>;
  readonly paddingY?: ResponsiveProp<Padding>;
  readonly paddingTop?: ResponsiveProp<Padding>;
  readonly paddingBottom?: ResponsiveProp<Padding>;
  readonly paddingLeft?: ResponsiveProp<Padding>;
  readonly paddingRight?: ResponsiveProp<Padding>;
  readonly paddingEnd?: ResponsiveProp<Padding>;
  readonly paddingStart?: ResponsiveProp<Padding>;
  readonly margin?: ResponsiveProp<Margin>;
  readonly marginX?: ResponsiveProp<Margin>;
  readonly marginY?: ResponsiveProp<Margin>;
  readonly marginTop?: ResponsiveProp<Margin>;
  readonly marginBottom?: ResponsiveProp<Margin>;
  readonly marginLeft?: ResponsiveProp<Margin>;
  readonly marginRight?: ResponsiveProp<Margin>;
  readonly marginStart?: ResponsiveProp<Margin>;
  readonly marginEnd?: ResponsiveProp<Margin>;
  readonly direction?: ResponsiveProp<Direction>;
  readonly wrap?: ResponsiveProp<Wrap>;
  readonly flex?: ResponsiveProp<Flex>;
  readonly reverse?: ResponsiveProp<boolean>;
  readonly borderRadius?: ResponsiveProp<BorderRadius>;
  readonly borderTopLeftRadius?: ResponsiveProp<BorderRadius>;
  readonly borderTopRightRadius?: ResponsiveProp<BorderRadius>;
  readonly borderBottomLeftRadius?: ResponsiveProp<BorderRadius>;
  readonly borderBottomRightRadius?: ResponsiveProp<BorderRadius>;
  readonly borderWidth?: ResponsiveProp<number>;
  readonly borderTopWidth?: ResponsiveProp<number>;
  readonly borderRightWidth?: ResponsiveProp<number>;
  readonly borderBottomWidth?: ResponsiveProp<number>;
  readonly borderLeftWidth?: ResponsiveProp<number>;
  readonly borderColor?: ResponsiveProp<Color>;
  readonly borderCurve?: ResponsiveProp<BorderCurve>;
  readonly backgroundColor?: ResponsiveProp<Color>;
  readonly backfaceVisibility?: ResponsiveProp<BackfaceVisibility>;
  readonly outlineColor?: ResponsiveProp<Color>;
  readonly outlineOffset?: ResponsiveProp<number>;
  readonly outlineStyle?: ResponsiveProp<OutlineStyle>;
  readonly outlineWidth?: ResponsiveProp<number>;
  readonly overflow?: ResponsiveProp<Overflow>;
  readonly pointerEvents?: ResponsiveProp<PointerEvent>;
  readonly width?: ResponsiveProp<DimensionValue>;
  readonly height?: ResponsiveProp<DimensionValue>;
};

type As = {
  readonly as?: React.ElementType;
};
type Props = ViewProps & BoxProps & As;
type PolymorphicBox = Polymorphic<typeof View, Props>;

export const Box: PolymorphicBox = (props: Props) => {
  const {
    as: Component = View,
    children,
    flex,
    direction,
    alignX,
    alignY,
    gap,
    gapX,
    gapY,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingEnd,
    paddingStart,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    width,
    height,
    wrap,
    reverse,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderColor,
    borderCurve,
    backgroundColor,
    backfaceVisibility,
    outlineColor,
    outlineOffset,
    outlineStyle,
    outlineWidth,
    overflow,
    pointerEvents,
    style,
    ...rest
  } = props;

  const box: BoxProps = {
    flex,
    direction,
    alignX,
    alignY,
    gap,
    gapX,
    gapY,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingEnd,
    paddingStart,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginStart,
    marginEnd,
    width,
    height,
    wrap,
    reverse,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderColor,
    borderCurve,
    backgroundColor,
    backfaceVisibility,
    outlineColor,
    outlineOffset,
    outlineStyle,
    outlineWidth,
    overflow,
    pointerEvents,
  };

  return (
    <View {...rest} style={[styles.from(box) as ViewStyle, style]}>
      {children}
    </View>
  );
};

Box.displayName = 'Box';

const styles = StyleSheet.create((theme) => {
  return {
    from: (props: BoxProps) => {
      const {
        gap,
        gapX,
        gapY,
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingEnd,
        paddingStart,
        margin,
        marginX,
        marginY,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginStart,
        marginEnd,
        direction,
        reverse,
        flex,
        alignX,
        alignY,
        width,
        height,
        wrap,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderWidth,
        borderTopWidth,
        borderRightWidth,
        borderBottomWidth,
        borderLeftWidth,
        borderColor,
        borderCurve,
        backgroundColor,
        backfaceVisibility,
        outlineColor,
        outlineOffset,
        outlineStyle,
        outlineWidth,
        overflow,
        pointerEvents,
      } = props;

      const makeGap = resolveGap(theme);
      const makePadding = resolvePadding(theme);
      const makeMargin = resolveMargin(theme);
      const makeBorderRadius = resolveBorderRadius(theme);
      const makeColor = resolveColor(theme);

      const { alignItems, justifyContent } = resolveFlexAlignment({
        alignX,
        alignY,
        direction,
      });
      const { flexBasis, flexGrow, flexShrink } = resolveFlexSizing({
        flex,
        direction,
        width,
        height,
      });
      const flexDirection = resolveFlexDirection({
        direction,
        reverse,
      });
      const resolvedWidth = resolveResponsiveStyle(width);
      const resolvedHeight = resolveResponsiveStyle(height);
      const resolvedGap = makeGap(gap);
      const resolvedRowGap = makeGap(gapY);
      const resolvedColumnGap = makeGap(gapX);
      const resolvedPadding = makePadding(padding);
      const paddingHorizontal = makePadding(paddingX);
      const paddingVertical = makePadding(paddingY);
      const resolvedPaddingTop = makePadding(paddingTop);
      const resolvedPaddingBottom = makePadding(paddingBottom);
      const resolvedPaddingLeft = makePadding(paddingLeft);
      const resolvedPaddingRight = makePadding(paddingRight);
      const resolvedPaddingEnd = makePadding(paddingEnd);
      const resolvedPaddingStart = makePadding(paddingStart);
      const resolvedMargin = makeMargin(margin);
      const marginHorizontal = makeMargin(marginX);
      const marginVertical = makeMargin(marginY);
      const resolvedMarginTop = makeMargin(marginTop);
      const resolvedMarginBottom = makeMargin(marginBottom);
      const resolvedMarginLeft = makeMargin(marginLeft);
      const resolvedMarginRight = makeMargin(marginRight);
      const resolvedMarginStart = makeMargin(marginStart);
      const resolvedMarginEnd = makeMargin(marginEnd);
      const flexWrap = resolveFlexWrap(wrap);
      const resolvedBorderRadius = makeBorderRadius(borderRadius);
      const resolvedBorderTopLeftRadius = makeBorderRadius(borderTopLeftRadius);
      const resolvedBorderTopRightRadius = makeBorderRadius(borderTopRightRadius);
      const resolvedBorderBottomLeftRadius = makeBorderRadius(borderBottomLeftRadius);
      const resolvedBorderBottomRightRadius = makeBorderRadius(borderBottomRightRadius);
      const resolvedBorderWidth = resolveResponsiveStyle(borderWidth);
      const resolvedBorderTopWidth = resolveResponsiveStyle(borderTopWidth);
      const resolvedBorderRightWidth = resolveResponsiveStyle(borderRightWidth);
      const resolvedBorderBottomWidth = resolveResponsiveStyle(borderBottomWidth);
      const resolvedBorderLeftWidth = resolveResponsiveStyle(borderLeftWidth);
      const resolvedBorderColor = makeColor(borderColor);
      const resolvedBorderCurve = resolveResponsiveStyle(borderCurve);
      const resolvedBackgroundColor = makeColor(backgroundColor);
      const resolvedBackfaceVisibility = resolveResponsiveStyle(backfaceVisibility);
      const resolvedOutlineColor = makeColor(outlineColor);
      const resolvedOutlineOffset = resolveResponsiveStyle(outlineOffset);
      const resolvedOutlineStyle = resolveResponsiveStyle(outlineStyle);
      const resolvedOutlineWidth = resolveResponsiveStyle(outlineWidth);
      const resolvedOverflow = resolveResponsiveStyle(overflow);
      const resolvedPointerEvents = resolveResponsiveStyle(pointerEvents);

      return {
        flexGrow,
        flexShrink,
        alignItems,
        justifyContent,
        flexDirection,
        width: resolvedWidth,
        height: resolvedHeight,
        gap: resolvedGap,
        rowGap: resolvedRowGap,
        columnGap: resolvedColumnGap,
        padding: resolvedPadding,
        paddingHorizontal,
        paddingVertical,
        paddingTop: resolvedPaddingTop,
        paddingBottom: resolvedPaddingBottom,
        paddingLeft: resolvedPaddingLeft,
        paddingRight: resolvedPaddingRight,
        paddingEnd: resolvedPaddingEnd,
        paddingStart: resolvedPaddingStart,
        margin: resolvedMargin,
        marginHorizontal,
        marginVertical,
        marginTop: resolvedMarginTop,
        marginBottom: resolvedMarginBottom,
        marginLeft: resolvedMarginLeft,
        marginRight: resolvedMarginRight,
        marginStart: resolvedMarginStart,
        marginEnd: resolvedMarginEnd,
        flexWrap,
        flexBasis,
        borderRadius: resolvedBorderRadius,
        borderTopLeftRadius: resolvedBorderTopLeftRadius,
        borderTopRightRadius: resolvedBorderTopRightRadius,
        borderBottomLeftRadius: resolvedBorderBottomLeftRadius,
        borderBottomRightRadius: resolvedBorderBottomRightRadius,
        borderWidth: resolvedBorderWidth,
        borderTopWidth: resolvedBorderTopWidth,
        borderRightWidth: resolvedBorderRightWidth,
        borderBottomWidth: resolvedBorderBottomWidth,
        borderLeftWidth: resolvedBorderLeftWidth,
        borderColor: resolvedBorderColor,
        borderCurve: resolvedBorderCurve,
        backgroundColor: resolvedBackgroundColor,
        backfaceVisibility: resolvedBackfaceVisibility,
        outlineColor: resolvedOutlineColor,
        outlineOffset: resolvedOutlineOffset,
        outlineStyle: resolvedOutlineStyle,
        outlineWidth: resolvedOutlineWidth,
        pointerEvents: resolvedPointerEvents,
        overflow: resolvedOverflow,
      };
    },
  };
});
