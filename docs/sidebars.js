const fs = require('fs')
const path = require('path')

const re = /.mdx?/
const resolveFiles = dir => {
  const files = fs.readdirSync(path.resolve(__dirname, 'docs', dir), { encoding: 'utf-8' })
  return files
    .map(file => file.replace(re, ''))
    .sort()
    .map(file => [dir, file].join('/'))
}

module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'configuration',
    },
    {
      type: 'doc',
      id: 'breakpoints',
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: resolveFiles('components'),
    },
    {
      type: 'category',
      label: 'Hooks',
      collapsed: false,
      items: resolveFiles('hooks'),
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: resolveFiles('other'),
    },
    {
      type: 'doc',
      id: 'changelog',
    },
  ],
}
