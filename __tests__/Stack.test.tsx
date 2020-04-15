import React from 'react'
import { render } from 'react-native-testing-library'
import { Stack } from '../src'

import { Placeholder, flattenStyle, flattenChildrenStyle } from './utils'

describe('Stack', () => {
  it('should distribute content vertically by default', () => {
    const { toJSON } = render(
      <Stack>
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const style = flattenStyle(toJSON())

    expect(style).toHaveProperty('flexDirection', 'column')
  })

  it('should align content along the left side by default', () => {
    const { toJSON } = render(
      <Stack>
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const style = flattenStyle(toJSON())

    expect(style).toHaveProperty('alignItems', 'flex-start')
  })

  it('should center content correctly', () => {
    const { toJSON } = render(
      <Stack align="center">
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const style = flattenStyle(toJSON())

    expect(style).toHaveProperty('alignItems', 'center')
  })

  it('should align content along the right side correctly', () => {
    const { toJSON } = render(
      <Stack align="right">
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const style = flattenStyle(toJSON())

    expect(style).toHaveProperty('alignItems', 'flex-end')
  })

  it('should add no bottom margin to children components if `space` is not passed', () => {
    const { toJSON } = render(
      <Stack>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = toJSON()
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(stack)

    expect(placeholder1).toHaveProperty('marginBottom', 0)
    expect(placeholder2).toHaveProperty('marginBottom', 0)
    expect(placeholder3).toHaveProperty('marginBottom', 0)
  })

  it('should add no bottom margin to children components if `space` equals 0', () => {
    const { toJSON } = render(
      <Stack space={0}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = toJSON()
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(stack)

    expect(placeholder1).toHaveProperty('marginBottom', 0)
    expect(placeholder2).toHaveProperty('marginBottom', 0)
    expect(placeholder3).toHaveProperty('marginBottom', 0)
  })

  it('should add proper bottom margin to children components if `space` is greater than 0', () => {
    const { toJSON } = render(
      <Stack space={2}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = toJSON()
    const [placeholder1, placeholder2, placeholder3] = flattenChildrenStyle(stack)

    expect(placeholder1).toHaveProperty('marginBottom', 8)
    expect(placeholder2).toHaveProperty('marginBottom', 8)
    expect(placeholder3).toHaveProperty('marginBottom', 0)
  })

  it('it should allow passing custom styles', () => {
    const { toJSON } = render(
      <Stack space={1} align="center" style={{ backgroundColor: '#fff', alignItems: 'flex-end' }}>
        <Placeholder
          style={{ borderWidth: 1, borderColor: '#ddd', marginBottom: 10, marginTop: 20 }}
        />
        <Placeholder style={{ marginBottom: 10, marginTop: 20 }} />
      </Stack>,
    )
    const stack = toJSON()
    const style = flattenStyle(stack)
    const [placeholder1, placeholder2] = flattenChildrenStyle(stack)

    expect(style).toHaveProperty('alignItems', 'center')
    expect(style).toHaveProperty('backgroundColor', '#fff')
    expect(placeholder1).toHaveProperty('borderWidth', 1)
    expect(placeholder1).toHaveProperty('borderColor', '#ddd')
    expect(placeholder1).toHaveProperty('marginBottom', 4)
    expect(placeholder1).toHaveProperty('marginTop', 0)
    expect(placeholder2).toHaveProperty('marginBottom', 0)
    expect(placeholder2).toHaveProperty('marginTop', 0)
  })
})
