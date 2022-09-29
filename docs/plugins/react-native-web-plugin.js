const path = require('path')

module.exports = function (context, options) {
  return {
    name: 'react-native-web-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            react: path.resolve(__dirname, '..', 'node_modules', 'react'),
            '@mobily/stacks': path.resolve(__dirname, '..', '..'),
            'react-native$': 'react-native-web',
          },
        },
      }
    },
  }
}
