const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Clean Code',
    tagline: '클린코드 완독하기 프로젝트',
    url: 'https://..com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'scope', // Usually your GitHub org/user name.
    projectName: 'cleancode', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/scope-team/clean-code',
          },
          blog: {
            showReadingTime: true,
            editUrl: 'https://github.com/scope-team/clean-code',
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '클린코드',
          logo: {
            alt: 'scope',
            src: 'img/scope_logo_765.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'chapter_1',
              position: 'left',
              label: '📕 클린코드 완독하기 프로젝트',
            },
            { to: '/blog', label: '👨‍👩‍👧‍👦 참여자', position: 'left' },
            {
              href: 'https://github.com/scope-team/clean-code',
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
                  label: 'CleanCode',
                  to: '/docs/chapter_1',
                },
                {
                  label: 'Member',
                  href: '/blog/member',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/scope-team/clean-code',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Scope, Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
