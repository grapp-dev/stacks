import { task, desc, option, setGlobalOptions } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

type Options = {
  readonly rebuild: boolean
  readonly file: string
}

desc('Transform *.gen.tsx files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
task<Options>('typescript', async ctx => {
  const files = await globby(
    ctx.options.file ? `src/**/Stacks*_${ctx.options.file}.gen.tsx` : 'src/**/*.gen.tsx',
  )
  const ts = files.join(' ')

  if (ctx.options.rebuild) {
    await ctx.exec('pnpm re:clean')
    await ctx.exec('pnpm re:build')
  }

  await ctx.exec(
    `pnpm jscodeshift --run-in-band --extensions=ts --parser=ts -t tools/typescript-codemods/index.ts ${ts}`,
  )

  const prettier = ctx.options.file ? `src/Stacks*_${ctx.options.file}.gen.tsx` : 'src/**/*.gen.tsx'

  await ctx.exec(`pnpm prettier --write ${prettier}`)
})

desc('Transform *.bs.js files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
task<Options>('javascript', async ctx => {
  const files = await globby(
    ctx.options.file ? `src/**/Stacks*_${ctx.options.file}.bs.js` : 'src/**/*.bs.js',
  )
  const bs = files.join(' ')

  if (ctx.options.rebuild) {
    await ctx.exec('pnpm re:clean')
    await ctx.exec('pnpm re:build')
  }

  await ctx.exec(`pnpm jscodeshift --run-in-band -t tools/javascript-codemods/pre/index.ts ${bs}`)
})

desc('Transform TS/JS files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
task<Options>('all', async ctx => {
  if (ctx.options.rebuild) {
    await ctx.exec('pnpm re:clean')
    await ctx.exec('pnpm re:build')
  }

  const commands = ['typescript', 'javascript'].map(command => {
    return ctx.run(command, {
      options: {
        file: ctx.options.file,
      },
    })
  })

  await Promise.all(commands)
})
