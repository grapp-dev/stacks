export type breakpoints = {
  tablet: float,
  desktop: float,
}

export type context = {
  debug: bool,
  spacing: float,
  breakpoints: breakpoints,
}

export type breakpoint = [#mobile | #tablet | #desktop]
export type stretch = [#stretch]
export type axisX = [#left | #center | #right]
export type axisY = [#top | #center | #bottom]
export type space = [#between | #around | #evenly]
export type direction = [#row | #rowReverse | #column | #columnReverse]
export type wrap = [#wrap | #nowrap]

@genType.import("./Stacks_types")
export type flex = [
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
export type normalizedProp<'a> = ('a, 'a, 'a)
export type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
}
export type spacingHelpers = {
  multiply: (. float) => float,
  divide: (. float) => float,
}

export type pointerEvents = [
  | #auto
  | #none
  | @genType.as("box-none")
  #boxNone
  | @genType.as("box-only")
  #boxOnly
]
export type accessibilityComponentType = [
  | #none
  | #button
  | #radiobutton_checked
  | #radiobutton_unchecked
]
export type accessibilityLiveRegion = [#none | #polite | #assertive]
export type accessibilityRole = [
  | #none
  | #button
  | #link
  | #search
  | #image
  | #keyboardkey
  | #text
  | #adjustable
  | #header
  | #summary
  | #imagebutton
  | #article
  | #banner
  | #complementary
  | #contentinfo
  | #form
  | #list
  | #listitem
  | #main
  | #navigation
  | #region
]

// @genType.import("./Stacks_types")
export type importantForAccessibility = [
  | #auto
  | #yes
  | #no
  | @genType.as("no-hide-descendants")
  #noHideDescendants
]
