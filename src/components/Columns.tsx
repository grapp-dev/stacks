import * as React from 'react';
import { Platform } from 'react-native';

import {
  useBreakpointComparators,
  useDebugStyle,
  useResponsiveProp,
  useSpacingHelpers,
} from '../hooks';
import type { AxisX, AxisY, Breakpoint, Flex, ResponsiveProp, Space } from '../types';
import { flattenChildren, negate } from '../utils';
import { Box } from './Box';
import { Column } from './Column';
import { FloatBox } from './FloatBox';

type BoxProps = Omit<
  React.ComponentProps<typeof Box>,
  'alignX' | 'alignY' | 'direction' | 'gap' | 'rowGap' | 'columnGap'
>;

export type ColumnProps = React.ComponentProps<typeof Column>;

export type ColumnsProps = BoxProps & {
  readonly space?: ResponsiveProp<number>;
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
  readonly collapseBelow?: Breakpoint;
};

const getColumnProps = (node: React.ReactNode): ColumnProps | null => {
  return node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this_is_fine.png
    node.type.__isColumn__
    ? (node.props as ColumnProps)
    : null;
};

const isColumnForwarded = (node: React.ReactNode): node is React.ReactElement => {
  return (
    node !== undefined &&
    node !== null &&
    typeof node === 'object' &&
    'type' in node &&
    // @ts-expect-error: this_is_fine.png
    node.type.__isColumnForwarded__ &&
    React.isValidElement(node)
  );
};

const resolveBleedOrInset = (
  values: readonly (ResponsiveProp<number> | undefined)[],
  space: ResponsiveProp<number> | undefined,
): ResponsiveProp<number> | undefined => {
  const value = values.find(value => {
    return typeof value !== 'undefined';
  });

  const isSpaceArray = space && Array.isArray(space);
  const isSpaceNumber = typeof space === 'number';
  const isValueArray = value && Array.isArray(value);
  const isValueNumber = typeof value === 'number';

  if (isSpaceNumber && isValueNumber) {
    return space + value;
  }

  if (isSpaceNumber && isValueArray) {
    const l = value.length;
    const xs = new Array(l);

    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] + space;
    }

    return xs;
  }

  if (isSpaceArray && isValueArray) {
    const l = value.length;
    const xs = new Array(l);

    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] + (space[i] ?? 0);
    }

    return xs;
  }

  return space;
};

type BackgroundProps = Pick<
  BoxProps,
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderRightWidth'
  | 'borderLeftWidth'
  | 'borderBottomWidth'
  | 'borderColor'
  | 'borderRadius'
  | 'borderTopRightRadius'
  | 'borderTopLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomLeftRadius'
> & {
  readonly color?: ResponsiveProp<string>;
  readonly left?: ResponsiveProp<number>;
  readonly right?: ResponsiveProp<number>;
};

const Background = (props: BackgroundProps) => {
  const {
    right,
    left,
    color,
    borderWidth,
    borderTopWidth,
    borderLeftWidth,
    borderBottomWidth,
    borderRightWidth,
    ...rest
  } = props;
  const { multiply } = useSpacingHelpers();
  const resolveResponsiveProp = useResponsiveProp();

  const backgroundColor = resolveResponsiveProp(color);
  const borderSize = resolveResponsiveProp(borderWidth);
  const borderTopSize = resolveResponsiveProp(borderTopWidth);
  const borderRightSize = resolveResponsiveProp(borderRightWidth);
  const borderBottomSize = resolveResponsiveProp(borderBottomWidth);
  const borderLeftSize = resolveResponsiveProp(borderLeftWidth);
  const offsetRight = resolveResponsiveProp(right);
  const offsetLeft = resolveResponsiveProp(left);
  const debugStyle = useDebugStyle();

  return backgroundColor || borderSize || debugStyle ? (
    <FloatBox
      {...rest}
      borderWidth={borderSize}
      borderTopWidth={borderTopSize}
      borderRightWidth={borderRightSize}
      borderBottomWidth={borderBottomSize}
      borderLeftWidth={borderLeftSize}
      offset={0}
      right={offsetRight ? multiply(offsetRight) : 0}
      left={offsetLeft ? multiply(offsetLeft) : 0}
      backgroundColor={backgroundColor}
      style={debugStyle}
    />
  ) : null;
};

type PrivateColumnProps = ColumnProps & {
  readonly gap?: ResponsiveProp<number>;
  readonly defaultFlex: ResponsiveProp<Flex>;
};

const PrivateColumn = (props: PrivateColumnProps) => {
  const {
    children,
    flex,
    padding,
    paddingRight,
    paddingEnd,
    paddingX,
    width,
    backgroundColor,
    gap,
    defaultFlex,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderColor,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    ...rest
  } = props;

  const inset = React.useMemo(() => {
    return resolveBleedOrInset([padding, paddingX, paddingRight, paddingEnd], gap);
  }, [padding, paddingX, paddingRight, paddingEnd, gap]);

  return (
    <Box
      {...rest}
      width={width}
      flex={width ? undefined : flex ?? defaultFlex}
      padding={padding}
      paddingX={paddingX}
      paddingRight={paddingRight}
      paddingEnd={inset}
      debuggable={false}
    >
      <Background
        color={backgroundColor}
        right={inset}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        borderTopWidth={borderTopWidth}
        borderRightWidth={borderRightWidth}
        borderBottomWidth={borderBottomWidth}
        borderLeftWidth={borderLeftWidth}
        borderColor={borderColor}
        borderTopRightRadius={borderTopRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
      />
      {children}
    </Box>
  );
};

export const Columns = (props: ColumnsProps) => {
  const {
    children,
    space = 0,
    defaultFlex = 'fluid',
    alignX,
    reverse,
    collapseBelow,
    margin,
    marginLeft,
    marginRight,
    marginX,
    marginStart,
    marginEnd,
    backgroundColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderColor,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    ...rest
  } = props;

  const breakpoint = useBreakpointComparators();
  const resolveResponsiveProp = useResponsiveProp();

  const isCollapsed = breakpoint.isBelow(collapseBelow);
  const direction = isCollapsed ? 'column' : 'row';
  const isReversed = resolveResponsiveProp(reverse);
  const isWeb = Platform.OS === 'web';

  const negativeSpace = isCollapsed ? undefined : negate(space);

  const bleedStart = React.useMemo(() => {
    return resolveBleedOrInset(
      [margin, marginX, marginLeft, marginStart],
      isReversed && !isWeb ? negativeSpace : undefined,
    );
  }, [isReversed, isWeb, space, margin, marginX, marginLeft, marginStart]);

  const bleedEnd = React.useMemo(() => {
    return resolveBleedOrInset(
      [margin, marginX, marginRight, marginEnd],
      isReversed && !isWeb ? undefined : negativeSpace,
    );
  }, [isReversed, isWeb, space, margin, marginX, marginRight, marginEnd]);

  const gap = isCollapsed ? undefined : space;

  const color = resolveResponsiveProp(backgroundColor);

  return (
    <Box
      {...rest}
      direction={direction}
      rowGap={isCollapsed ? space : undefined}
      alignX={alignX}
      reverse={isReversed}
      margin={margin}
      marginX={marginX}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginStart={bleedStart}
      marginEnd={bleedEnd}
      debuggable={false}
    >
      <Background
        color={color}
        right={negate(bleedEnd)}
        left={negate(bleedStart)}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        borderTopWidth={borderTopWidth}
        borderRightWidth={borderRightWidth}
        borderBottomWidth={borderBottomWidth}
        borderLeftWidth={borderLeftWidth}
        borderColor={borderColor}
        borderTopRightRadius={borderTopRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
      />
      {React.Children.map(flattenChildren(children), child => {
        if (isColumnForwarded(child)) {
          return <PrivateColumn {...child.props} gap={gap} defaultFlex={defaultFlex} />;
        }

        const props = getColumnProps(child);

        if (props) {
          return <PrivateColumn {...props} gap={gap} defaultFlex={defaultFlex} />;
        }

        return (
          <Box flex={defaultFlex} paddingEnd={gap} debuggable={false}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Columns.displayName = 'Columns';
