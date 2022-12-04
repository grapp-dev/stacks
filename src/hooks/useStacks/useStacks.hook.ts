import * as React from 'react'

import { Context } from '../../context'

export const useStacks = () => {
  return React.useContext(Context)
}
