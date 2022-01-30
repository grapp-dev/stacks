const esbuild = require('esbuild')

const handleError = () => process.exit(1)
const build = (outfile, options = {}) => {
  const { format = 'cjs' } = options

  return esbuild
    .build({
      entryPoints: ['src/index.js'],
      bundle: true,
      format,
      outdir: `dist/${format}`,
      treeShaking: true,
      minify: false,
      logLevel: 'info',
      legalComments: 'none',
      external: ['react', 'react-native', 'wonka', 'react-fast-compare'],
      ...options,
    })
    .catch(handleError)
}

build('index.js')
build('index.js', { format: 'esm' })
