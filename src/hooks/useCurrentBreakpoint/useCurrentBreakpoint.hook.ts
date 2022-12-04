import { resolveCurrentBreakpoint } from '../../utils'
import { useStacks } from '../useStacks'
import { useWindowDimensions } from '../useWindowDimensions'

export const useCurrentBreakpoint = () => {
  const { breakpoints } = useStacks()
  const dimensions = useWindowDimensions()

  return resolveCurrentBreakpoint(dimensions.width, breakpoints)
}
