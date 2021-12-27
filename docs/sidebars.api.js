const fs = require('fs')
const path = require('path')

const makeSidebar = names =>
  names.map(name => {
    return {
      type: 'doc',
      id: name,
      className: `sidebar-api sidebar-api-${name}`,
    }
  })

const re = /.mdx?/
const resolveFiles = dir => {
  const files = fs.readdirSync(path.resolve(__dirname, 'api', dir), { encoding: 'utf-8' })
  return files
    .map(file => file.replace(re, ''))
    .sort()
    .map(file => [dir, file].join('/'))
}

module.exports = {
  sidebar: [
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
  ],
}
