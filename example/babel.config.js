module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@mobily/stacks': '../src',
        },
      },
    ],
  ],
}
