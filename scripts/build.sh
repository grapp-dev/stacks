#!/usr/bin/env sh

yarn re:clean
yarn re:build
# yarn test
yarn clean
yarn esbuild
yarn tsc --outDir ./dist/cjs
yarn tsc --outDir ./dist/esm
yarn generate:flow
