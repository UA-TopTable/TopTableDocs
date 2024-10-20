// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Table Top',
  tagline: 'A quick and easy way to book a table at a restaurant',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: '', // L'URL de ton site GitHub Pages
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TopTableDocs/', // Assure-toi de remplacer par le nom exact de ton dépôt GitHub

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UA-TopTable', // Ton nom d'utilisateur GitHub
  projectName: 'TopTableDocs', // Le nom de ton dépôt GitHub
  deploymentBranch: 'gh-pages', // Branche utilisée pour GitHub Pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/UA-TopTable/TopTableDocs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/UA-TopTable/TopTableDocs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Table Top',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Useful Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/UA-TopTable',
              },
              {
                label: 'Jira',
                href: 'https://toptable.atlassian.net/jira/software/projects/TABLETOP/boards/1/backlog',
              }
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
