/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Porsche specialists',
    title: 'Copse Automotive',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, folow' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Copse automotive offer a full range of services from routine maintenance right through to restoration and performance parts.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Copse Automotive Porsche specialists' },
      { property: 'og:image', content: 'https://copseauto.co.uk/Copse.jpg' },
      {
        property: 'og:description',
        content:
          'Copse automotive offer a full range of services from routine maintenance right through to restoration and performance parts.',
      },
      { property: 'og:url', content: 'https://copseauto.co.uk' },
      { property: 'og:site_name', content: 'Copse Automotive' },
      {
        property: 'twitter:title',
        content: 'Copse Automotive Porsche specialists',
      },
      {
        property: 'twitter:description',
        content:
          'Copse automotive offer a full range of services from routine maintenance right through to restoration and performance parts.',
      },
      {
        property: 'twitter:image',
        content: 'https://copseauto.co.uk/Copse.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'http://copseauto.co.uk' },
    ],
    script: [
      { src: 'https://apps.elfsight.com/p/platform.js', defer: true },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-scroll-reveal', ssr: false }],

  ssr: true,

  router: {
    middleware: ['auth'],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          error: '#A70000',
          background: '#000000',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    transpile: ['ckeditor'],
  },
}
