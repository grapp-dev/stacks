---
id: react-native-web
title: React Native Web
---

Since `Stacks` components use `window` dimensions, SSR support is limited. If you use the `responsive prop` format, you probably want to remove SSR support, otherwise, you may encounter unpredictable behavior.

Don't forget to add `react-native-web` to your Babel config. Also, add `{ commonjs: true }` to the RNW Babel plugin config, if either RNW styles cause a bug or the SSR support is enabled.

### Expo/Webpack

As mentioned above, most of the time you need to install `babel-plugin-react-native-web` and update `babel.config.js`.

```bash
yarn add babel-plugin-react-native-web --dev
```

```js
module.exports = api => {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-web', /* { commonjs: true } */],
    ],
  }
}
```

### Next

Install `next-transpile-modules` and `babel-plugin-react-native-web`:

```bash
yarn add next-transpile-modules babel-plugin-react-native-web --dev
```

Update `next.config.js`:

```js
const withTM = require('next-transpile-modules')([
  'react-native',
])

module.exports = withTM({
  webpack: config => {
    const { alias = {}, extensions } = config.resolve

    config.resolve.alias = {
      ...alias,
      'react-native$': 'react-native-web',
    }

    config.resolve.extensions = extensions.concat([
      '.web.js',
      '.web.ts',
      '.web.tsx',
    ])

    return config
  },
})
```

Don't forget to update your `babel.config.js` as well.

### Create React App

Install `customize-cra`, `react-app-rewired` and `babel-plugin-react-native-web`:

```sh
yarn add customize-cra react-app-rewired babel-plugin-react-native-web --dev
```

Add `config-overrides.js` at the same level as `package.json`:

```js
const { override, addBabelPlugins, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPlugins(
    ['react-native-web' /*, { commonjs: true } */],
  ),
  babelInclude([
    path.resolve(__dirname, 'src'),
  ]),
)
```

Use `react-app-rewired` instead of `react-scripts` in your `package.json` commands.
