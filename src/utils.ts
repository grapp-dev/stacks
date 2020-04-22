import { Children, useState, useEffect } from 'react'
import { StyleSheet, Dimensions, ScaledSize, Platform } from 'react-native'
import { make, pipe, share, publish, debounce, onPush } from 'wonka'

export type AxisX = 'left' | 'center' | 'right' | 'stretch'
export type AxisY = 'top' | 'center' | 'bottom' | 'stretch'
export type Space = 'between' | 'around' | 'evenly'
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
  | '4/5'
export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse'

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'
export type Breakpoints = {
  [key in Exclude<Breakpoint, 'mobile'>]: number
}
export type ResponsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>

interface Layout {
  window: ScaledSize
}

interface ResponsivePropOptions {
  breakpoints: Breakpoints
  width: number
}

interface CollapsibleOptions {
  currentBreakpoint: Breakpoint
  margin: number
  reverse?: boolean
  collapseBelow?: Exclude<Breakpoint, 'mobile'>
}

const dimensionsSource = pipe(
  make<Layout>(observer => {
    const { next } = observer
    const handleChange = (layout: Layout) => {
      next(layout)
    }

    Dimensions.addEventListener('change', handleChange)

    return () => {
      Dimensions.removeEventListener('change', handleChange)
    }
  }),
  share,
)

const isWidthGtFactory = (width: number) => (breakpoint: number) => width >= breakpoint
const whenReversedFactory = (reverse?: boolean) => <T, X>(reverseValue: T, value: X) =>
  reverse ? reverseValue : value
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const randomByte = () => randomNumber(0, 255)

const normalizeResponsiveProp = <T>(value: ResponsiveProp<T>): Readonly<[T, T, T]> => {
  if (typeof value === 'string' || typeof value === 'number') {
    return [value, value, value]
  }

  if ('length' in value) {
    const { length } = value

    if (length === 2) {
      const [mobileValue, tabletValue] = value
      return [mobileValue, tabletValue, tabletValue]
    }

    if (length === 3) {
      return value as Readonly<[T, T, T]>
    }

    if (length === 1) {
      const [mobileValue] = value
      return [mobileValue, mobileValue, mobileValue]
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`)
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`)
}

export const randomColor = () =>
  `rgba(${[randomByte(), randomByte(), randomByte(), 0.2].join(',')})`

export const lastFactory = (elements: React.ReactNode) => (index: number) =>
  index === Children.count(elements) - 1

export const splitEvery = <T>(n: number, list: T[]) => {
  const result = []
  let idx = 0
  while (idx < list.length) {
    result.push(list.slice(idx, (idx += n)))
  }
  return result
}

export const styles = StyleSheet.create({
  flexContent: {
    flex: 0,
    flexBasis: 'auto',
  },
  flexFluid: {
    flex: 1,
  },
  flexBasis12: {
    flexBasis: '50%',
  },
  flexBasis13: {
    flexBasis: '33%',
  },
  flexBasis23: {
    flexBasis: '66%',
  },
  flexBasis14: {
    flexBasis: '25%',
  },
  flexBasis34: {
    flexBasis: '75%',
  },
  flexBasis15: {
    flexBasis: '20%',
  },
  flexBasis25: {
    flexBasis: '40%',
  },
  flexBasis35: {
    flexBasis: '60%',
  },
  flexBasis45: {
    flexBasis: '80%',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  directionRow: {
    flexDirection: 'row',
  },
  directionRowReverse: {
    flexDirection: 'row-reverse',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  directionColumnReverse: {
    flexDirection: 'column-reverse',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  noWrap: {
    flexWrap: 'nowrap',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  shrink: {
    flexShrink: 1,
  },
  noMargin: {
    margin: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
  noMarginRight: {
    marginRight: 0,
  },
})

export const resolveAlign = (dir?: AxisX | AxisY) => {
  switch (dir) {
    case 'center':
      return styles.alignCenter
    case 'bottom':
    case 'right':
      return styles.alignEnd
    case 'top':
    case 'left':
      return styles.alignStart
    default:
      return styles.alignStretch
  }
}

export const resolveJustify = (dir?: AxisX | AxisY | Space) => {
  switch (dir) {
    case 'center':
      return styles.justifyCenter
    case 'bottom':
    case 'right':
      return styles.justifyEnd
    case 'around':
      return styles.justifySpaceAround
    case 'between':
      return styles.justifySpaceBetween
    case 'evenly':
      return styles.justifySpaceEvenly
    default:
      return styles.justifyStart
  }
}

export const resolveFlex = (flex?: Flex) => {
  switch (flex) {
    case 'content':
      return styles.flexContent
    case '1/2':
      return styles.flexBasis12
    case '1/3':
      return styles.flexBasis13
    case '2/3':
      return styles.flexBasis23
    case '1/4':
      return styles.flexBasis14
    case '3/4':
      return styles.flexBasis34
    case '1/5':
      return styles.flexBasis15
    case '2/5':
      return styles.flexBasis25
    case '3/5':
      return styles.flexBasis35
    case '4/5':
      return styles.flexBasis45
    default:
      return styles.flexFluid
  }
}

export const resolveDirection = (dir?: Direction) => {
  switch (dir) {
    case 'row':
      return styles.directionRow
    case 'row-reverse':
      return styles.directionRowReverse
    case 'column-reverse':
      return styles.directionColumnReverse
    default:
      return styles.directionColumn
  }
}

export const resolveWrap = (wrap?: Wrap) => {
  switch (wrap) {
    case 'wrap':
      return styles.wrap
    case 'wrap-reverse':
      return styles.wrapReverse
    default:
      return styles.noWrap
  }
}

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(() => Dimensions.get('window'))

  useEffect(() => {
    const subscription = pipe(
      dimensionsSource,
      debounce(() => (Platform.OS === 'web' ? 60 : 0)),
      onPush(layout => setDimensions(layout.window)),
      publish,
    )

    return () => subscription.unsubscribe()
  }, [])

  return dimensions
}

export const resolveResponsivePropFactory = (options: ResponsivePropOptions) => <
  T extends string | number | undefined
>(
  value: ResponsiveProp<T>,
): T => {
  if (typeof value === 'undefined') {
    return undefined as T
  }

  const { width, breakpoints } = options
  const { desktop, tablet } = breakpoints
  const [mobileValue, tabletValue, desktopValue] = normalizeResponsiveProp(value)
  const isWidthGt = isWidthGtFactory(width)

  switch (true) {
    case isWidthGt(desktop):
      return desktopValue
    case isWidthGt(tablet):
      return tabletValue
    default:
      return mobileValue
  }
}

export const resolveCurrentBreakpoint = (options: ResponsivePropOptions): Breakpoint => {
  const { width, breakpoints } = options
  const { desktop, tablet } = breakpoints
  const isWidthGt = isWidthGtFactory(width)

  switch (true) {
    case isWidthGt(desktop):
      return 'desktop'
    case isWidthGt(tablet):
      return 'tablet'
    default:
      return 'mobile'
  }
}

export const resolveCollapsibleProps = (options: CollapsibleOptions) => {
  const { currentBreakpoint, collapseBelow, reverse, margin } = options
  const whenReversed = whenReversedFactory(reverse)

  if (
    (collapseBelow === 'tablet' && currentBreakpoint === 'mobile') ||
    (collapseBelow === 'desktop' && currentBreakpoint !== 'desktop')
  ) {
    const noLastMargin = whenReversed(styles.noMarginBottom, styles.noMarginTop)
    const noOppositeMargin = whenReversed(styles.noMarginTop, styles.noMarginBottom)
    const direction: Direction = whenReversed('column-reverse', 'column')
    const spacing = whenReversed({ marginTop: margin }, { marginBottom: margin })

    return {
      noLastMargin,
      noOppositeMargin,
      spacing,
      direction,
      columnStyle: styles.fullWidth,
    }
  }

  const noLastMargin = whenReversed(styles.noMarginLeft, styles.noMarginRight)
  const noOppositeMargin = whenReversed(styles.noMarginRight, styles.noMarginLeft)
  const direction: Direction = whenReversed('row-reverse', 'row')
  const spacing = whenReversed({ marginLeft: margin }, { marginRight: margin })

  return {
    noLastMargin,
    noOppositeMargin,
    spacing,
    direction,
  }
}
