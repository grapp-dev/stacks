const path = require('path')
const root = require('../package.json')

module.exports = {
  title: 'Stacks',
  tagline: '⚡ Build React Native layouts quickly with ease and fun.',
  url: 'https://mobily.github.io',
  baseUrl: '/stacks/',
  favicon: 'img/favicon.ico',
  organizationName: 'mobily',
  projectName: 'stacks',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: `Stacks (v${root.version})`,
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          href: 'https://www.buymeacoffee.com/utSC0k7',
          label: 'Sponsor ❤️',
          position: 'right',
        },
        {
          href: 'https://github.com/mobily/stacks',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://twitter.com/__marcin_',
          label: 'Twitter',
          position: 'right',
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
              to: 'docs/getting-started',
            },
            {
              label: 'Components',
              to: 'docs/components/box',
            },
            {
              label: 'Hooks',
              to: 'docs/hooks/use-current-breakpoint',
            },
            {
              label: 'Other',
              to: 'docs/other/stacks-provider',
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
  plugins: [
    '@docusaurus/theme-live-codeblock',
    path.resolve(__dirname, 'plugins', 'react-native-web-plugin'),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
