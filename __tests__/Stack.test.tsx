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
    const stack = flattenStyle(toJSON())

    expect(stack).toHaveProperty('flexDirection', 'column')
  })

  it('should align content along the left side by default', () => {
    const { toJSON } = render(
      <Stack>
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = flattenStyle(toJSON())

    expect(stack).toHaveProperty('alignItems', 'flex-start')
  })

  it('should center content correctly', () => {
    const { toJSON } = render(
      <Stack align="center">
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = flattenStyle(toJSON())

    expect(stack).toHaveProperty('alignItems', 'center')
  })

  it('should align content along the right side correctly', () => {
    const { toJSON } = render(
      <Stack align="right">
        <Placeholder />
        <Placeholder />
      </Stack>,
    )
    const stack = flattenStyle(toJSON())

    expect(stack).toHaveProperty('alignItems', 'flex-end')
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
})
