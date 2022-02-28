import { task, desc, option, setGlobalOptions } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

type Options = {
  readonly runTests: boolean
}

type DevOptions = {
  readonly runTests: boolean
  readonly file: string
}

desc('Build dist')
option('-t, --run-tests', 'run tests')
task<Options>('dist', async ctx => {
  await ctx.exec([
    'yarn clean',
    'yarn re:clean',
    'yarn re:build',
    'yarn transform all',
    'node esbuild.config.js',
  ])

  const files = await globby('dist/**/index.js')
  const js = files.join(' ')

  await ctx.exec(['yarn generate tsc', 'yarn generate flow'])

  if (ctx.options.runTests) {
    await ctx.exec('yarn test run -c')
  }
})

desc('Build for development purposes')
option('-t, --run-tests', 'run tests')
option('-f, --file <name>', 'transform a single file')
task<DevOptions>('dev', async ctx => {
  if (!ctx.options.file) {
    throw new Error('-f is required')
  }

  await ctx.exec([`yarn transform all -r -f ${ctx.options.file}`, 'node esbuild.config.js'])

  await ctx.exec('yarn generate tsc')

  if (ctx.options.runTests) {
    await ctx.exec(`yarn test run -n ${ctx.options.file}`)
  }
})
