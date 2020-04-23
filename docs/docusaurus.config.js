const { shortcodes } = require('./core/shortcodes')

module.exports = {
  title: 'Stacks',
  tagline: '⚡ Build React Native views blazingly fast',
  url: 'https://mobily.github.io',
  baseUrl: '/stacks/',
  favicon: false,
  organizationName: 'mobily',
  projectName: 'stacks',
  themeConfig: {
    navbar: {
      title: 'Stacks',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        {
          to: 'docs/motivation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/mobily/stacks',
          label: 'Github',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/motivation',
            },
            {
              label: 'Components',
              to: 'docs/stack',
            },
            {
              label: 'Hooks',
              to: 'docs/use-stacks',
            },
            {
              label: 'Other',
              to: 'docs/provider',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Pull Requests',
              href: 'https://github.com/mobily/stacks/pulls',
            },
            {
              label: 'Issues',
              href: 'https://github.com/mobily/stacks/issues',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/__marcin_',
            },
            {
              label: 'Github',
              href: 'https://github.com/mobily',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus ❤️`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [
            require('remark-containers'),
            [require('remark-shortcodes'), { startBlock: '[[', endBlock: ']]' }],
            shortcodes,
          ],
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
}
