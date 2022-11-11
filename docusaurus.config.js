// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Duckie Open Source",
  tagline: "덕키는 모든 제품을 오픈소스로 공개합니다.",
  url: "https://opensource.duckie.team",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "duckie-team", // Usually your GitHub org/user name.
  projectName: "duckie-opensource", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/duckie-team/duckie-opensource",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/duckie-team/duckie-opensource",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          src: "img/title.svg",
        },
        items: [
          // { to: "/about", label: "About", position: "right" },
          { to: "/project", label: "Project", position: "right" },
          { to: "/team", label: "Team Duckie", position: "right" },
        ],
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://opensource.duckie.team",
        },
        {
          property: "og:title",
          content: "Duckie Open Source",
        },
        {
          property: "og:image",
          content: "https://opensource.duckie.team/duckie.png",
        },
        {
          property: "og:description",
          content: "덕키는 모든 제품을 오픈소스로 공개합니다.",
        },
        {
          property: "og:site_name",
          content: "duckie open source",
        },
      ],
    }),
};

module.exports = config;
