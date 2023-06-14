module.exports = {
  head: {
    title: 'VueSns',
    meta: [{
      charset: 'UTF-8',
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
    }, {
      'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
    }, {
      name: 'description', content: 'VueSns',
    }, {
      name: 'og:title', content: 'VueSns',
    }, {
      name: 'og:description', content: 'VueSns',
    }, {
      property: 'og:type', content: 'website',
    }, {
      property: 'og:image', content: 'https://vue.VueSns.com/vue-VueSns.png',
    }],
    link: [
      { rel: 'shortcut icon', href: '/vue-VueSns.png' },
    ],
  },
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],
  vuetify: {},
  moment: {
    locales: ['ko'],
  },
  build: {
    analyze: false,
    extend(config, { isClient }) {
      console.log('webpack', config);
    },
  },
  axios: {
    browserBaseURL: 'https://api.vuesns.com/api',
    baseURL: 'https://api.vuesns.com/api',
    https: false,
  },
  server: {
    port: process.env.PORT || 3081,
  },
};
