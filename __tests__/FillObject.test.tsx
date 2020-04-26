import React from 'react'
import { render } from 'react-native-testing-library'
import { FillObject } from '../src'

import { Placeholder, flattenStyle } from './utils'

describe('FillObject', () => {
  it('should fill the screen', () => {
    const { toJSON } = render(
      <FillObject>
        <Placeholder />
      </FillObject>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    })
  })
})
