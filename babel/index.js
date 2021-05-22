const isReactNativeModule = ({ source, specifiers }) =>
  source &&
  (source.value === 'react-native' || source.value.includes('react-native-web')) &&
  specifiers.length

module.exports = function ({ types: t }) {
  return {
    name: 'rewrite react-native imports',
    visitor: {
      ImportDeclaration(path, state) {
        if (
          isReactNativeModule(path.node) &&
          t.isImportDefaultSpecifier(path.node.specifiers[0]) &&
          (this.file.opts.filename.includes('@mobily/stacks/dist/index') ||
            state.opts.ignoreFilename)
        ) {
          path.replaceWith(
            t.importDeclaration(
              [t.importNamespaceSpecifier(t.identifier(path.node.specifiers[0].local.name))],
              t.stringLiteral(path.node.source.value),
            ),
          )
        }
      },
    },
  }
}
