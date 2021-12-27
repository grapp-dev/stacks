const esbuild = require('esbuild')

const { jscodeshift } = require('./plugins/esbuild-jscodeshift')
const { replaceLiterals } = require('./plugins/replace-literals')
const { uncurryFunctions } = require('./plugins/uncurry-functions')
const { rewriteProps } = require('./plugins/rewrite-props')
const { esmImports } = require('./plugins/esm-imports')

const handleError = () => process.exit(1)
const build = (outfile, options = {}) => {
  const { format = 'cjs' } = options

  return esbuild
    .build({
      entryPoints: ['src/index.js'],
      bundle: true,
      format,
      outdir: `dist/${format}`,
      plugins: [
        jscodeshift({
          exclude: ['node_modules/**'],
          plugins: [
            replaceLiterals,
            uncurryFunctions,
            rewriteProps,
            // options.format === 'esm' ? esmImports : undefined,
          ].filter(Boolean),
        }),
      ],
      treeShaking: true,
      minify: false,
      external: [],
      logLevel: 'info',
      legalComments: 'none',
      external: ['react', 'react-native'],
      ...options,
    })
    .catch(handleError)
}

build('index.js')
build('index.js', { format: 'esm' })
