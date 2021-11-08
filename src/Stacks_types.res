@gentype
type breakpoint = (string, float)

@gentype
type breakpoints = array<breakpoint>

@gentype
type context = {
  debug: bool,
  spacing: float,
  breakpoints: breakpoints,
  dimensions: ReactNative.Dimensions.displayMetrics,
}

@gentype
type stretch = [#stretch]
@gentype
type axisX = [#left | #center | #right]
@gentype
type axisY = [#top | #center | #bottom]
@gentype
type space = [#between | #around | #evenly]
@gentype
type direction = [
  | #row
  | @gentype.as("row-reverse") #rowReverse
  | #column
  | @gentype.as("column-reverse") #columnReverse
]
@gentype
type wrap = [#wrap | #nowrap]

@gentype.import("./Stacks_types")
type flex = [
  | #content
  | #fluid
  | #x12
  | #x13
  | #x23
  | #x14
  | #x34
  | #x15
  | #x25
  | #x35
  | #x45
]

@gentype.import("./Stacks_types")
type responsiveProp<'a> = array<'a>

@gentype.import("./Stacks_types")
type resolveResponsiveProp<'a> = option<responsiveProp<'a>> => option<'a>

@gentype
type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
}

@gentype.import("./Stacks_types")
type spacingHelpers = {
  multiply: option<float> => option<float>,
  divide: option<float> => option<float>,
}

@gentype
type pointerEvents = [
  | #auto
  | #none
  | @gentype.as("box-none") #boxNone
  | @gentype.as("box-only") #boxOnly
]

@gentype
type importantForAccessibility = [
  | #auto
  | #yes
  | #no
  | @gentype.as("no-hide-descendants") #noHideDescendants
]
