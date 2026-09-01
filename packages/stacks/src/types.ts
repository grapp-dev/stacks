import type { UnistylesBreakpoints } from 'react-native-unistyles';

export type Breakpoint = keyof UnistylesBreakpoints;
// biome-ignore lint/suspicious/noEmptyInterface: augmented by design-system consumers
export interface StacksColorPalette {}
// biome-ignore lint/suspicious/noEmptyInterface: augmented by design-system consumers
export interface StacksBorderRadius {}
// biome-ignore lint/suspicious/noEmptyInterface: augmented by design-system consumers
export interface StacksGap {}
// biome-ignore lint/suspicious/noEmptyInterface: augmented by design-system consumers
export interface StacksMargin {}
// biome-ignore lint/suspicious/noEmptyInterface: augmented by design-system consumers
export interface StacksPadding {}

type AnyString = string & {};
type AnyNumber = number & {};

export type StacksConfig = {
  colorPaletteKey?: string;
  gap: (value?: Gap) => number;
  borderRadius: (value?: BorderRadius) => number;
  margin: (value?: Margin) => number;
  padding: (value?: Padding) => number;
};

export type AxisX = 'left' | 'center' | 'right';
export type AxisY = 'top' | 'center' | 'bottom';
export type Stretch = 'stretch';
export type Space = 'between' | 'around' | 'evenly';
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = 'wrap' | 'no-wrap' | 'wrap-reverse';
export type PointerEvent = 'auto' | 'box-none' | 'box-only' | 'none';
export type Overflow = 'visible' | 'hidden';
export type BackfaceVisibility = 'visible' | 'hidden';
export type OutlineStyle = 'solid' | 'dotted' | 'dashed';
export type BorderCurve = 'circular' | 'continuous';

export type Flex = 'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5';
export type Alignment = AxisX | AxisY | Space | Stretch;
export type Color = keyof StacksColorPalette | AnyString;
export type BorderRadius = keyof StacksBorderRadius | AnyNumber;
export type Gap = keyof StacksGap | AnyNumber;
export type Margin = keyof StacksMargin | AnyNumber;
export type Padding = keyof StacksPadding | AnyNumber;

export type ResponsiveProp<T> = T | readonly T[];
