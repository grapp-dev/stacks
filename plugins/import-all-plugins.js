export const importAllPlugins = ({ types: t }) => {
  return {
    visitor: {
      VariableDeclarator(path) {
        if (
          t.isIdentifier(path.node.id) &&
          t.isCallExpression(path.node.init) &&
          t.isIdentifier(path.node.init.callee) &&
          path.node.init.callee.name === 'require' &&
          path.node.init.arguments.length === 1
        ) {
          path.parentPath.replaceWith(
            t.importDeclaration(
              [t.importNamespaceSpecifier(path.node.id)],
              path.node.init.arguments[0],
            ),
          )
        }
      },
    },
  }
}
