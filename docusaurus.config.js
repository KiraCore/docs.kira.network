// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

const config = {
  title: "KIRA",
  tagline: "Public documentation of the KIRA network",
  url: "https://docs.kira.network",
  favicon: "https://ipfs.kira.network/ipfs/QmRqfyEvBoSj6sapjyhQqTJfwQPmsDkMQrxyqtTC6bZcTU",
  organizationName: "KiraCore",
  projectName: "docs.kira.network",
  deploymentBranch: "docs.kira.network",

  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default', // == 'default' if omitted
        path: 'tabs/learn',
        routeBasePath: '/learn/',
        sidebarPath: undefined,
        sidebarCollapsed: true,
        showLastUpdateTime: true,
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
        editUrl: ({docPath, permalink}) => {
          docPath = docPath.toLowerCase();
          const repoUrl = `https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=${permalink}&page-local=${docPath}`;
          return repoUrl;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'tabs/docs',
        routeBasePath: '/docs/',
        sidebarPath: undefined,
        showLastUpdateTime: true,
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
        editUrl: ({docPath, permalink}) => {
          docPath = docPath.toLowerCase();
          const repoUrl = `https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=${permalink}&page-local=${docPath}`;
          return repoUrl;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'node-operators',
        path: 'tabs/node-operators',
        routeBasePath: '/node-operators/',
        sidebarPath: undefined,
        sidebarCollapsed: true,
        showLastUpdateTime: true,
        editUrl: ({docPath, permalink}) => {
          docPath = docPath.toLowerCase();
          const repoUrl = `https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=${permalink}&page-local=${docPath}`;
          return repoUrl;
        },
      },
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'developers',
    //     path: 'tabs/developers',
    //     routeBasePath: '/developers/',
    //     sidebarPath: undefined,
    //     sidebarCollapsed: true,
    //     showLastUpdateTime: true,
    //     editUrl: ({docPath, permalink}) => {
    //       docPath = docPath.toLowerCase();
    //       const repoUrl = `https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=${permalink}&page-local=${docPath}`;
    //       return repoUrl;
    //     },
    //   },
    // ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // Langage options (this is used to custom certain things such as "Edit this page" button)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: [
          require.resolve("./css/kira.css"),
          require.resolve("./css/docu-notion-styles.css"),
        ],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // language: ["en", "fr"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
  themeConfig:
    {
      metadata: [
        {
          name: "keywords",
          content: "Kira Network, KEX, documentation, help, INTERX, MIRO, KIRA, SEKAI",
        },
      ],
      sitemap: {
        // https://www.sitemaps.org/protocol.html#xmlTagDefinitions
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: [],
      },
      navbar: {
        //title: "KIRA | Docs test",
        logo: {
          alt: "Logo",
          src: "https://ipfs.kira.network/ipfs/QmcNyQRYDBD6qBH19Ab7eqtWZ59nLqBjvM4BCwnkexd78y/LOGO-SYMBOL/KIRA-WT-V2.svg",
          href: '/learn/',
        },

        items: [
          // Langage selection dropdown menu
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            type: 'doc',
            label: 'Learn',
            docId: 'what-is-kira/introduction',
            docsPluginId: 'default', // default because learn plugin id is not defined
            position: 'left',
            activeBaseRegex: '^/learn/',
          },
          {
            type: 'doc',
            label: 'Docs',
            docId: 'introduction',
            docsPluginId: 'docs',
            position: 'left',
            activeBaseRegex: '^/docs/',
          },
          {
            type: 'dropdown',
            label: 'Guides',
            position: 'left',
            // activeBaseRegex: '^/testnet/', TODO
            items: [
              {
                type: 'doc',
                docId: 'introduction',
                label: 'Node Operators',
                docsPluginId: 'node-operators',
                activeBaseRegex: '^/node-operators/',
              }
              // {
              //   type: 'doc',
              //   docId: 'introduction',
              //   label: 'Developers',
              //   docsPluginId: 'developers',
              //   activeBaseRegex: '^/developers/',
              // },
            ]
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            activeClassName: 'navbar__link--active',
            items: [
              {
                label: 'Ecosystem',
                to: '/resources/ecosystem/',          
              },
              {
                label: 'Evangelist',
                to: '/resources/evangelist/',      
              },
              {
                label: 'Links',
                to: '/resources/links/',          
              },
              {
                label: 'Blog',
                to: 'https://blog.kira.network',
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            ]
          },
          {
            href: "https://github.kira.network",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://discord.kira.network",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Official Discord Channel",
          },
          {
            href: "https://tg.kira.network",
            position: "right",
            className: "header-tg-link", 
            "aria-label": "Official Telegram Channel",
          },
          {
            href: "https://twitter.kira.network",
            position: "right",
            className: "header-x-link",
            "aria-label": "Twitter",
          },
        ],
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },

      prism: {
        darkTheme: themes.dracula,
        additionalLanguages: ['bash','go'],
      },
    },
};

module.exports = config;