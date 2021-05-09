exports.esmImports = (j, source) => {
  const root = j(source)
  const transform = (fn, name, module) => {
    return root
      .find(j.ImportDeclaration)
      .filter(p => {
        return p.value.source.value === name
      })
      .replaceWith(p => {
        return j.importDeclaration([fn(j.identifier(module))], j.literal(name))
      })
  }

  transform(j.importDefaultSpecifier, 'react', 'React')
  transform(j.importNamespaceSpecifier, 'react-native', 'ReactNative')

  return root.toSource()
}
