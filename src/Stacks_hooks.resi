open Stacks_types

export useStacks: unit => context
export useWindowDimensions: unit => ReactNative.Dimensions.displayMetrics
export useSpacing: option<float> => float
export useSpacingHelpers: unit => spacingHelpers
export useCurrentBreakpoint: unit => breakpoint
export useDebugStyle: unit => option<ReactNative.Style.t>
export useResponsiveProp: (unit, . option<responsiveProp<'a>>) => option<'a>
let useResponsiveProp2: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
) => (option<'a>, option<'b>)
let useResponsiveProp3: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
  option<responsiveProp<'c>>,
) => (option<'a>, option<'b>, option<'c>)
let useResponsiveProp4: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
  option<responsiveProp<'c>>,
  option<responsiveProp<'d>>,
) => (option<'a>, option<'b>, option<'c>, option<'d>)
let useResponsiveProp5: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
  option<responsiveProp<'c>>,
  option<responsiveProp<'d>>,
  option<responsiveProp<'e>>,
) => (option<'a>, option<'b>, option<'c>, option<'d>, option<'e>)
let useResponsiveProp6: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
  option<responsiveProp<'c>>,
  option<responsiveProp<'d>>,
  option<responsiveProp<'e>>,
  option<responsiveProp<'f>>,
) => (option<'a>, option<'b>, option<'c>, option<'d>, option<'e>, option<'f>)
let useResponsiveProp7: (
  option<responsiveProp<'a>>,
  option<responsiveProp<'b>>,
  option<responsiveProp<'c>>,
  option<responsiveProp<'d>>,
  option<responsiveProp<'e>>,
  option<responsiveProp<'f>>,
  option<responsiveProp<'g>>,
) => (option<'a>, option<'b>, option<'c>, option<'d>, option<'e>, option<'f>, option<'g>)
