@gentype
type breakpoints = {
  tablet: float,
  desktop: float,
}

@gentype
type context = {
  debug: bool,
  spacing: float,
  breakpoints: breakpoints,
  dimensions: ReactNative.Dimensions.displayMetrics,
}

@gentype
type breakpoint = [#mobile | #tablet | #desktop]
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
  | @genType.as("row-reverse") #rowReverse
  | #column
  | @genType.as("column-reverse") #columnReverse
]
@gentype
type wrap = [#wrap | #nowrap]

@genType.import("./Stacks_types")
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

@genType.import("./Stacks_types")
type responsiveProp<'a> = array<'a>
@genType.import("./Stacks_types")
type normalizedProp<'a> = ('a, 'a, 'a)

type resolveResponsiveProp<'a> = option<responsiveProp<'a>> => option<'a>
external wrap: 'a => resolveResponsiveProp<'b> = "%identity"

@gentype
type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
}

@gentype
type spacingHelpers = {
  multiply: (. float) => float,
  divide: (. float) => float,
}

@gentype
type pointerEvents = [
  | #auto
  | #none
  | @genType.as("box-none") #boxNone
  | @genType.as("box-only") #boxOnly
]

@gentype
type importantForAccessibility = [
  | #auto
  | #yes
  | #no
  | @genType.as("no-hide-descendants") #noHideDescendants
]
