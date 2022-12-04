import { useStacks } from '../useStacks'

export const useSpacing = (value: number) => {
  const { spacing } = useStacks()

  if (value) {
    return spacing * value
  }

  return undefined
}
