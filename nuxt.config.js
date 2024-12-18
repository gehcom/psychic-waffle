export default {
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Ghost eShop',
    title: 'Loading...',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Loading
  loading: '~/components/Loading.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    // PWA
    '@nuxtjs/pwa',
  ],

  // i18n Module
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
      },
      {
        code: 'es',
        file: 'es-ES.js',
      },
      {
        code: 'jp',
        file: 'ja-JP.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: '#ff7d00',
        },
        light: {
          primary: '#ff7d00',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // PWA Configuration: https://go.nuxtjs.dev/config-pwa
  pwa: {
    manifest: {
      name: 'Ghost eShop',
      lang: 'en',
      useWebmanifestExtension: false,
      start_url: '/',
      theme_color: '#ff8400',
      display: 'standalone',
    },
    meta: {
      name: 'Ghost eShop',
      theme_color: '#ff8400',
      ogTitle: 'Ghost eShop',
      ogSiteName: 'Ghost eShop',
      ogImage: 'https://ghosteshop.com/icon.png',
      ogDescription: 'An alternative eShop for 3ds',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'default',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
}
