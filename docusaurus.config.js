const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Refactoring 2.0',
    tagline: '리팩터링2.0 완독하기 프로젝트',
    url: 'https://..com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'dev-in-book', // Usually your GitHub org/user name.
    projectName: 'refactoring', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/dev-in-book/refactoring',
          },
          blog: {
            showReadingTime: true,
            editUrl: 'https://github.com/dev-in-book/refactoring',
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '리팩터링 2.0',
          logo: {
            alt: 'dev-in-book',
            src: 'img/refactoring.jpg',
          },
          items: [
            {
              type: 'doc',
              docId: 'chapter_1',
              position: 'left',
              label: '📕 리팩터링 완독하기 프로젝트',
            },
            { to: '/blog', label: '👨‍👩‍👧‍👦 참여자', position: 'left' },
            {
              href: 'https://github.com/dev-in-book/refactoring',
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
                  label: 'Refactoring 2.0',
                  to: '/docs/chapter_1',
                },
                {
                  label: 'Member',
                  href: '/blog/member',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/dev-in-book/refactoring',
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
  }
);
