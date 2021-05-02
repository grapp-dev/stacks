exports.esmImports = (j, source) => {
  const root = j(source)
  const transform = (name, module) => {
    return root
      .find(j.ImportDeclaration)
      .filter(p => {
        return p.value.source.value === name
      })
      .replaceWith(p => {
        return j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(module))],
          j.literal(name),
        )
      })
  }

  transform('react', 'React')
  transform('react-native', 'ReactNative')

  return root.toSource()
}
