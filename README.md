<p align="center">
  <img src="https://raw.githubusercontent.com/mobily/stacks/master/assets/stacks-frame.png" width="480">
</p>

<p align="center">
  <a href="https://travis-ci.com/mobily/stacks">
    <img src="https://img.shields.io/travis/com/mobily/stacks.svg?style=flat-square&logo=travis" alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/mobily/stacks?branch=master">
    <img src="https://img.shields.io/coveralls/github/mobily/stacks.svg?style=flat-square&amp;logo=coveralls" alt="Coverage">
  </a>
  <a href="https://www.npmjs.com/package/@mobily/stacks">
    <img src="https://img.shields.io/npm/v/@mobily/stacks.svg?style=flat-square&amp;logo=npm" alt="npm">
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square" alt="All Contributors">
  </a>
  <a href="https://github.com/mobily/stacks/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license">
  </a>
</p>

<p align="center">
  <strong>A set of useful components to help you build and maintain React Native (Web too) layouts with ease.</strong>
</p>


## Documentation

Full documentation can be found [here](https://mobily.github.io/stacks).

## Motivation

[Max Stoiber](https://github.com/mxstbr) wrote an interesting [article](https://mxstbr.com/thoughts/margin) some time ago about why margin is considered harmful. There are three main disadvantages of using margin:

- margin breaks component encapsulation
- margin makes reusability harder
- margin conflicts with how designers think

It's obvious that handling margins across the entire project is simply difficult and may not be scalable. For web projects, a design system called [Braid](https://seek-oss.github.io/braid-design-system/foundations/layout) has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, **Stacks** has been created and it adopts Braid Layouts API with subtle differences.

## Compatibility

`Stacks` is written in [ReScript](https://rescript-lang.org/). It's compiled using BuckleScript to plain JavaScript and has typings for TypeScript and Flow.

This means that out of the box `Stacks` is usable in any project that use the following:

- plain JavaScript
- TypeScript
- Flow
- ReScript

`Stacks` can be used in React Native and React Native Web projects.

## Getting started

### Installation

```shell
yarn add @mobily/stacks
```

or with `npm`

```shell
npm install @mobily/stacks --save
```

### Example

The following example shows how simple it is building screens using `Stacks`. For debugging purposes, you may want to turn the debug mode on (pass the `debug` property to the provider) or use the customizable `Grid` component.

|                               | Debug mode                          | Grid component                     |
| ----------------------------- | ----------------------------------- | ---------------------------------- |
| ![screen](assets/example.png) | ![screen](assets/example-debug.png) | ![screen](assets/example-grid.png) |

```tsx
import * as React from 'react'
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
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/stacks/commits?author=mobily" title="Documentation">📖</a> <a href="#design-mobily" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/panr"><img src="https://avatars.githubusercontent.com/u/1303365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Radek Kozieł</b></sub></a><br /><a href="#ideas-panr" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/domeknn"><img src="https://avatars.githubusercontent.com/u/9402280?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominik Łopaciński</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=domeknn" title="Code">💻</a> <a href="https://github.com/mobily/stacks/commits?author=domeknn" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ce.ms/"><img src="https://avatars.githubusercontent.com/u/959142?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cem Turan</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=cem2ran" title="Documentation">📖</a></td>
    <td align="center"><a href="http://hosmelq.com/"><img src="https://avatars.githubusercontent.com/u/1166143?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hosmel Quintana</b></sub></a><br /><a href="https://github.com/mobily/stacks/commits?author=hosmelq" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
