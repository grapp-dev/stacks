# ⚡ Stacks &middot; [![Build Status](https://img.shields.io/travis/com/mobily/stacks.svg?style=flat-square&logo=travis)](https://travis-ci.com/mobily/stacks) [![Coverage](https://img.shields.io/coveralls/github/mobily/stacks.svg?style=flat-square&logo=coveralls)](https://coveralls.io/github/mobily/stacks?branch=master) [![npm](https://img.shields.io/npm/v/@mobily/stacks.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@mobily/stacks)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/mobily/stacks/blob/master/LICENSE)

> Build React Native layouts quickly with ease and fun.

## Documentation

Full documentation can be found [here](https://mobily.github.io/stacks).

## Motivation

[Max Stoiber](https://github.com/mxstbr) has written an interesting [article](https://mxstbr.com/thoughts/margin) about why margin is considered harmful. There are three main disadvantages of using margin:

- margin breaks component encapsulation
- margin makes reusability harder
- margin conflicts with how designers think

It's obvious that handling margins across the entire project is simply difficult and may not be scalable. For web projects, a design system called [Braid](https://seek-oss.github.io/braid-design-system/foundations/layout) has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, **Stacks** has been created and it adopts Braid Layouts API with subtle differences.

## Compatibility

`Stacks` is written in [ReScript](https://rescript-lang.org/). It is compiled to plain JavaScript and has typings for TypeScript and Flow.

This means that out of the box `Stacks` is usable in any project that use the following:

- plain JavaScript
- TypeScript
- Flow
- ReScript

`Stacks` is supported in React Native and React Native Web projects.

## Getting started

### Installation

```shell
yarn add @mobily/stacks
```

or with `npm`

```shell
npm install @mobily/stacks --save
```

### ReScript

`Stacks` depends on the following libraries, which you also have to install:
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

## Example

The following example shows how simple it is building screens without using neither _margin_ nor _padding_ properties in your style sheets objects. For debugging purposes, you may want to turn the debug mode on (pass the `debug` property to the provider) or use the customizable Grid component.

|                               | Debug mode                          | Grid component                     |
| ----------------------------- | ----------------------------------- | ---------------------------------- |
| ![screen](assets/example.png) | ![screen](assets/example-debug.png) | ![screen](assets/example-grid.png) |

```tsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Stack, Box, Columns, Column, Tiles } from '@mobily/stacks'

// import components, styles, etc.

const Profile = () => {
  return (
    <ScrollView>
      <Box padding={4}>
        <Stack space={4}>
          <Stack space={4} align="center">
            <Avatar source="…" size={96} />
            <Stack space={1} align="center">
              <Title>Jenna Doe</Title>
              <Description>Photographer &amp; Artist</Description>
            </Stack>
            <Columns>
              <Column>
                <Stack space={1} align="center">
                  <Text>Followers</Text>
                  <Counter>258</Counter>
                </Stack>
              </Column>
              <Column>
                <Stack space={1} align="center">
                  <Text>Following</Text>
                  <Counter>346</Counter>
                </Stack>
              </Column>
            </Columns>
            <Divider />
          </Stack>
          <Text>Photos</Text>
          <Tiles columns={4} space={2}>
            <Photo source="…" />
            <Photo source="…" />
            <Photo source="…" />
          </Tiles>
          <Text>Followers</Text>
          <Tiles columns={8} space={2}>
            <Avatar source="…" />
            <Avatar source="…" />
            <Avatar source="…" />
          </Tiles>
        </Stack>
      </Box>
    </ScrollView>
  )
}
```

## Contributors

Kudos to [@panr](https://github.com/panr) for giving this project a name!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/stacks/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
