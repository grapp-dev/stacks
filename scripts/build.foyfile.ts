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
    'pnpm clean',
    'pnpm re:clean',
    'pnpm re:build',
    'pnpm transform all',
    'node esbuild.config.js',
  ])

  const files = await globby('dist/**/index.js')
  const js = files.join(' ')

  await ctx.exec(`pnpm jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`)

  await ctx.exec(['pnpm generate tsc', 'pnpm generate flow'])

  if (ctx.options.runTests) {
    await ctx.exec('pnpm test run -c')
  }
})

desc('Build for development purposes')
option('-t, --run-tests', 'run tests')
option('-f, --file <name>', 'transform a single file')
task<DevOptions>('dev', async ctx => {
  if (!ctx.options.file) {
    throw new Error('-f is required')
  }

  await ctx.exec([`pnpm transform all -r -f ${ctx.options.file}`, 'node esbuild.config.js'])

  await ctx.exec('pnpm generate tsc')

  if (ctx.options.runTests) {
    await ctx.exec(`pnpm test run -n ${ctx.options.file}`)
  }
})
