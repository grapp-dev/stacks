import React from 'react'
import { render } from 'react-native-testing-library'
import { Tiles, ResponsiveProp } from '../src'

import {
  Placeholder,
  flattenStyle,
  flattenChildrenStyle,
  resizeToTablet,
  resizeToDesktop,
} from './utils'

describe('Tiles', () => {
  const inspectMarginFactory = (space?: ResponsiveProp<number>) => (margin: number) => {
    const { toJSON } = render(
      <Tiles columns={2} space={space}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Tiles>,
    )
    const root = toJSON()
    const [container1, container2, container3] = root.children
    const [stack1, stack2, stack3] = flattenChildrenStyle(root)
    const [placeholder11, placeholder12] = flattenChildrenStyle(container1)
    const [placeholder21, placeholder22] = flattenChildrenStyle(container2)
    const [placeholder31, placeholder32] = flattenChildrenStyle(container3)
    const withMarginBottom = { marginBottom: margin }
    const noMarginBottom = { marginBottom: 0 }
    const withMarginRight = { marginRight: margin }
    const noMarginRight = { marginRight: 0 }

    expect(stack1).toMatchObject(withMarginBottom)
    expect(stack2).toMatchObject(withMarginBottom)
    expect(stack3).toMatchObject(noMarginBottom)
    expect(placeholder11).toMatchObject(withMarginRight)
    expect(placeholder12).toMatchObject(noMarginRight)
    expect(placeholder21).toMatchObject(withMarginRight)
    expect(placeholder22).toMatchObject(noMarginRight)
    expect(placeholder31).toMatchObject(withMarginRight)
    expect(placeholder32).toMatchObject(noMarginRight)
  }

  it('should distribute rows vertically', () => {
    const { toJSON } = render(
      <Tiles columns={2}>
        <Placeholder />
        <Placeholder />
      </Tiles>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toEqual({
      flexDirection: 'column',
      alignItems: 'stretch',
      width: '100%',
    })
  })

  it('should split children components into grid with correct number of columns and rows', () => {
    const { toJSON } = render(
      <Tiles columns={3}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Tiles>,
    )
    const root = toJSON()
    const [container1, container2, container3] = root.children
    const [, , empty] = container3.children

    expect(root.children).toHaveLength(3)
    expect(container1.children).toHaveLength(3)
    expect(container2.children).toHaveLength(3)
    expect(container3.children).toHaveLength(3)
    expect(empty.children).toBeNull()
  })

  it('should add no margin to children components if space is not passed', () => {
    const inspectMargin = inspectMarginFactory()
    inspectMargin(0)
  })

  it('should add no margin to children components if space is not passed', () => {
    const inspectMargin = inspectMarginFactory(0)
    inspectMargin(0)
  })

  it('should add proper margin to children components if space is greater than 0', () => {
    const inspectMargin = inspectMarginFactory(2)
    inspectMargin(8)
  })

  it('should handle tablet screen size upwards', () => {
    const inspectMargin = inspectMarginFactory([1, 3])

    inspectMargin(4)
    resizeToTablet()
    inspectMargin(12)
    resizeToDesktop()
    inspectMargin(12)
  })

  it('should handle desktop screen size', () => {
    const inspectMargin = inspectMarginFactory([1, 3, 5])

    inspectMargin(4)
    resizeToTablet()
    inspectMargin(12)
    resizeToDesktop()
    inspectMargin(20)
  })
})
