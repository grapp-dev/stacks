import * as React from 'react'
import { Dimensions as RNDimensions } from 'react-native'

import { F } from '@mobily/ts-belt'

import { debounce, make, pipe, share, subscribe } from 'wonka'

import { Dimensions } from '../../types'

const getWindowDimensions = F.once(() => {
  return pipe(
    make<Dimensions>(observer => {
      const listener = RNDimensions.addEventListener('change', event => {
        const { width, height } = event.window

        observer.next({
          width,
          height,
        })
      })

      return listener.remove
    }),
    share,
  )
})

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = React.useState<Dimensions>(() => {
    const { width, height } = RNDimensions.get('window')
    return {
      width,
      height,
    }
  })

  React.useEffect(() => {
    const subscription = pipe(
      getWindowDimensions(),
      debounce(_ => 100),
      subscribe(setDimensions),
    )

    return subscription.unsubscribe
  }, [])

  return dimensions
}
