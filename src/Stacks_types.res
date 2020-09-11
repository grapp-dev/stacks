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

type flex = [
  | #content
  | #fluid
  | #flex12
  | #flex13
  | #flex23
  | #flex14
  | #flex34
  | #flex15
  | #flex25
  | #flex35
  | #flex45
]

@genType.as("ResponsiveProp")
type responsiveProp<'a> = array<'a>
type normalizedProp<'a> = ('a, 'a, 'a)
type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
}
