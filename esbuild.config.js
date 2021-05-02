const esbuild = require('esbuild')

const { jscodeshift } = require('./plugins/esbuild-jscodeshift')
const { replaceLiterals } = require('./plugins/replace-literals')
const { uncurryFunctions } = require('./plugins/uncurry-functions')
const { rewriteProps } = require('./plugins/rewrite-props')
const { esmImports } = require('./plugins/esm-imports')

const handleError = () => process.exit(1)
const build = (outfile, options = {}) => {
  return esbuild
    .build({
      entryPoints: ['src/Stacks.js'],
      bundle: true,
      format: 'cjs',
      outfile: `dist/${outfile}`,
      plugins: [
        jscodeshift({
          exclude: ['node_modules/**'],
          plugins: [
            replaceLiterals,
            uncurryFunctions,
            rewriteProps,
            options.format === 'esm' ? esmImports : undefined,
          ].filter(Boolean),
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
