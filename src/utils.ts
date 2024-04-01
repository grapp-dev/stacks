import * as React from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

import { Breakpoint, Direction, ResponsiveProp } from './types';

type ResolveResponsiveProp = {
  <T>(responsiveProp: ResponsiveProp<T>): T;
  <T>(responsiveProp: ResponsiveProp<T> | undefined): T | undefined;
};

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

  console.warn(`invalid responsive prop: ${JSON.stringify(responsiveProp)}`);

  return [];
};

export const resolveResponsiveProp: ResolveResponsiveProp = <T>(
  responsiveProp: ResponsiveProp<T> | undefined,
) => {
  const breakpoints = getBreakpoints();
  const currentWidth = UnistylesRuntime.screen.width;

  if (responsiveProp !== undefined) {
    const normalizedResponsiveProp = normalizeResponsiveProp(responsiveProp);

    const defaultValue = normalizedResponsiveProp[0];

    if (normalizedResponsiveProp.length === 1) {
      return defaultValue;
    }

    const index = breakpoints.findIndex(breakpoint => {
      return currentWidth > breakpoint[1];
    });

    if (index > -1) {
      const lastIndex = breakpoints.length - 1;

      return (
        normalizedResponsiveProp[(lastIndex - index) | 0] ??
        normalizedResponsiveProp[normalizedResponsiveProp.length - 1] ??
        defaultValue
      );
    }
  }

  return undefined;
};

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

export const negate = (value: ResponsiveProp<number> | undefined) => {
  if (typeof value === 'number') {
    return [value * -1];
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

export const getBreakpoints = () => {
  return Object.entries(UnistylesRuntime.breakpoints).sort((a, b) => {
    return (b[1] - a[1]) | 0;
  }) as unknown as readonly (readonly [Breakpoint, number])[];
};

const compareBreakpoints = (
  mapFn: (currentBreakpointIndex: number, breakpointIndex: number) => boolean,
) => {
  return (breakpoint: Breakpoint | undefined) => {
    if (breakpoint) {
      const breakpoints = getBreakpoints();
      const currentBreakpointIndex = breakpoints.findIndex(value => {
        return value[0] === UnistylesRuntime.breakpoint;
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
