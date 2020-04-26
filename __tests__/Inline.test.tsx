import React from 'react'
import { render } from 'react-native-testing-library'
import { Inline, ResponsiveProp } from '../src'

import {
  Placeholder,
  flattenStyle,
  flattenChildrenStyle,
  resizeToDesktop,
  resizeToTablet,
} from './utils'

describe('Inline', () => {
  const inspectMarginFactory = (space?: ResponsiveProp<number>) => (margin: number) => {
    const { toJSON } = render(
      <Inline space={space}>
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Inline>,
    )
    const root = toJSON()
    const [inner] = flattenChildrenStyle(root)
    const [container] = root.children
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(container)
    const withMargin = {
      marginTop: margin,
      marginRight: margin,
    }

    expect(inner.marginTop).toBe(-margin)
    expect(inner.marginRight).toBe(-margin)

    expect(placeholder1).toMatchObject(withMargin)
    expect(placeholder2).toMatchObject(withMargin)
    expect(placeholder3).toMatchObject(withMargin)
  }

  it('should distribute content horizontally and wrap inner content', () => {
    const { toJSON } = render(
      <Inline>
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Inline>,
    )
    const root = toJSON()
    const [container] = root.children
    const style = flattenStyle(container)

    expect(style).toMatchObject({
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    })
  })

  it('should add no margin to children components if `space` is not passed', () => {
    const inspectMargin = inspectMarginFactory()
    inspectMargin(0)
  })

  it('should add no margin to children components if `space` equals 0', () => {
    const inspectMargin = inspectMarginFactory(0)
    inspectMargin(0)
  })

  it('should add proper margin to children components if `space` is greater than 0', () => {
    const inspectMargin = inspectMarginFactory(2)
    inspectMargin(8)
  })

  it('should center content correctly', () => {
    const { toJSON } = render(
      <Inline align="center">
        <Placeholder />
        <Placeholder />
      </Inline>,
    )
    const root = toJSON()
    const [inner] = flattenChildrenStyle(root)

    expect(inner).toMatchObject({ justifyContent: 'center' })
  })

  it('should align content along the right side correctly', () => {
    const { toJSON } = render(
      <Inline align="right">
        <Placeholder />
        <Placeholder />
      </Inline>,
    )
    const root = toJSON()
    const [inner] = flattenChildrenStyle(root)

    expect(inner).toMatchObject({ justifyContent: 'flex-end' })
  })

  it('should allow passing custom styles', () => {
    const { toJSON } = render(
      <Inline space={1}>
        <Placeholder
          width={60}
          style={{ borderWidth: 1, borderColor: '#ddd', marginBottom: 10, marginTop: 20 }}
        />
        <Placeholder
          width={60}
          style={{ marginBottom: 10, marginLeft: 10, marginRight: 20, marginTop: 20 }}
        />
      </Inline>,
    )
    const root = toJSON()
    const [container] = root.children
    const [placeholder1, placeholder2] = flattenChildrenStyle(container)

    expect(placeholder1).toMatchObject({
      borderWidth: 1,
      borderColor: '#ddd',
      marginBottom: 0,
      marginTop: 4,
    })
    expect(placeholder2).toMatchObject({
      marginTop: 4,
      marginRight: 4,
      marginBottom: 0,
      marginLeft: 0,
    })
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
