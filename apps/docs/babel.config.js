const path = require('path');

module.exports = api => {
  api.cache(true);

  return {
    presets: ['next/babel'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'react-native': path.join(__dirname, 'node_modules', 'react-native-web'),
          },
        },
      ],
    ],
  };
};
