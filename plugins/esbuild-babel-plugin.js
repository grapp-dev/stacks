const babel = require('@babel/core')
const fs = require('fs')
const path = require('path')

exports.babel = (options = {}) => ({
  name: 'babel',
  setup(build, { transform } = {}) {
    const { filter = /.*/, namespace = '', config = {} } = options

    const transformContents = ({ args, contents }) => {
      const babelOptions = babel.loadOptions({
        ...config,
        filename: args.path,
        caller: {
          name: 'esbuild-plugin-babel',
          supportsStaticESM: true,
        },
      })

      return new Promise((resolve, reject) => {
        babel.transform(contents, babelOptions, (error, result) => {
          error ? reject(error) : resolve({ contents: result.code })
        })
      })
    }

    if (transform) {
      return transformContents(transform)
    }

    build.onLoad({ filter, namespace }, async args => {
      const contents = await fs.promises.readFile(args.path, 'utf8')
      return transformContents({ args, contents })
    })
  },
})
