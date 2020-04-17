import React from 'react'
import { render } from 'react-native-testing-library'
import { Grid } from '../src'

import { flattenStyle, flattenChildrenStyle } from './utils'

describe('Grid', () => {
  it('should fill the screen and distribute columns horizontally', () => {
    const { toJSON } = render(<Grid />)
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flexDirection: 'row',
    })
  })

  it('should set the correct value for right and left padding', () => {
    const { toJSON } = render(<Grid margin={4} />)
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({
      paddingLeft: 16,
      paddingRight: 16,
    })
  })

  it('should display correct number of columns', () => {
    const { toJSON } = render(<Grid columns={12} />)
    const root = toJSON()

    expect(root.children).toHaveLength(12)
  })

  it('should calculate columns width correctly (scenario #1)', () => {
    const { toJSON } = render(<Grid />)
    const root = toJSON()
    const columns = flattenChildrenStyle(root)
    const values = columns.map(column => column.width)

    expect(values).toEqual([89.25, 89.25, 89.25, 89.25, 89.25, 89.25, 89.25, 89.25])
  })

  it('should calculate columns width correctly (scenario #2)', () => {
    const { toJSON } = render(<Grid columns={8} margin={0} gutter={2} />)
    const root = toJSON()
    const columns = flattenChildrenStyle(root)
    const values = columns.map(column => column.width)

    expect(values).toEqual([86.75, 86.75, 86.75, 86.75, 86.75, 86.75, 86.75, 86.75])
  })

  it('should calculate columns width correctly (scenario #3)', () => {
    const { toJSON } = render(<Grid columns={8} margin={2} gutter={0} />)
    const root = toJSON()
    const columns = flattenChildrenStyle(root)
    const values = columns.map(column => column.width)

    expect(values).toEqual([91.75, 91.75, 91.75, 91.75, 91.75, 91.75, 91.75, 91.75])
  })
})
