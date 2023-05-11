module.exports = {
  head: {
    title: 'vue-sns',//layout head 중복 제거
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
    }, {
      'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
    }, {
      hid: 'desc', name: 'description', content: 'vue-sns',
    }, {
      hid: 'ogtitle', name: 'og:title', content: 'vue-sns',
    }, {
      hid: 'ogdesc', name: 'og:description', content: 'vue-sns',
    }, {
      hid: 'ogtype', property: 'og:type', content: 'website',
    }, {
      hid: 'ogimage', property: 'og:image', content: 'https://vue.vuesns.com/vue-vuesns.png',
    }, {
      hid: 'ogurl', property: 'og:url', content: 'https://vue.vuesns.com',
    }],
    link: [{ rel: 'shortcut icon', href: '/vuesns.png' }],
  },
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],
  moment: {
    locales: ['ko'],
  },
  build: {
    analyze: false,
    extend(config, { isClient, isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }
      console.log('webpack', config, isServer, isClient);
    },
  },
  vuetify: {},
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://api.vuesns.com/api' : 'http://localhost:3085',
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.vuesns.com/api' : 'http://localhost:3085',
    https: false,
  },
  server: {
    port: process.env.PORT || 3081,
  },
};
