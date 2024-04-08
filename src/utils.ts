import * as React from 'react';
import { UnistylesBreakpoints, UnistylesRuntime } from 'react-native-unistyles';

import { Breakpoint, Direction, ResponsiveProp } from './types';

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomColor = () => {
  const colors = `${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
  return `rgba(${colors}, 0.2)`;
};

export const flattenChildren = (
  children: React.ReactNode,
): ReturnType<typeof React.Children.toArray> => {
  return React.Children.toArray(children).reduce(
    (acc: ReturnType<typeof React.Children.toArray>, child) => {
      if (React.isValidElement(child) && child.type === React.Fragment) {
        return acc.concat(flattenChildren(child.props.children));
      }
      acc.push(child);
      return acc;
    },
    [] as ReturnType<typeof React.Children.toArray>,
  );
};

export const normalizeResponsiveProp = <T>(responsiveProp: ResponsiveProp<T>): readonly T[] => {
  if (
    typeof responsiveProp === 'string' ||
    typeof responsiveProp === 'number' ||
    typeof responsiveProp === 'boolean'
  ) {
    return [responsiveProp];
  }

  if (responsiveProp && Array.isArray(responsiveProp) && responsiveProp.length) {
    return responsiveProp;
  }

  console.warn(`[Stacks] invalid responsive prop: ${JSON.stringify(responsiveProp)}`);

  return [];
};

export function resolveResponsiveProp<T>(
  responsiveProp: ResponsiveProp<T>,
  breakpoint: Breakpoint,
): T;
export function resolveResponsiveProp<T>(
  responsiveProp: ResponsiveProp<T> | undefined,
  breakpoint: Breakpoint,
): T | undefined;

export function resolveResponsiveProp<T>(
  responsiveProp: ResponsiveProp<T> | undefined,
  currentBreakpoint: Breakpoint,
) {
  const breakpoints = getBreakpoints();

  if (responsiveProp !== undefined) {
    const normalizedResponsiveProp = normalizeResponsiveProp(responsiveProp);

    const defaultValue = normalizedResponsiveProp[0];

    if (normalizedResponsiveProp.length === 1) {
      return defaultValue;
    }

    const index = breakpoints.findIndex(breakpoint => {
      return currentBreakpoint === breakpoint[0];
    });

    if (index > -1) {
      const lastIndex = breakpoints.length - 1;

      return (
        normalizedResponsiveProp[(lastIndex - index) | 0] ??
        normalizedResponsiveProp[normalizedResponsiveProp.length - 1]
      );
    }
  }

  return undefined;
}

export const resolveDirectionAndReverse = (direction?: Direction, reversed?: boolean) => {
  switch (true) {
    case direction === 'row' && reversed:
      return 'row-reverse';
    case direction === 'row-reverse' && reversed:
      return 'row';
    case direction === 'column' && reversed:
      return 'column-reverse';
    case direction === 'column-reverse' && reversed:
      return 'column';
    default:
      return direction;
  }
};

export const negate = (
  value: ResponsiveProp<number> | undefined,
): ResponsiveProp<number> | undefined => {
  if (typeof value === 'number') {
    return value * -1;
  }

  if (value && Array.isArray(value)) {
    const l = value.length;
    const xs = new Array(l);

    for (let i = 0; i < l; ++i) {
      xs[i] = value[i] * -1;
    }

    return xs;
  }

  return undefined;
};

export const splitEvery = <T>(xs: readonly T[], r: number): readonly (readonly T[])[] => {
  if (r < 1 || xs.length <= r) {
    return [xs];
  }

  let current = 0;
  const result = [];

  while (current < xs.length) {
    const index = (current + r) | 0;
    result.push(xs.slice(current, index));
    current = index;
  }

  return result;
};

export const makeWithIndex = <T>(r: number, mapFn: (index: number) => T): readonly T[] => {
  if (r <= 0) {
    return [];
  }

  const result = new Array(r);

  for (let i = 0; i < r; ++i) {
    result[i] = mapFn(i);
  }

  return result;
};

const reduceWithIndex = <A, B>(
  arr: readonly A[],
  initialValue: B,
  fn: (acc: B, element: A, index: number) => B,
): B => {
  let e = initialValue;

  for (let t = 0, v = arr.length; t < v; ++t) {
    e = fn(e, arr[t], t);
  }

  return e;
};

export const intersperse = <A>(arr: readonly A[], delimiter: A) => {
  // eslint-disable-next-line functional/prefer-readonly-type
  return reduceWithIndex(arr, [] as A[], function (acc, element, index) {
    if (((arr.length - 1) | 0) === index) {
      acc.push(element);
    } else {
      acc.push(element, delimiter);
    }
    return acc;
  });
};

export const getBreakpoints = (): ReadonlyArray<
  readonly [keyof UnistylesBreakpoints, UnistylesBreakpoints[keyof UnistylesBreakpoints]]
> => {
  return Object.entries(UnistylesRuntime.breakpoints).sort((a, b) => {
    return (b[1] - a[1]) | 0;
  }) as unknown as readonly (readonly [Breakpoint, number])[];
};

const compareBreakpoints = (
  mapFn: (currentBreakpointIndex: number, breakpointIndex: number) => boolean,
) => {
  return (currentBreakpoint: Breakpoint, breakpoint: Breakpoint | undefined) => {
    if (breakpoint) {
      const breakpoints = getBreakpoints();
      const currentBreakpointIndex = breakpoints.findIndex(value => {
        return value[0] === currentBreakpoint;
      });

      if (currentBreakpointIndex > -1) {
        const boundBreakpointIndex = breakpoints.findIndex(value => {
          return value[0] === breakpoint;
        });

        if (boundBreakpointIndex > -1) {
          return mapFn(currentBreakpointIndex, boundBreakpointIndex);
        }
      }
    }

    return false;
  };
};

export const isBreakpointBelow = compareBreakpoints(
  (currentBreakpointIndex, boundBreakpointIndex) => {
    return currentBreakpointIndex > boundBreakpointIndex;
  },
);

export const isBreakpointAbove = compareBreakpoints(
  (currentBreakpointIndex, boundBreakpointIndex) => {
    return currentBreakpointIndex < boundBreakpointIndex;
  },
);
