import StacksLogo from './components/svg/stacks-logo.svg';

import { Footer, Logo } from '@grapp/nextra-theme';
import { getDefaultConfig } from '@grapp/nextra-theme/config/next';

export default getDefaultConfig({
  title: 'Stacks',
  description:
    'A set of components for building layouts in React Native. Powered by React Native Unistyles.',
  github: 'https://github.com/grapp-dev/stacks',
  discord: 'https://discord.gg/DhS6neVJBK',
  docs: 'https://stacks.grapp.dev',
  logo: () => {
    return <Logo image={StacksLogo} title="Stacks" />;
  },
  footer: () => {
    return (
      <Footer
        github="https://github.com/grapp-dev/stacks"
        sections={[
          {
            title: 'FAQ',
            links: [
              {
                title: 'Stacks & Unistyles ❤️',
                url: '/docs',
              },
              {
                title: 'Migration Guide',
                url: '/docs/migration-guid',
              },
              {
                title: 'About Grapp.Dev',
                url: '/about',
              },
            ],
          },
          {
            title: 'Reference',
            links: [
              {
                title: 'Components',
                url: '/docs/components',
              },
              {
                title: 'Hooks',
                url: '/docs/hooks',
              },
              {
                title: 'Types',
                url: '/docs/types',
              },
            ],
          },
        ]}
      />
    );
  },
  hue: 176,
  saturation: 76,
});
