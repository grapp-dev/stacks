import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import type { AxisX, AxisY, Breakpoint, Flex, ResponsiveProp, Space } from '../types';
import { mapResponsiveStyle, resolveCollapse, resolveFlexAlignment, resolveResponsiveStyleByCollapse } from '../utils';
import { Box } from './Box';
import { Column, isColumnType } from './Column';

type BoxProps = Omit<React.ComponentProps<typeof Box>, 'alignX' | 'alignY' | 'direction' | 'gap' | 'gapX' | 'gapY'>;
type ColumnElement = React.ReactElement<ColumnProps, typeof Column>;
type ColumnProps = React.ComponentProps<typeof Column>;

type ColumnsProps = {
  readonly children?: ColumnElement | readonly ColumnElement[];
  readonly gap?: ResponsiveProp<number>;
  readonly defaultFlex?: ResponsiveProp<Flex>;
  readonly alignX?: ResponsiveProp<AxisX | Space>;
  readonly alignY?: ResponsiveProp<AxisY>;
  readonly collapseBelow?: Breakpoint;
};

type Props = BoxProps & ColumnsProps;

const getColumnProps = (child: React.ReactNode) => {
  if (React.isValidElement<ColumnProps>(child) && isColumnType(child.type)) {
    return child.props;
  }

  return undefined;
};

const resolveColumnFlex = (props: ColumnProps, defaultFlex: ResponsiveProp<Flex>) => {
  return props.width === undefined ? (props.flex ?? defaultFlex) : 'content';
};

export const Columns = (props: Props) => {
  const { children, gap, defaultFlex = 'fluid', alignX, alignY, collapseBelow, style, ...rest } = props;

  return (
    <Box {...rest} style={[style, styles.from({ alignX, alignY, collapseBelow, gap }) as ViewStyle]}>
      {React.Children.map(children as React.ReactNode, (child) => {
        const columnProps = getColumnProps(child);

        if (columnProps === undefined) {
          throw new Error('Columns accepts only Column components as direct children.');
        }

        if (React.isValidElement<ColumnProps>(child) && child.type !== Column) {
          return React.cloneElement(child, {
            flex: resolveColumnFlex(columnProps, defaultFlex),
            style: [styles.column, columnProps.style, styles.item({ collapseBelow, gap }) as ViewStyle],
          });
        }

        const { children, flex, style, ...rest } = columnProps;

        return (
          <Box
            {...rest}
            flex={resolveColumnFlex(columnProps, defaultFlex)}
            style={[styles.column, style, styles.item({ collapseBelow, gap }) as ViewStyle]}
          >
            {children}
          </Box>
        );
      })}
    </Box>
  );
};

Columns.displayName = 'Columns';

const styles = StyleSheet.create((theme) => {
  return {
    from: (props: ColumnsProps) => {
      const { alignX, alignY, collapseBelow, gap } = props;
      const { alignItems, justifyContent } = resolveFlexAlignment({
        alignX,
        alignY,
        direction: 'row',
        collapseBelow,
      });
      const collapsedGap = resolveResponsiveStyleByCollapse({
        collapseBelow,
        collapsed: gap,
      });
      const expandedGap = resolveResponsiveStyleByCollapse({
        collapseBelow,
        expanded: gap,
      });
      const scaledCollapsedGap = mapResponsiveStyle(collapsedGap, theme.stacks.gap);
      const scaledExpandedNegativeGap = mapResponsiveStyle(expandedGap, (value) => {
        return theme.stacks.gap(value) * -1;
      });

      return {
        flexDirection: resolveCollapse({
          collapseBelow,
          expanded: 'row',
          collapsed: 'column',
        }),
        gap: scaledCollapsedGap,
        marginEnd: scaledExpandedNegativeGap,
        alignItems,
        justifyContent,
      };
    },
    item: (style: Pick<ColumnsProps, 'collapseBelow' | 'gap'>) => {
      const { collapseBelow, gap } = style;
      const expandedGap = resolveResponsiveStyleByCollapse({
        collapseBelow,
        expanded: gap,
      });
      const scaledExpandedGap = mapResponsiveStyle(expandedGap, theme.stacks.gap);

      return {
        paddingEnd: scaledExpandedGap,
      };
    },
    column: {
      minWidth: 0,
    },
  };
});
