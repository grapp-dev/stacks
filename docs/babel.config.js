module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    ['react-native-web'],
    [
      'module-resolver',
      {
        alias: {
          react: './node_modules/react',
        },
      },
    ],
  ],
}
