const nextra = require('nextra');
const path = require('path');

const { getNextraOptions, getWithNextraOptions } = require('@grapp/nextra-theme/config/nextra');

const withNextra = nextra(getNextraOptions());

module.exports = withNextra(
  getWithNextraOptions({
    transpilePackages: ['react-native-unistyles', '@grapp/stacks'],
    webpack: config => {
      Object.assign(config.resolve.alias, {
        react: path.resolve(__dirname, '..', 'node_modules', 'react'),
        'react-native$': path.resolve(__dirname, '..', 'node_modules', 'react-native'),
      });
    },
  }),
);
