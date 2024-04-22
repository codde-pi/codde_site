// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "C.O.D.D.E. Pi®",
  tagline: "The all-in-one app for your next DIY project",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://codde-pi.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "codde-pi", // Usually your GitHub org/user name.
  projectName: "codde_site", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "codde_doc",
          routeBasePath: "codde_doc",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/globals.scss"),
            require.resolve("./src/css/layouts.scss"),
            require.resolve("./src/css/variables.module.scss"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        style: "dark",
        title: "C.O.D.D.E. Pi",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "News", position: "left" },
          { to: "/#download", label: "Download", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/codde-pi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: { defaultMode: "dark", disableSwitch: true },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/VvQfNWZPw3",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/codde_pi",
              },
              {
                label: "Mastodon",
                href: "https://mastodon.social/@coddepi",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/codde_pi/",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/codde-pi/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mathis LECOMTE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
