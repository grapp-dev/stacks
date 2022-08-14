import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const component = root.find(j.ExportNamedDeclaration).filter(p => {
    if (p.value.declaration?.type === 'VariableDeclaration') {
      return p.value.declaration.declarations.some(declaration => {
        return (
          declaration.type === 'VariableDeclarator' &&
          declaration.init?.type === 'MemberExpression' &&
          declaration.init.object.type === 'Identifier' &&
          /stacks_component_box/i.test(declaration.init.object.name)
        )
      })
    }

    return false
  })

  component.forEach(_p => {
    root
      .find(j.ExportNamedDeclaration, {
        declaration: {
          id: {
            name: 'Props',
          },
        },
      })
      .forEach(p => {
        if (
          p.value.declaration?.type === 'TSTypeAliasDeclaration' &&
          p.value.declaration.typeAnnotation.type === 'TSTypeLiteral'
        ) {
          const signature = j.tsPropertySignature(
            j.identifier('as'),
            j.tsTypeAnnotation(
              j.tsTypeReference(
                j.tsQualifiedName(j.identifier('React'), j.identifier('ComponentType')),
              ),
            ),
          )

          signature.optional = true
          signature.readonly = true

          p.value.declaration.typeAnnotation.members = p.value.declaration.typeAnnotation.members
            .map(p => {
              if (p.type === 'TSPropertySignature' && p.key.type === 'Identifier') {
                const signature = j.tsPropertySignature(j.identifier(p.key.name), p.typeAnnotation)
                signature.optional = p.optional
                signature.readonly = true
                return signature
              }

              return p
            })
            .concat(signature)
        }
      })
  })

  return root.toSource()
}

export default transform
