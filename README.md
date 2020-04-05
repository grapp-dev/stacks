# ⚡ Stacks &middot; [![Build Status](https://img.shields.io/travis/com/mobily/stacks.svg?style=flat-square)](https://travis-ci.com/mobily/stacks) [![npm](https://img.shields.io/npm/v/@mobily/stacks.svg?style=flat-square)](https://www.npmjs.com/package/@mobily/stacks)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/mobily/stacks/blob/master/LICENSE)

> Build React Native views blazingly fast.

## Motivation

Disclaimer: **Stacks** is not yet another full design system.

[Max Stoiber](https://github.com/mxstbr) has recently written an interesting [article](https://mxstbr.com/thoughts/margin) about why margin is considered harmful. There are three main disadvantages of using margin:

- margin breaks component encapsulation
- margin makes reusability harder
- margin conflicts with how designers think

I fully agree with this point of view. To me, it's obvious that handling margins across the entire project is simply difficult and might be not scalable. For web projects, a design system called [Braid](https://seek-oss.github.io/braid-design-system/foundations/layout) has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, **Stacks** has been created and it adopts Braid Layouts API with subtle differences.

## Getting started

### Installation

```shell
yarn add @mobily/stacks
```

or with `npm`

```shell
npm install @mobily/stacks --save
```

### Prerequisites

To use **Stacks** properly you need to pass a default spacing value to a `Provider` at the top of your React tree.

```tsx
import { Provider as Stacks } from '@mobily/stacks'

const App = () => {
  return (
    <Stacks spacing={4}>
      …
    </Stacks>
  )
}
```

## Example

(TODO)

## Api Reference

(TODO)

## Contributors

Kudos to [@panr](https://github.com/panr) for giving this project a name!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/stacks/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
