import React from 'react'
import { render } from 'react-native-testing-library'
import { Hidden, HiddenProps } from '../src'

import { Placeholder, resizeToTablet, resizeToDesktop } from './utils'

describe('Hidden', () => {
  const renderHiddenFactory = (props?: Omit<HiddenProps, 'children'>) => () => {
    const { toJSON } = render(
      <Hidden {...props}>
        <Placeholder />
      </Hidden>,
    )
    const root = toJSON()
    return root
  }

  it("should don't render itself if either `above` or `below` is not passed", () => {
    const render = renderHiddenFactory()
    expect(render()).toBeNull()
  })

  it('should hide component below tablet screen size', () => {
    const render = renderHiddenFactory({ below: 'tablet' })

    expect(render()).toBeNull()
    resizeToTablet()
    expect(render()).toBeDefined()
    resizeToDesktop()
    expect(render()).toBeDefined()
  })

  it('should hide component below desktop screen size', () => {
    const render = renderHiddenFactory({ below: 'desktop' })

    expect(render()).toBeNull()
    resizeToTablet()
    expect(render()).toBeNull()
    resizeToDesktop()
    expect(render()).toBeDefined()
  })

  it('should hide component above mobile screen size', () => {
    const render = renderHiddenFactory({ above: 'mobile' })

    expect(render()).toBeDefined()
    resizeToTablet()
    expect(render()).toBeNull()
    resizeToDesktop()
    expect(render()).toBeNull()
  })

  it('should hide component above tablet screen size', () => {
    const render = renderHiddenFactory({ above: 'tablet' })

    expect(render()).toBeDefined()
    resizeToTablet()
    expect(render()).toBeDefined()
    resizeToDesktop()
    expect(render()).toBeNull()
  })
})
