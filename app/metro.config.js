/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-native': path.resolve(__dirname, 'node_modules', 'react-native'),
      '@babel/runtime': path.resolve(__dirname, 'node_modules', '@babel', 'runtime'),
      '@mobily/ts-belt': path.resolve(__dirname, 'node_modules', '@mobily', 'ts-belt'),
      wonka: path.resolve(__dirname, 'node_modules', 'wonka'),
    },
  },
  projectRoot: __dirname,
  watchFolders: [__dirname, path.resolve(__dirname, '..', 'src')],
}
