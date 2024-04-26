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
  trailingSlash: false,
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/globals.scss"),
            require.resolve("./src/css/layouts.module.scss"),
            require.resolve("./src/css/variables.module.scss"),
            require.resolve("./src/css/utils.module.scss"),
          ],
        },
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://codde-pi.com',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Mathis LECOMTE',
        url: 'https://codde-pi.com/',
        logo: 'https://codde-pi.com/img/logo.svg',
      }),
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: '"diy", "raspberrypi", "python", "rust", "blockchain", "3d", "three.js", "embedded", "iot"' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      // Replace with your project's social card
      image: "img/codde_pi_introduction_4_3.webp",
      navbar: {
        style: "dark",
        title: "C.O.D.D.E. Pi®",
        logo: {
          alt: "CODDE Pi Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/#stores", label: "Download", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          { label: "Join us", position: "right", href: "/#discord" },
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
              {
                label: "CODDE Example",
                to: "https://github.com/codde-pi/codde_example",
              },
            ],
          },
          {
            title: "Social network",
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
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCzA_kHTRtq1MDVjzJNoQOaA",
              }
            ],
          },
          {
            title: "More",
            items: [
              /* {
                label: "Contact us",
                to: "/contact",
              }, */
              {
                label: "GitHub",
                href: "https://github.com/codde-pi/",
              },
              { label: "Community (soon)", href: "#", },
              { label: "CGU", href: "/cgu" },
              { label: "Privacy", href: "/privacy" }
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
