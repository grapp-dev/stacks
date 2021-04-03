const path = require('path')

module.exports = function (context, options) {
  return {
    name: 'react-native-web-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            react: path.resolve(__dirname, '..', 'node_modules', 'react'),
            'react-native$': 'react-native-web',
            '@mobily/stacks': path.resolve(__dirname, '..', '..', 'dist', 'index.js'),
          },
        },
      }
    },
  }
}
