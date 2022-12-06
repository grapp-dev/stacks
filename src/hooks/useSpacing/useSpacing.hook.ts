import { useResponsiveProp } from '../useResponsiveProp'
import { useStacks } from '../useStacks'

export const useSpacing = (value: number) => {
  const { spacing: defaultSpacing } = useStacks()

  const resolveResponsiveProp = useResponsiveProp()
  const spacing = resolveResponsiveProp(defaultSpacing)

  if (value) {
    return spacing * value
  }

  return undefined
}
