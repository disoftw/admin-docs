module.exports = {
  title: 'AAAIMX',
  description: 'Student Chapter',
  base: '/admin-docs/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    logo: 'https://www.aaaimx.org/img/sprites/aaai-transpeps.png',
    smoothScroll: true,
    nav: require('./config/nav'),
    sidebar: {},
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/zpfz/vuepress-creator',
    editLinks: false
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
        content: 'http://www.aaaimx.org/img/sprites/aaai-transpeps.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.aaaimx.org/img/favicons/favicon.ico',
        rel: 'shortcut icon'
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
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
