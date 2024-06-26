/* eslint-disable @typescript-eslint/no-empty-interface */
import { UnistylesBreakpoints } from 'react-native-unistyles';

export interface StacksBreakpoints {}

export type Breakpoint = keyof StacksBreakpoints | keyof UnistylesBreakpoints;
export type AxisX = 'left' | 'center' | 'right';
export type AxisY = 'top' | 'center' | 'bottom';
export type Stretch = 'stretch';
export type Space = 'between' | 'around' | 'evenly';
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = 'wrap' | 'no-wrap' | 'wrap-reverse';

export type Flex =
  | 'content'
  | 'fluid'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5';

export type ResponsiveProp<T> = T | readonly T[];
