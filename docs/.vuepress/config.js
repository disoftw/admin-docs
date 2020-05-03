module.exports = {
  title: "AAAIMX",
  description: "Student Chapter",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "https://www.aaaimx.org/img/other/aaaimx-ist.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    logo: "https://www.aaaimx.org/img/other/aaaimx-ist.png",
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2B5458' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://www.aaaimx.org/img/other/aaaimx-ist.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.aaaimx.org/img/other/aaaimx-ist.png',
        rel: 'shortcut icon'
      },
      'link',
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Ubuntu:wght@700&display=swap',
        rel: 'stylesheet'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'antdocs',
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
  
};