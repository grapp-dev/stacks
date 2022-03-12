const path = require('path')
const root = require('../package.json')

module.exports = {
  title: 'Stacks',
  tagline:
    'A set of useful components to help you build and maintain React Native (Web too) layouts with ease',
  url: 'https://mobily.github.io',
  baseUrl: '/stacks/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mobily',
  projectName: 'stacks',
  scripts: [
    {
      src: 'https://cdn.splitbee.io/sb.js',
      async: true,
    },
  ],
  themeConfig: {
    image: 'img/stacks-frame.png',
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      title: `v${root.version}`,
      logo: {
        alt: 'Stacks',
        src: 'img/stacks-logo.png',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api/components/box',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://www.buymeacoffee.com/utSC0k7',
          label: 'Buy me a coffee ❤️',
          position: 'right',
        },
        {
          href: 'https://github.com/mobily/stacks',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
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
            {
              label: 'Dev.to',
              href: 'https://dev.to/mobily',
            },
          ],
        },
      ],
      copyright: 'Built with Docusaurus ❤️',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  themes: [['@docusaurus/theme-live-codeblock', { noInline: true }]],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: ['/docs', '/api'],
        docsDir: ['docs', 'api'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.api.js'),
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/mobily/stacks/edit/master/docs/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
}
