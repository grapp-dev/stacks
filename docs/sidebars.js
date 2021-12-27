module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/react-native-web',
        'getting-started/usage',
        'getting-started/breakpoints',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
    },
    {
      type: 'link',
      label: 'Go to API',
      href: '/api/components/box',
      className: 'sidebar-api-button',
    },
  ],
}
