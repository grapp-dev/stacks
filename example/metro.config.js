const path = require('path')
const pathToRoot = (...args) => path.resolve(__dirname, '..', ...args)
const pathToNodeModules = module => pathToRoot('example', 'node_modules', module)

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  projectRoot: pathToRoot('example'),
  resolver: {
    extraNodeModules: {
      react: pathToNodeModules('react'),
      'react-native': pathToNodeModules('react-native'),
      '@babel/runtime': pathToNodeModules('@babel/runtime'),
    },
  },
  watchFolders: [pathToRoot('src')],
}
