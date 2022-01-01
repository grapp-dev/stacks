import { task, desc, option, strict } from 'foy'
import * as globby from 'globby'

type Options = {
  readonly rebuild: boolean
  readonly file: string
}

desc('Transform *.gen.tsx files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
strict()
task<Options>('typescript', async ctx => {
  const files = await globby(
    ctx.options.file ? `src/**/Stacks*_${ctx.options.file}.gen.tsx` : 'src/**/*.gen.tsx',
  )
  const ts = files.join(' ')

  if (ctx.options.rebuild) {
    await ctx.exec('yarn re:clean')
    await ctx.exec('yarn re:build')
  }

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band --extensions=ts --parser=ts -t tools/typescript-codemods/index.ts ${ts}`,
  )

  const prettier = ctx.options.file ? `src/Stacks*_${ctx.options.file}.gen.tsx` : 'src/**/*.gen.tsx'

  await ctx.exec(`yarn prettier --write ${prettier}`)
})

desc('Transform *.bs.js files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
strict()
task<Options>('javascript', async ctx => {
  const files = await globby(
    ctx.options.file ? `src/**/Stacks*_${ctx.options.file}.bs.js` : 'src/**/*.bs.js',
  )
  const bs = files.join(' ')

  if (ctx.options.rebuild) {
    await ctx.exec('yarn re:clean')
    await ctx.exec('yarn re:build')
  }

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/index.ts ${bs}`,
  )
})

desc('Transform TS/JS files')
option('-r, --rebuild', 'rebuild rescript files')
option('-f, --file <name>', 'select a single file')
strict()
task<Options>('all', async ctx => {
  if (ctx.options.rebuild) {
    await ctx.exec('yarn re:clean')
    await ctx.exec('yarn re:build')
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
