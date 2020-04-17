import React from 'react'
import { render } from 'react-native-testing-library'
import { Tiles } from '../src'

import { Placeholder, flattenStyle, flattenChildrenStyle } from './utils'

describe('Tiles', () => {
  it('should distribute content vertically and align content along the left side by default', () => {
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

    expect(root.children.length).toBe(3)
    expect(container1.children.length).toBe(3)
    expect(container2.children.length).toBe(3)
    expect(container3.children.length).toBe(3)
    expect(empty.children).toBeNull()
  })

  it('should add no margin to children components if space is not passed', () => {
    const { toJSON } = render(
      <Tiles columns={2}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Tiles>,
    )
    const root = toJSON()
    const [container1, container2] = root.children
    const [stack1, stack2] = flattenChildrenStyle(root)
    const [placeholder11, placeholder12] = flattenChildrenStyle(container1)
    const [placeholder21, placeholder22] = flattenChildrenStyle(container2)
    const noMarginBottom = { marginBottom: 0 }
    const noMarginRight = { marginRight: 0 }

    expect(stack1).toMatchObject(noMarginBottom)
    expect(stack2).toMatchObject(noMarginBottom)
    expect(placeholder11).toMatchObject(noMarginRight)
    expect(placeholder12).toMatchObject(noMarginRight)
    expect(placeholder21).toMatchObject(noMarginRight)
    expect(placeholder22).toMatchObject(noMarginRight)
  })

  it('should add no margin to children components if space is not passed', () => {
    const { toJSON } = render(
      <Tiles columns={2} space={0}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Tiles>,
    )
    const root = toJSON()
    const [container1, container2] = root.children
    const [stack1, stack2] = flattenChildrenStyle(root)
    const [placeholder11, placeholder12] = flattenChildrenStyle(container1)
    const [placeholder21, placeholder22] = flattenChildrenStyle(container2)
    const noMarginBottom = { marginBottom: 0 }
    const noMarginRight = { marginRight: 0 }

    expect(stack1).toMatchObject(noMarginBottom)
    expect(stack2).toMatchObject(noMarginBottom)
    expect(placeholder11).toMatchObject(noMarginRight)
    expect(placeholder12).toMatchObject(noMarginRight)
    expect(placeholder21).toMatchObject(noMarginRight)
    expect(placeholder22).toMatchObject(noMarginRight)
  })

  it('should add proper margin to children components if space is greater than 0', () => {
    const { toJSON } = render(
      <Tiles columns={2} space={2}>
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
    const withMarginBottom = { marginBottom: 8 }
    const noMarginBottom = { marginBottom: 0 }
    const withMarginRight = { marginRight: 8 }
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
  })
})
