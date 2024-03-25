const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

const modules = (...paths) => {
  return path.resolve(__dirname, 'node_modules', ...paths);
};

config.watchFolders = config.watchFolders.concat([path.resolve(__dirname, '..', 'src')]);
config.resolver.extraNodeModules = {
  '@babel/runtime': modules('@babel', 'runtime'),
  react: modules('react'),
  'react-native': modules('react-native'),
  'react-native-unistyles': modules('react-native-unistyles'),
  'react-native-web': modules('react-native-web'),
};

module.exports = config;
