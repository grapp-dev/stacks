@genType.as("Breakpoints")
type breakpoints = {
  tablet: float,
  desktop: float,
}

@genType.as("Context")
type context = {
  debug: bool,
  spacing: float,
  breakpoints: breakpoints,
}

type breakpoint = [#mobile | #tablet | #desktop]
type stretch = [#stretch]
type axisX = [#left | #center | #right]
type axisY = [#top | #center | #bottom]
type space = [#between | #around | #evenly]
type direction = [#row | #rowReverse | #column | #columnReverse]
type wrap = [#wrap | #nowrap]

type width = [
  | #content
  | #fluid
  | #width12
  | #width13
  | #width23
  | #width14
  | #width34
  | #width15
  | #width25
  | #width35
  | #width45
]

@genType.as("ResponsiveProp")
type responsiveProp<'a> = array<'a>
type normalizedProp<'a> = ('a, 'a, 'a)
type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
}
