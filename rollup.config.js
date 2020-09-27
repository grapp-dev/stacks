import compiler from '@ampproject/rollup-plugin-closure-compiler'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

import babel from 'rollup-plugin-babel'
import path from 'path'
import prettier from 'rollup-plugin-prettier'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

import { importAllPlugins } from './plugins/import-all-plugins'
import { replaceFlexBasis } from './plugins/replace-flex-basis'

const cwd = process.cwd()
const pkgInfo = require('./package.json')
const name = path.basename(pkgInfo.main, '.js')

const config = {
  input: './src/Stacks.ts',
  external: ['react', 'react-native', 'wonka'],
  treeshake: {
    propertyReadSideEffects: false,
  },
}

const makePlugins = ({ isProduction }) =>
  [
    babel({
      babelrc: false,
      extensions: ['ts', 'tsx', 'js'],
      exclude: 'node_modules/**',
      presets: [],
      plugins: ['@babel/plugin-syntax-typescript', importAllPlugins, replaceFlexBasis],
    }),
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          strict: false,
          noUnusedParameters: false,
          declaration: !isProduction,
          declarationDir: path.resolve(cwd, './dist/types/'),
          target: 'esnext',
          module: 'es2015',
          rootDir: cwd,
        },
      },
    }),
    resolve({
      mainFields: ['module', 'jsnext', 'main'],
      extensions: ['ts', 'tsx', 'js'],
      browser: true,
    }),
    commonjs({
      ignoreGlobal: true,
      include: ['*', '**'],
      extensions: ['.ts', '.tsx', '.js'],
    }),
    babel({
      babelrc: false,
      extensions: ['ts', 'tsx', 'js'],
      exclude: 'node_modules/**',
      plugins: ['babel-plugin-closure-elimination'],
    }),
    compiler({
      formatting: 'PRETTY_PRINT',
      compilation_level: 'SIMPLE_OPTIMIZATIONS',
    }),
    isProduction
      ? terser({
          warnings: true,
          ecma: 5,
          ie8: false,
          toplevel: true,
          mangle: true,
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          output: {
            comments: false,
          },
        })
      : terser({
          warnings: true,
          ecma: 5,
          ie8: false,
          compress: {
            hoist_vars: true,
            hoist_funs: true,
            pure_getters: true,
            toplevel: true,
            booleans_as_integers: false,
            if_return: false,
            ie8: false,
            sequences: false,
            loops: false,
            conditionals: false,
            join_vars: false,
            passes: 3,
          },
          mangle: false,
          output: {
            beautify: true,
            braces: true,
            indent_level: 2,
          },
        }),
    !isProduction &&
      prettier({
        parser: 'babel',
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
      }),
  ].filter(Boolean)

export default [
  {
    ...config,
    plugins: makePlugins({ isProduction: false }),
    output: [
      {
        legacy: true,
        freeze: false,
        esModule: false,
        file: `./dist/${name}.js`,
        format: 'cjs',
      },
      {
        compact: true,
        file: `./dist/${name}.mjs`,
        format: 'esm',
      },
    ],
  },
  {
    ...config,
    plugins: makePlugins({ isProduction: true }),
    output: [
      {
        legacy: true,
        freeze: false,
        esModule: false,
        file: `./dist/${name}.min.js`,
        format: 'cjs',
      },
    ],
  },
]
