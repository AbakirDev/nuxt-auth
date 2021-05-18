require("dotenv").config();
import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'basic-auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
  ],
  axios: {
    baseURL: 'http://localhost:3002/', //process.env.BASE_URL,
    //proxyHeaders: false,
    //credentials: true,
  },
  server: {
    port: 8010,

    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },
  // auth: {
  //   localStorage: false,
  //   cookie: {
  //     options: {
  //       expires: 7
  //     }
  //   },
  //   strategies: {
  //     // local: {
  //     //   scheme: 'refresh',
  //     //   token: {
  //     //     property: 'access_token',
  //     //     maxAge: 1800,
  //     //     type: 'Bearer'
  //     //   },
  //     //   refreshToken: {
  //     //     property: 'refresh_token',
  //     //     data: 'refresh_token',
  //     //     maxAge: 60 * 60 * 24 * 30
  //     //   },
  //     //   user: {
  //     //     property: 'user',
  //     //     autoFetch: true
  //     //   },
  //     endpoints: {
  //       login: { url: 'auth/signin', method: 'post', propertyName: false },
  //       user: { url: 'auth/me', method: 'get', propertyName: false },
  //       logout: false
  //     },
  //     // autoLogout: false
  //   }
  // },
  auth: {
    // watchLoggedIn: true,

    // token: {
    //   prefix: "token."
    // },
    // localStorage: {
    //   prefix: "aaaaaaa."
    // },

    // cookie: {
    //   prefix: 'nuxt.',
    //   options: {
    //     path: '/'
    //   },

    // },

    strategies: {
      local: {
        // localStorage: false,
        // cookie: true,
        //   prefix: "Nuxt",

        // },
        // token: {
        //   required: false,
        //   type: false
        // },
        // token: {
        //   property: 'session',
        //   maxAge: 60 * 60
        // },
        // refreshToken: {
        //   property: 'Refresh',
        //   maxAge: 20160 * 60
        // },
        // tokenType: 'Bearer',

        endpoints: {
          login: { url: '/auth/signin', method: 'post', withCredentials: true, propertyName: false },
          //, withCredentials: true
          logout: false,
          user: { url: '/auth/me', method: 'get', withCredentials: true, propertyName: false }
          //withCredentials: true,
        },

      }
    }
  },

  router: {
    // racine des URL de l'application
    base: '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
