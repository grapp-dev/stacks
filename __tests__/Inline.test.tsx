import React from 'react'
import { render } from 'react-native-testing-library'
import { Inline } from '../src'

import { Placeholder, flattenStyle, flattenChildrenStyle, abs } from './utils'

describe('Inline', () => {
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
    const { toJSON } = render(
      <Inline>
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Inline>,
    )
    const root = toJSON()
    const [inner] = flattenChildrenStyle(root)
    const [container] = root.children
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(container)
    const noMargin = {
      marginTop: 0,
      marginRight: 0,
    }

    expect(abs(inner.marginTop)).toBe(0)
    expect(abs(inner.marginRight)).toBe(0)

    expect(placeholder1).toMatchObject(noMargin)
    expect(placeholder2).toMatchObject(noMargin)
    expect(placeholder3).toMatchObject(noMargin)
  })

  it('should add no margin to children components if `space` equals 0', () => {
    const { toJSON } = render(
      <Inline space={0}>
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Inline>,
    )
    const root = toJSON()
    const [inner] = flattenChildrenStyle(root)
    const [container] = root.children
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(container)
    const noMargin = {
      marginTop: 0,
      marginRight: 0,
    }

    expect(abs(inner.marginTop)).toBe(0)
    expect(abs(inner.marginRight)).toBe(0)

    expect(placeholder1).toMatchObject(noMargin)
    expect(placeholder2).toMatchObject(noMargin)
    expect(placeholder3).toMatchObject(noMargin)
  })

  it('should add proper margin to children components if `space` is greater than 0', () => {
    const { toJSON } = render(
      <Inline space={2}>
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
      marginTop: 8,
      marginRight: 8,
    }

    expect(inner.marginTop).toBe(-8)
    expect(inner.marginRight).toBe(-8)

    expect(placeholder1).toMatchObject(withMargin)
    expect(placeholder2).toMatchObject(withMargin)
    expect(placeholder3).toMatchObject(withMargin)
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
})
