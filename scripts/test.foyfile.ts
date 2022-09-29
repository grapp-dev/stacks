import { task, desc, option, setGlobalOptions } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

type Options = {
  readonly file: string
  readonly coverage: boolean
}

desc('Run tests')
option('-f, --file <name>', 'file')
option('-c, --coverage', 'coverage')
task<Options>('run', async ctx => {
  const coverage = ctx.options.coverage ? '--coverage' : ''

  const cmd = ['pnpm', 'jest', coverage]

  if (ctx.options.file) {
    const file = ctx.options.file ? `${ctx.options.file}.test.tsx` : '*.test.tsx'

    const files = await globby(`__tests__/${file}`)

    cmd.push(...files)

    await ctx.exec(cmd.join(' '))
    return
  }

  await ctx.exec(cmd.join(' '))
})
