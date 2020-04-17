import { Children } from 'react'
import { StyleSheet } from 'react-native'

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

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const randomByte = () => randomNumber(0, 255)
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

export const setAlign = (dir?: AxisX | AxisY) => {
  switch (dir) {
    case 'center':
      return styles.alignCenter
    case 'bottom':
    case 'right':
      return styles.alignEnd
    case 'left':
      return styles.alignStart
    default:
      return styles.alignStretch
  }
}

export const setJustify = (dir?: AxisX | AxisY | Space) => {
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

export const setFlex = (flex?: Flex) => {
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

export const setDirection = (dir?: Direction) => {
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

export const setWrap = (wrap?: Wrap) => {
  switch (wrap) {
    case 'wrap':
      return styles.wrap
    case 'wrap-reverse':
      return styles.wrapReverse
    default:
      return styles.noWrap
  }
}
