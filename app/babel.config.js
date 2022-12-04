const path = require('path')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@mobily/stacks': path.resolve(__dirname, '../src'),
        },
      },
    ],
  ],
}
