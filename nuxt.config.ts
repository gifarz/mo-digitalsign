// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "MO DIGITAL-SIGN"
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrlProd: process.env.BASE_URL_PROD,
      apiKeyProd: process.env.API_KEY_PROD,
      apiBaseUrlDev: process.env.BASE_URL_DEV,
      apiKeyDev: process.env.API_KEY_DEV,
      encKey: process.env.ENC_KEY,
      userList: process.env.USER_LIST
    }
  },
  typescript: {
    typeCheck: true
  },
  routeRules: {
    '/': { redirect: '/login' },
    '/main': { redirect: '/main/ca' },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
