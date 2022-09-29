import { task, desc, setGlobalOptions } from 'foy'
import { compiler, beautify } from 'flowgen'

import * as globby from 'globby'
import * as path from 'path'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

type TSCOptions = {
  readonly esm: boolean
  readonly cjs: boolean
}

desc('Generate Flow types')
task('flow', async ctx => {
  const entryFile = await ctx.fs.readFile('index.js.flow', { encoding: 'utf-8' })
  const content = entryFile.replace(/.\/dist\//g, './')
  const files = await globby('dist/types/**/*.d.ts')

  await ctx.fs.writeFile('dist/types/index.js.flow', content, { encoding: 'utf-8' })

  const defs = files.map(filename => {
    const fullpath = path.resolve(__dirname, '..', filename)
    const flowdef = beautify(compiler.compileDefinitionFile(fullpath))
    const basename = path.basename(fullpath, '.d.ts')
    const filepath = path.dirname(fullpath)
    const definition = flowdef.replace(/import\s/g, 'import type ')

    return ctx.fs.writeFile(
      path.join(filepath, `${basename}.js.flow`),
      ['// @flow', definition].join('\n\n'),
      { encoding: 'utf-8' },
    )
  })

  await Promise.all(defs)
})

desc('Generate contributors in README.md')
task('contributors', async ctx => {
  await ctx.exec('pnpm all-contributors generate')
})

desc('Generate tsc')
task<TSCOptions>('tsc', async ctx => {
  await ctx.exec('pnpm tsc --outDir ./dist/types')
})
