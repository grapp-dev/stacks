const path = require('path')
const pathToRoot = (...args) => path.resolve(__dirname, '..', '..', ...args)
const pathToNodeModules = module => pathToRoot('example', 'rescript', 'node_modules', module)

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  projectRoot: pathToRoot('example', 'rescript'),
  resolver: {
    extraNodeModules: {
      react: pathToNodeModules('react'),
      'react-native': pathToNodeModules('react-native'),
      'reason-react-native': pathToNodeModules('reason-react-native'),
      '@babel/runtime': pathToNodeModules('@babel/runtime'),
      wonka: pathToRoot('node_modules', 'wonka'),
      'bs-platform': pathToRoot('node_modules', 'bs-platform'),
    },
  },
  watchFolders: [
    pathToRoot('src'),
    pathToRoot('node_modules', 'wonka'),
    pathToRoot('node_modules', 'bs-platform'),
  ],
}
