export default {
  server: {
    port: 3006, // default: 3006
    host: "0.0.0.0" // default: localhost
  },
  head: {
    title: "nuxt-app",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }, { name: "format-detection", content: "telephone=no" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV
  },
  privateRuntimeConfig: {
    API_SECRET: "${API_SECRET}"
  },
  css: ["~/assets/styles/fonts"],
  styleResources: { scss: "~/assets/styles/variables.scss" },
  plugins: ["~/plugins/filters", { src: "~/plugins/notifications", ssr: false }, "~/mixins/global"],
  components: {
    dirs: ["~/components", "~/components/business", "~/components/common"]
  },
  buildModules: ["@nuxtjs/eslint-module"],
  modules: ["@nuxtjs/style-resources", "cookie-universal-nuxt"],
  build: {},
  router: {
    middleware: "auth"
  }
}
