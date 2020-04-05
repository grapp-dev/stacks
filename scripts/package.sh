#!/bin/bash

yarn clean
yarn build
yarn version --no-git-tag-version --no-commit-hooks
cp README.md dist
cp package.json dist
# np --yolo --no-yarn --contents=dist
