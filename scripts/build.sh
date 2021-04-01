#!/usr/bin/env sh

yarn re:clean
yarn re:build
# yarn test
yarn clean
yarn esbuild
yarn tsc
yarn generate:flow
