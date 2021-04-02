const esbuild = require('esbuild')

const { jscodeshift } = require('./plugins/esbuild-jscodeshift')
const { replaceLiterals } = require('./plugins/replace-literals')
const { curryGuarantee } = require('./plugins/curry-guarantee')
const { rewriteProps } = require('./plugins/rewrite-props')

const handleError = () => process.exit(1)
const build = (outfile, options) => {
  return esbuild
    .build({
      entryPoints: ['src/Stacks.js'],
      bundle: true,
      format: 'cjs',
      outfile: `dist/${outfile}`,
      plugins: [
        jscodeshift({
          exclude: ['node_modules/**'],
          plugins: [replaceLiterals, curryGuarantee, rewriteProps],
        }),
      ],
      minify: false,
      external: ['react', 'react-native'],
      logLevel: 'info',
      ...options,
    })
    .catch(handleError)
}

build('index.js')
build('index.min.js', { minify: true })
build('index.mjs', { format: 'esm' })
