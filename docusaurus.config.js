// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

// TODO Please change your repo name.
const repoName = 'repoName';

const config = {
  title: 'My Book',
  tagline: 'detail',
  url: 'https://your-site.com',
  baseUrl: `/${repoName}`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dev-in-book',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `https://github.dev/dev-in-book/${repoName}/blob/main`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `https://github.dev/dev-in-book/${repoName}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Book Nav Title',
        logo: {
          alt: 'dev-in-book',
          src: 'img/scope_logo_765.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'chapter_1',
            position: 'left',
            label: '📕 detail',
          },
          { to: '/blog', label: '👨‍👩‍👧‍👦 참여자', position: 'left' },
          {
            href: `https://github.dev/dev-in-book/${repoName}`,
            label: '⛳️ GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'BookName',
                to: '/docs/chapter_1',
              },
              {
                label: 'Member',
                href: '/blog/member',
              },
              {
                label: 'GitHub',
                href: `https://github.dev/dev-in-book/${repoName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dev in Book, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
