import { API, FileInfo } from 'jscodeshift'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const externals = ['react-native', 'react', 'wonka']
  const mapExternal = (name: string) => {
    switch (name) {
      case 'react-native':
        return 'ReactNative'
      case 'react':
        return 'React'
      case 'wonka':
        return 'Wonka'
      default:
        return ''
    }
  }

  root
    .find(j.CallExpression, {
      callee: {
        name: 'require',
        type: 'Identifier',
      },
    })
    .replaceWith(p => {
      const arg = p.value.arguments.find(arg => {
        return (
          arg.type === 'Literal' && typeof arg.value === 'string' && externals.includes(arg.value)
        )
      })
      if (
        p.value.callee.type === 'Identifier' &&
        arg &&
        arg.type === 'Literal' &&
        typeof arg.value === 'string'
      ) {
        return j.identifier(`module${mapExternal(arg.value)}`)
      }

      return p.value
    })

  root
    .find(j.VariableDeclaration)
    .filter(p => {
      return p.value.declarations.some(declaration => {
        return (
          declaration.type === 'VariableDeclarator' &&
          declaration.id.type === 'Identifier' &&
          declaration.id.name === '__toCommonJS'
        )
      })
    })
    .insertAfter(_p => {
      return externals.map(name => {
        return j.variableDeclaration('var', [
          j.variableDeclarator(
            j.identifier(`module${mapExternal(name)}`),
            j.callExpression(j.identifier('require'), [j.stringLiteral(name)]),
          ),
        ])
      })
    })

  return root.toSource()
}

export default transform
