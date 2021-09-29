const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'An open-source community platform for modern developers.',
  tagline:
    'Within minutes, Orca gives you all the core features for building a social network, customer engagement, forum, or another type of community app.',
  url: 'https://getorca.org',
  baseUrl: 'https://elevensymbols.github.io/getorca.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ElevenSymbols', // Usually your GitHub org/user name.
  projectName: 'getorca.org', // Usually your repo name.
  url: 'https://elevensymbols.github.io.',
  trailingSlash: true,
  themeConfig: {
    gtag: {
      trackingID: 'G-S35Z7Y1YR1',
    },
    colorMode: {
      switchConfig: {
        darkIcon: '☽',
        darkIconStyle: {
          color: '#fff',
        },
        lightIcon: '☼',
        lightIconStyle: {
          color: '#fff',
        },
      },
    },
    footer: {
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'Installation',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'Configuration',
              to: 'docs/getting-started/configuration',
            },
          ],
        },
        {
          title: 'Deployment',
          items: [
            {
              label: 'Production mode',
              to: 'docs/deployment/production-mode',
            },
            {
              label: 'Deployment options',
              to: 'docs/deployment/deployment',
            },
          ],
        },
        {
          title: 'Contributing',
          items: [
            {
              label: 'Contributing guide',
              to: 'docs/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ElevenSymbols/getorca.org',
            },
            {
              label: 'Orca demo app',
              href: 'https://community.getorca.org/',
            },
          ],
        },
      ],
    },
    navbar: {
      title: 'Orca',
      logo: {
        alt: 'Orca Logo',
        src: 'https://bit.ly/3cjuNnr',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/installation',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://community.getorca.org/',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://github.com/ElevenSymbols/getorca.org',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ElevenSymbols/getorca.org/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
