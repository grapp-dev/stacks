import { API } from 'jscodeshift'

const upperFirstLetter = (string: string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)

  root
    .find(j.Identifier)
    .filter(p => {
      return p.value.name.startsWith('Stacks_types_')
    })
    .replaceWith(p => {
      const str = p.value.name.replace('Stacks_types_', '')
      return j.identifier(upperFirstLetter(str))
    })

  return root.toSource()
}

export default transform
