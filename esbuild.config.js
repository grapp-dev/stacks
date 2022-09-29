const esbuild = require('esbuild')

const handleError = () => process.exit(1)
const build = async options => {
  const { format, outfile, ...rest } = options

  try {
    await esbuild.build({
      entryPoints: ['src/index.js'],
      bundle: true,
      format,
      outfile: `dist/${format}/${outfile}`,
      treeShaking: true,
      minify: false,
      logLevel: 'info',
      legalComments: 'none',
      mainFields: ['react-native', 'browser', 'module', 'main'],
      external: ['react', 'react-native', 'wonka'],
      ...rest,
    })
  } catch (err) {
    console.error(err)
    handleError()
  }
}

build({ format: 'cjs', outfile: 'index.js' })
build({ format: 'esm', outfile: 'index.mjs' })
