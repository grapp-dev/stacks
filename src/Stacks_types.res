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
export type flex = [
  | #content
  | #fluid
  | @genType.as("1/2")
  #x12
  | @genType.as("1/3")
  #x13
  | @genType.as("2/3")
  #x23
  | @genType.as("1/4")
  #x14
  | @genType.as("3/4")
  #x34
  | @genType.as("1/5")
  #x15
  | @genType.as("2/5")
  #x25
  | @genType.as("3/5")
  #x35
  | @genType.as("4/5")
  #x45
]

@genType.import("./Stacks_types")
type responsiveProp<'a> = array<'a>
export type normalizedProp<'a> = ('a, 'a, 'a)
export type collapsibleProps = {
  direction: direction,
  isCollapsed: bool,
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
export type importantForAccessibility = [
  | #auto
  | #yes
  | #no
  | @genType.as("no-hide-descendants")
  #noHideDescendants
]
