module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [['react-native-web'], [require.resolve('../babel'), { ignoreFilename: true }]],
}
