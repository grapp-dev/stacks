import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)

  root
    .find(j.TSTypeReference, {
      typeName: {
        type: 'TSQualifiedName',
        right: {
          type: 'Identifier',
          name: 'ComponentType',
        },
      },
    })
    .forEach(p => {
      p.value.typeParameters = j.tsTypeParameterInstantiation([
        j.tsTypeReference(j.identifier('Props')),
      ])
    })

  return root.toSource()
}

export default transform
