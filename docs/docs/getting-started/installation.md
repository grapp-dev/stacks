---
id: installation
title: Installation
---

The installation is straightforward, you can use either `yarn` or `npm`.

:::important

Stacks requires `react >=16.8.0` and `react-native >=0.59.0` due to hooks implementation.

:::

```shell
yarn add @mobily/stacks
```

or with `npm`

```shell
npm install @mobily/stacks --save
```

### ReScript Config

If you use `Stacks` in ReScript then you also have to install the following libraries:
- `rescript-react-native`
- `@rescript-react`
- `wonka`

```shell
yarn add @rescript/react rescript-react-native wonka
```

or with `npm`

```shell
npm install @rescript/react rescript-react-native wonka --save
```

Once all dependencies are installed, add them to `bs-dependencies` in your `bsconfig.json`:

```json
{
  "bs-dependencies": [
    "@mobily/stacks",
    "@rescript/react",
    "rescript-react-native",
    "wonka"
  ]
}
```
