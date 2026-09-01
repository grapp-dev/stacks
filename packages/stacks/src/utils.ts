import * as React from 'react';
import type { DimensionValue } from 'react-native';
import { UnistylesRuntime, type UnistylesThemes } from 'react-native-unistyles';

import type { Alignment, Breakpoint, Color, Direction, Flex, ResponsiveProp, StacksConfig, Wrap } from './types';

type Number<T> = T extends number ? number : T;
type BooleanMap<True = unknown, False = unknown> = { true?: True; false?: False };
type Boolean<T> = T extends BooleanMap<infer True, infer False> ? False | True : never;

const dual: {
  <DataLast extends (...args: Array<any>) => any, DataFirst extends (...args: Array<any>) => any>(
    arity: Parameters<DataFirst>['length'],
    body: DataFirst,
  ): DataLast & DataFirst;
  <DataLast extends (...args: Array<any>) => any, DataFirst extends (...args: Array<any>) => any>(
    isDataFirst: (args: IArguments) => boolean,
    body: DataFirst,
  ): DataLast & DataFirst;
  // biome-ignore lint/complexity/useArrowFunction: ignore
} = function (arity, body) {
  if (typeof arity === 'function') {
    return function (this: any) {
      // biome-ignore lint/complexity/noArguments: ignore
      return arity(arguments) ? body.apply(this, arguments as any) : (((self: any) => body(self, ...arguments)) as any);
    };
  }

  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);

    case 2:
      return function (a, b) {
        // biome-ignore lint/complexity/noArguments: ignore
        if (arguments.length >= 2) {
          return body(a, b);
        }
        // biome-ignore lint/complexity/useArrowFunction: ignore
        return function (self: any) {
          return body(self, a);
        };
      };

    case 3:
      return function (a, b, c) {
        // biome-ignore lint/complexity/noArguments: ignore
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        // biome-ignore lint/complexity/useArrowFunction: ignore
        return function (self: any) {
          return body(self, a, b);
        };
      };

    default:
      return function () {
        // biome-ignore lint/complexity/noArguments: ignore
        if (arguments.length >= arity) {
          // @ts-expect-error
          // biome-ignore lint/complexity/noArguments: ignore
          return body.apply(this, arguments);
        }
        // biome-ignore lint/complexity/noArguments: ignore
        const args = arguments;
        // biome-ignore lint/complexity/useArrowFunction: ignore
        return function (self: any) {
          return body(self, ...args);
        };
      };
  }
};

export const flattenChildren = (children: React.ReactNode): ReturnType<typeof React.Children.toArray> => {
  return React.Children.toArray(children).reduce(
    (acc: ReturnType<typeof React.Children.toArray>, child) => {
      if (React.isValidElement<React.PropsWithChildren>(child) && child.type === React.Fragment) {
        return acc.concat(flattenChildren(child.props.children));
      }
      acc.push(child);
      return acc;
    },
    [] as ReturnType<typeof React.Children.toArray>,
  );
};

const reduceWithIndex = <A, B>(arr: readonly A[], initialValue: B, fn: (acc: B, element: A, index: number) => B): B => {
  let e = initialValue;

  for (let t = 0, v = arr.length; t < v; ++t) {
    e = fn(e, arr[t] as A, t);
  }

  return e;
};

export const intersperse = <A>(arr: readonly A[], delimiter: A) => {
  return reduceWithIndex(arr, [] as A[], (acc, element, index) => {
    if (((arr.length - 1) | 0) === index) {
      acc.push(element);
    } else {
      acc.push(element, delimiter);
    }
    return acc;
  });
};

const normalizeResponsiveProp = <T>(responsiveProp: ResponsiveProp<T>): readonly T[] => {
  if (typeof responsiveProp === 'string' || typeof responsiveProp === 'number' || typeof responsiveProp === 'boolean') {
    return [responsiveProp];
  }

  if (responsiveProp && Array.isArray(responsiveProp) && responsiveProp.length > 0) {
    return responsiveProp;
  }

  if (__DEV__) {
    // biome-ignore lint/suspicious/noConsole: warn about invalid layout input in development
    console.warn(`Invalid ResponsiveProp: ${JSON.stringify(responsiveProp)}`);
  }

  return [];
};

const getResponsiveValue = dual<
  (index: number) => <T>(responsiveProp?: ResponsiveProp<T>) => T | undefined,
  <T>(responsiveProp: ResponsiveProp<T> | undefined, index: number) => T | undefined
>(2, <T>(responsiveProp: ResponsiveProp<T> | undefined, index: number) => {
  if (typeof responsiveProp === 'undefined') {
    return undefined;
  }

  const normalized = normalizeResponsiveProp(responsiveProp);
  const last = normalized[normalized.length - 1];

  return normalized[index] ?? last;
});

const resolveWithBreakpointEntries = <T>(mapFn: (breakpoints: readonly [string, number][]) => T) => {
  const breakpoints = Object.entries(UnistylesRuntime.breakpoints).sort(([, first], [, second]) => {
    return first - second;
  });
  return mapFn(breakpoints);
};

const resolveWithBreakpointKeys = <T>(mapFn: (key: Breakpoint, index: number) => [Breakpoint, T]) => {
  return resolveWithBreakpointEntries((breakpoints) => {
    const keys = breakpoints.map(([key]) => {
      return key as Breakpoint;
    });

    return Object.fromEntries(keys.map(mapFn)) as Partial<Record<Breakpoint, T>>;
  });
};

const resolveWithBreakpointMap = <T>(mapFn: (key: Breakpoint, index: number) => T) => {
  return resolveWithBreakpointKeys((key, index) => {
    return [key, mapFn(key, index)];
  });
};

const resolveResponsiveValue = <In, Out>(
  responsiveProp: ResponsiveProp<In> | undefined,
  transform: (value: In) => Out,
) => {
  if (typeof responsiveProp === 'undefined') {
    return undefined;
  }

  return resolveWithBreakpointMap((_key, index) => {
    const value = getResponsiveValue(responsiveProp, index);
    return transform(value as In);
  });
};

export function resolveResponsiveStyle<Token extends PropertyKey, const To extends Partial<Record<Token, unknown>>>(
  responsiveProp: ResponsiveProp<Token>,
  to: To,
): Partial<Record<Breakpoint, Number<To[keyof To]> | undefined>>;
export function resolveResponsiveStyle<Token extends PropertyKey, const To extends Partial<Record<Token, unknown>>>(
  responsiveProp: ResponsiveProp<Token> | undefined,
  to: To,
): Partial<Record<Breakpoint, Number<To[keyof To]> | undefined>> | undefined;
export function resolveResponsiveStyle<const To extends BooleanMap>(
  responsiveProp: ResponsiveProp<boolean>,
  to: To,
): Partial<Record<Breakpoint, Boolean<To> | undefined>>;
export function resolveResponsiveStyle<const To extends BooleanMap>(
  responsiveProp: ResponsiveProp<boolean> | undefined,
  to: To,
): Partial<Record<Breakpoint, Boolean<To> | undefined>> | undefined;
export function resolveResponsiveStyle<Value>(
  responsiveProp: ResponsiveProp<Value>,
): Partial<Record<Breakpoint, Value>>;
export function resolveResponsiveStyle<Value>(
  responsiveProp: ResponsiveProp<Value> | undefined,
): Partial<Record<Breakpoint, Value>> | undefined;

export function resolveResponsiveStyle(
  responsiveProp: ResponsiveProp<unknown> | undefined,
  to?: Partial<Record<PropertyKey, unknown>>,
) {
  const resolved = resolveResponsiveValue(responsiveProp, (value) => {
    return to ? to[String(value) as PropertyKey] : value;
  });

  if (resolved && to) {
    return Object.entries(resolved).reduce<Record<PropertyKey, unknown>>((result, [breakpoint, value]) => {
      if (isObject(value)) {
        return Object.entries(value).reduce((result, [key, propValue]) => {
          const value = Object.assign(isObject(result[key]) ? result[key] : {}, {
            [breakpoint]: propValue,
          });

          return Object.assign(result, {
            [key]: value,
          });
        }, result);
      }

      return Object.assign(result, {
        [breakpoint]: value,
      });
    }, {});
  }

  return resolved;
}

export function resolveResponsiveProp<const To extends Record<PropertyKey, unknown>>(
  responsiveProp: ResponsiveProp<keyof To> | undefined,
  to: To,
): To[keyof To] | undefined;
export function resolveResponsiveProp<T>(responsiveProp: ResponsiveProp<T>): T | undefined;
export function resolveResponsiveProp<T>(responsiveProp: ResponsiveProp<T> | undefined): T | undefined;
export function resolveResponsiveProp<T>(
  responsiveProp: ResponsiveProp<T> | undefined,
  to?: Record<PropertyKey, unknown>,
) {
  if (typeof responsiveProp === 'undefined') {
    return undefined;
  }

  return resolveWithBreakpointEntries((breakpoints) => {
    const index = breakpoints.findIndex(([breakpoint]) => {
      return breakpoint === UnistylesRuntime.breakpoint;
    });
    const value = getResponsiveValue(responsiveProp, index);
    return to && value !== undefined ? to[value as keyof typeof to] : value;
  });
}

type CollapseOptions<T> = {
  collapseBelow?: Breakpoint;
  expanded: T;
  collapsed: T;
};

type CollapsedResponsivePropOptions<T> = {
  collapseBelow?: Breakpoint;
  expanded?: ResponsiveProp<T>;
  collapsed?: ResponsiveProp<T>;
};

type Theme = UnistylesThemes[keyof UnistylesThemes] & {
  stacks: StacksConfig;
};

type AlignmentOptions = {
  alignX?: ResponsiveProp<Alignment>;
  alignY?: ResponsiveProp<Alignment>;
  direction?: ResponsiveProp<Direction>;
  horizontal?: ResponsiveProp<boolean>;
  collapseBelow?: Breakpoint;
};

type FlexSizingOptions = {
  flex?: ResponsiveProp<Flex>;
  direction?: ResponsiveProp<Direction>;
  width?: ResponsiveProp<DimensionValue>;
  height?: ResponsiveProp<DimensionValue>;
};

type FlexDirectionOptions = {
  direction?: ResponsiveProp<Direction>;
  reverse?: ResponsiveProp<boolean>;
};

const isBreakpointBelow = (currentBreakpoint: Breakpoint, breakpoint?: Breakpoint) => {
  if (breakpoint === undefined) {
    return false;
  }

  const currentValue = UnistylesRuntime.breakpoints[currentBreakpoint];
  const breakpointValue = UnistylesRuntime.breakpoints[breakpoint];

  return typeof currentValue === 'number' && typeof breakpointValue === 'number' && currentValue < breakpointValue;
};

export const resolveCollapse = <T>(options: CollapseOptions<T>) => {
  const { collapseBelow, expanded, collapsed } = options;

  return resolveWithBreakpointMap((key) => {
    return isBreakpointBelow(key, collapseBelow) ? collapsed : expanded;
  });
};

export const resolveResponsiveStyleByCollapse = <T>(options: CollapsedResponsivePropOptions<T>) => {
  const { collapseBelow, expanded, collapsed } = options;

  return resolveWithBreakpointMap((key, index) => {
    const responsiveProp = isBreakpointBelow(key, collapseBelow) ? collapsed : expanded;
    return getResponsiveValue(responsiveProp, index);
  });
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
};

const CSS_VARIABLE = /^var\((--[^),]+)\)$/;

const resolveThemeString = (value: unknown) => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const match = CSS_VARIABLE.exec(value.trim());

  if (match) {
    // @ts-expect-error: ignore
    if (typeof document === 'undefined') {
      return undefined;
    }
    // @ts-expect-error: ignore
    return getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim();
  }

  return value;
};

const getColorPalette = (theme: Theme): Record<string, unknown> | undefined => {
  const paletteKey = resolveThemeString(theme.stacks.colorPaletteKey);
  const palette = paletteKey ? theme[paletteKey as keyof Theme] : undefined;

  return isObject(palette) ? palette : undefined;
};

export const resolveColor = (theme: Theme) => {
  return (color?: ResponsiveProp<Color>) => {
    const palette: Record<string, unknown> | undefined = getColorPalette(theme);

    return resolveResponsiveValue(color, (value) => {
      if (typeof value !== 'string') {
        return value;
      }

      const resolvedValue = palette?.[value];

      if (typeof resolvedValue === 'string') {
        return resolvedValue;
      }

      return value;
    });
  };
};

export function mapResponsiveStyle<In, Out>(
  responsiveProp: Partial<Record<Breakpoint, In | undefined>>,
  transform: (value: In) => Out,
): Partial<Record<Breakpoint, Out | undefined>>;
export function mapResponsiveStyle<In, Out>(
  responsiveProp: Partial<Record<Breakpoint, In | undefined>> | undefined,
  transform: (value: In) => Out,
): Partial<Record<Breakpoint, Out>> | undefined;

export function mapResponsiveStyle<In, Out>(
  responsiveProp: Partial<Record<Breakpoint, In | undefined>> | undefined,
  transform: (value: In) => Out,
) {
  if (responsiveProp === undefined) {
    return undefined;
  }

  return resolveWithBreakpointMap((key) => {
    const value = responsiveProp[key];
    return value === undefined ? undefined : transform(value);
  });
}

const makeResponsiveStyleResolver = <In, Out = In>(transform: (value: In) => Out) => {
  return (value?: ResponsiveProp<In>) => {
    return mapResponsiveStyle(resolveResponsiveStyle(value), transform);
  };
};

export const resolveGap = (theme: Theme) => {
  return makeResponsiveStyleResolver(theme.stacks.gap);
};

export const resolveMargin = (theme: Theme) => {
  return makeResponsiveStyleResolver(theme.stacks.margin);
};

export const resolvePadding = (theme: Theme) => {
  return makeResponsiveStyleResolver(theme.stacks.padding);
};

export const resolveNegativeGap = (theme: Theme) => {
  return makeResponsiveStyleResolver<number>((value) => {
    return theme.stacks.gap(value) * -1;
  });
};

export const resolveBorderRadius = (theme: Theme) => {
  return makeResponsiveStyleResolver(theme.stacks.borderRadius);
};

const isColumnDirection = (direction?: Direction) => {
  return direction === undefined || direction === 'column' || direction === 'column-reverse';
};

const reverseDirection = (direction?: Direction) => {
  switch (direction) {
    case 'row':
      return 'row-reverse';
    case 'row-reverse':
      return 'row';
    case 'column-reverse':
      return 'column';
    default:
      return 'column-reverse';
  }
};

const alignItemsMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  stretch: 'stretch',
  top: 'flex-start',
  bottom: 'flex-end',
} as const;

const justifyContentMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  top: 'flex-start',
  bottom: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const;

const flexBasisMap = {
  content: 'auto',
  fluid: '0%',
  '1/2': '50%',
  '1/3': '33.3333%',
  '1/4': '25%',
  '2/3': '66.6667%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
} as const;

const wrapMap = {
  wrap: 'wrap',
  'no-wrap': 'nowrap',
  'wrap-reverse': 'wrap-reverse',
} as const;

export const resolveFlexWrap = (wrap?: ResponsiveProp<Wrap>) => {
  return resolveResponsiveStyle(wrap, wrapMap);
};

export const resolveFlexAlignment = (options: AlignmentOptions) => {
  const { alignX, alignY, direction, horizontal, collapseBelow } = options;

  return {
    alignItems: resolveWithBreakpointMap((key, index) => {
      const getValue = getResponsiveValue(index);
      const currentDirection = isBreakpointBelow(key, collapseBelow)
        ? 'column'
        : (getValue(direction) ?? (getValue(horizontal) ? 'row' : undefined));
      const value = isColumnDirection(currentDirection) ? getValue(alignX) : getValue(alignY);

      return alignItemsMap[value as keyof typeof alignItemsMap];
    }),
    justifyContent: resolveWithBreakpointMap((key, index) => {
      const getValue = getResponsiveValue(index);
      const currentDirection = isBreakpointBelow(key, collapseBelow)
        ? 'column'
        : (getValue(direction) ?? (getValue(horizontal) ? 'row' : undefined));
      const value = isColumnDirection(currentDirection) ? getValue(alignY) : getValue(alignX);

      return justifyContentMap[value as keyof typeof justifyContentMap];
    }),
  };
};

const resolveFlexValue = (options: FlexSizingOptions, index: number) => {
  const { flex, direction, width, height } = options;
  const getValue = getResponsiveValue(index);
  const currentDirection = getValue(direction);
  const hasFixedMainAxisSize = isColumnDirection(currentDirection)
    ? getValue(height) !== undefined
    : getValue(width) !== undefined;

  return hasFixedMainAxisSize ? 'content' : getResponsiveValue(flex, index);
};

export const resolveFlexBasis = (columns?: ResponsiveProp<number>) => {
  return resolveWithBreakpointMap((_key, index) => {
    const value = Math.max(getResponsiveValue(columns, index) ?? 1, 1);
    return `${100 / value}%` as DimensionValue;
  });
};

export const resolveFlexSizing = (options: FlexSizingOptions) => {
  return {
    flexBasis: resolveWithBreakpointMap((_key, index) => {
      const value = resolveFlexValue(options, index);
      return value === undefined ? undefined : flexBasisMap[value];
    }),
    flexGrow: resolveWithBreakpointMap((_key, index) => {
      const value = resolveFlexValue(options, index);
      return value === 'fluid' ? 1 : value === undefined ? undefined : 0;
    }),
    flexShrink: resolveWithBreakpointMap((_key, index) => {
      const value = resolveFlexValue(options, index);
      return value === 'fluid' ? 0 : undefined;
    }),
  };
};

export const resolveFlexDirection = (options: FlexDirectionOptions) => {
  const { direction, reverse } = options;

  if (reverse === undefined) {
    return resolveResponsiveStyle(direction);
  }

  return resolveWithBreakpointMap((_key, index) => {
    const currentDirection = getResponsiveValue(direction, index);
    const currentReverse = getResponsiveValue(reverse, index);

    return currentReverse ? reverseDirection(currentDirection) : currentDirection;
  });
};
