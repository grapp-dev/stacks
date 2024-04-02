import * as React from 'react';
import { DimensionValue, View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useDebugStyle, useResponsiveProp, useSpacingHelpers } from '../hooks';
import type { AxisX, AxisY, Direction, Flex, ResponsiveProp, Space, Stretch, Wrap } from '../types';
import { resolveDirectionAndReverse } from '../utils';

export type BoxProps = ViewProps & {
  readonly alignX?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
  readonly alignY?: ResponsiveProp<AxisX | AxisY | Space | Stretch>;
  readonly gap?: ResponsiveProp<number>;
  readonly rowGap?: ResponsiveProp<number>;
  readonly columnGap?: ResponsiveProp<number>;
  readonly padding?: ResponsiveProp<number>;
  readonly paddingX?: ResponsiveProp<number>;
  readonly paddingY?: ResponsiveProp<number>;
  readonly paddingTop?: ResponsiveProp<number>;
  readonly paddingBottom?: ResponsiveProp<number>;
  readonly paddingLeft?: ResponsiveProp<number>;
  readonly paddingRight?: ResponsiveProp<number>;
  readonly paddingEnd?: ResponsiveProp<number>;
  readonly paddingStart?: ResponsiveProp<number>;
  readonly margin?: ResponsiveProp<number>;
  readonly marginX?: ResponsiveProp<number>;
  readonly marginY?: ResponsiveProp<number>;
  readonly marginTop?: ResponsiveProp<number>;
  readonly marginBottom?: ResponsiveProp<number>;
  readonly marginLeft?: ResponsiveProp<number>;
  readonly marginRight?: ResponsiveProp<number>;
  readonly marginStart?: ResponsiveProp<number>;
  readonly marginEnd?: ResponsiveProp<number>;
  readonly direction?: ResponsiveProp<Direction>;
  readonly wrap?: ResponsiveProp<Wrap>;
  readonly flex?: ResponsiveProp<Flex>;
  readonly reverse?: ResponsiveProp<boolean>;
  readonly backgroundColor?: ResponsiveProp<string>;
  readonly borderRadius?: ResponsiveProp<number>;
  readonly borderTopLeftRadius?: ResponsiveProp<number>;
  readonly borderTopRightRadius?: ResponsiveProp<number>;
  readonly borderBottomLeftRadius?: ResponsiveProp<number>;
  readonly borderBottomRightRadius?: ResponsiveProp<number>;
  readonly width?: ResponsiveProp<DimensionValue>;
  readonly height?: ResponsiveProp<DimensionValue>;
};

export const Box = (props: BoxProps) => {
  const {
    children,
    alignX,
    alignY,
    gap,
    rowGap,
    columnGap,
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
    direction = 'column',
    wrap,
    flex,
    reverse,
    backgroundColor,
    width,
    height,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    style,
    ...rest
  } = props;

  const { multiply } = useSpacingHelpers();
  const debugStyle = useDebugStyle();
  const resolveResponsiveProp = useResponsiveProp();

  const reversed = resolveResponsiveProp(reverse);
  const flexDirection = resolveDirectionAndReverse(resolveResponsiveProp(direction), reversed);

  const isDirectionColumn = flexDirection === 'column' || flexDirection === 'column-reverse';
  const alignItems = resolveResponsiveProp(isDirectionColumn ? alignX : alignY);
  const justifyContent = resolveResponsiveProp(isDirectionColumn ? alignY : alignX);
  const defaultWidth = resolveResponsiveProp(width);
  const defaultHeight = resolveResponsiveProp(height);

  const flexWrap = resolveResponsiveProp(wrap);
  const flexBasis = resolveResponsiveProp(
    isDirectionColumn
      ? typeof defaultHeight === 'undefined'
        ? flex
        : 'content'
      : typeof defaultWidth === 'undefined'
        ? flex
        : 'content',
  );

  const { styles } = useStyles(stylesheet, {
    justifyContent,
    alignItems,
    flexBasis,
    flexWrap,
    flexDirection,
  });

  return (
    <View
      {...rest}
      style={[
        styles.root,
        {
          gap: multiply(resolveResponsiveProp(gap)),
          rowGap: multiply(resolveResponsiveProp(rowGap)),
          columnGap: multiply(resolveResponsiveProp(columnGap)),
          padding: multiply(resolveResponsiveProp(padding)),
          paddingHorizontal: multiply(resolveResponsiveProp(paddingX)),
          paddingVertical: multiply(resolveResponsiveProp(paddingY)),
          paddingTop: multiply(resolveResponsiveProp(paddingTop)),
          paddingBottom: multiply(resolveResponsiveProp(paddingBottom)),
          paddingLeft: multiply(resolveResponsiveProp(paddingLeft)),
          paddingRight: multiply(resolveResponsiveProp(paddingRight)),
          paddingEnd: multiply(resolveResponsiveProp(paddingEnd)),
          paddingStart: multiply(resolveResponsiveProp(paddingStart)),
          margin: multiply(resolveResponsiveProp(margin)),
          marginHorizontal: multiply(resolveResponsiveProp(marginX)),
          marginVertical: multiply(resolveResponsiveProp(marginY)),
          marginTop: multiply(resolveResponsiveProp(marginTop)),
          marginBottom: multiply(resolveResponsiveProp(marginBottom)),
          marginLeft: multiply(resolveResponsiveProp(marginLeft)),
          marginRight: multiply(resolveResponsiveProp(marginRight)),
          marginEnd: multiply(resolveResponsiveProp(marginEnd)),
          marginStart: multiply(resolveResponsiveProp(marginStart)),
          backgroundColor: resolveResponsiveProp(backgroundColor),
          width: defaultWidth,
          height: defaultHeight,
          borderRadius: resolveResponsiveProp(borderRadius),
          borderTopLeftRadius: resolveResponsiveProp(borderTopLeftRadius),
          borderTopRightRadius: resolveResponsiveProp(borderTopRightRadius),
          borderBottomLeftRadius: resolveResponsiveProp(borderBottomLeftRadius),
          borderBottomRightRadius: resolveResponsiveProp(borderBottomRightRadius),
        },
        debugStyle,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet({
  root: {
    variants: {
      alignItems: {
        left: {
          alignItems: 'flex-start',
        },
        center: {
          alignItems: 'center',
        },
        right: {
          alignItems: 'flex-end',
        },
        stretch: {
          alignItems: 'stretch',
        },
        top: {
          alignItems: 'flex-start',
        },
        bottom: {
          alignItems: 'flex-end',
        },
        between: undefined!,
        around: undefined!,
        evenly: undefined!,
      },
      justifyContent: {
        top: {
          justifyContent: 'flex-start',
        },
        center: {
          justifyContent: 'center',
        },
        bottom: {
          justifyContent: 'flex-end',
        },
        stretch: undefined!,
        left: {
          justifyContent: 'flex-start',
        },
        right: {
          justifyContent: 'flex-end',
        },
        between: {
          justifyContent: 'space-between',
        },
        around: {
          justifyContent: 'space-around',
        },
        evenly: {
          justifyContent: 'space-evenly',
        },
      },
      flexDirection: {
        row: {
          flexDirection: 'row',
        },
        ['row-reverse']: {
          flexDirection: 'row-reverse',
        },
        column: {
          flexDirection: 'column',
        },
        ['column-reverse']: {
          flexDirection: 'column-reverse',
        },
      },
      flexWrap: {
        wrap: {
          flexWrap: 'wrap',
        },
        ['no-wrap']: {
          flexWrap: 'nowrap',
        },
        ['wrap-reverse']: {
          flexWrap: 'wrap-reverse',
        },
      },
      flexBasis: {
        content: {
          flex: 0,
          flexBasis: 'auto',
        },
        fluid: {
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: '0%',
        },
        ['1/2']: {
          flexBasis: '50%',
        },
        ['1/3']: {
          flexBasis: '33.3333%',
        },
        ['1/4']: {
          flexBasis: '25%',
        },
        ['2/3']: {
          flexBasis: '66.6667%',
        },
        ['3/4']: {
          flexBasis: '75%',
        },
        ['1/5']: {
          flexBasis: '20%',
        },
        ['2/5']: {
          flexBasis: '40%',
        },
        ['3/5']: {
          flexBasis: '60%',
        },
        ['4/5']: {
          flexBasis: '80%',
        },
      },
    },
  },
});
