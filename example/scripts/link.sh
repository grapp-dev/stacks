#!/bin/bash

DIR=./node_modules/@mobily/stacks
PACKAGE=../

rm -rf $DIR
mkdir -p $DIR
cp "$PACKAGE/package.json" $DIR
cp "$PACKAGE/bsconfig.json" $DIR
cp "$PACKAGE/index.js.flow" $DIR
cp -r "$PACKAGE/src" "$DIR/src"
cp -r "$PACKAGE/dist" "$DIR/dist"
