---
id: react-native-web
title: React Native Web
---

Since `Stacks` components use `window` dimensions, SSR support is limited. If you use the `responsive prop` format, you probably may want to remove SSR support, otherwise, you can encounter unpredictable behavior.

Don't forget to add `react-native-web` to your Babel config. Also, add `{ commonjs: true }` to the RNW Babel plugin config, if either RNW styles cause a bug, or SSR support is enabled.

## Next.js (expo adapter)

Install `next-compose-plugins`, `next-transpile-modules` and `babel-plugin-react-native-web`:

```bash
yarn add next-transpile-modules next-compose-plugins babel-plugin-react-native-web --dev
```

Update `next.config.js`:

```js
const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  '@mobily/stacks',
])

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {
  /* next.config.js code */
})
```

Update `babel.config.js`:

```js
module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    ['react-native-web' /*, { commonjs: true } */],
  ],
}
```

## Next.js

Install `next-transpile-modules` and `babel-plugin-react-native-web`:

```bash
yarn add next-transpile-modules babel-plugin-react-native-web --dev
```

Update `next.config.js`:

```js
const withTM = require('next-transpile-modules')([
  'react-native',
  '@mobily/stacks',
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

Update `babel.config.js`:

```js
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web' /*, { commonjs: true } */],
  ],
}
```

## Create React App

Install `customize-cra`, `react-app-rewired` and `babel-plugin-react-native-web`:

```sh
yarn add customize-cra react-app-rewired babel-plugin-react-native-web --dev
```

Add `config-overrides.js` at the same level as `package.json`:

```js
const { override, addBabelPlugin, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  addBabelPlugin(['react-native-web' /*, { commonjs: true } */]),
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules', '@mobily', 'stacks')
  ]),
)
```

Use `react-app-rewired` instead of `react-scripts` in your `package.json` commands.

## Webpack

Add the following to the `babel-loader` configuration:

```js
{
  test: /\.m?[t|j]sx?$/,
  exclude: {
    and: [
      /node_modules/,
      {
        not: [/@mobily\/stacks/],
      },
    ],
  },
  use: {
    loader: 'babel-loader',
    /* other options */
  },
}
```

Update `babel.config.js`:

```js
module.exports = {
  presets: [/* presets */],
  plugins: [
    ['react-native-web' /*, { commonjs: true } */],
    /* other plugins */
  ],
}
```
