const esbuild = require('esbuild')
const { babel } = require('./plugins/esbuild-babel-plugin')
const { curryGuarantee } = require('./plugins/babel-curry-guarantee-plugin')
const { replaceLiterals } = require('./plugins/babel-replace-literals-plugin')
const { rewriteProps } = require('./plugins/babel-rewrite-props-plugin')

const handleError = () => process.exit(1)
const build = (outfile, options) => {
  return esbuild
    .build({
      entryPoints: ['src/Stacks.js'],
      bundle: true,
      format: 'cjs',
      outfile: `dist/${outfile}`,
      plugins: [
        babel({
          config: {
            babelrc: false,
            exclude: 'node_modules/**',
            plugins: [
              [
                'module-resolver',
                {
                  root: ['./src'],
                  alias: {
                    'wonka/src/Wonka.bs.js': 'wonka',
                  },
                },
              ],
              rewriteProps,
              curryGuarantee,
              replaceLiterals,
              'closure-elimination',
            ],
          },
        }),
      ],
      minify: false,
      external: ['react', 'react-native', 'wonka'],
      logLevel: 'info',
      ...options,
    })
    .catch(handleError)
}

build('index.js')
build('index.min.js', { minify: true })
build('index.mjs', { format: 'esm' })
