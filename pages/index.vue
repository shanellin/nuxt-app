<template lang="pug">
  .main
    h1 {{"Home Page"}}
    hr
    div
      h3 {{"#1 - Plugin test:"}}
      button(@click="showTestMessage()") {{"show login notify"}}
    div
      h3 {{"#2 - Middleware test:"}}
      button(@click="setCookie()") {{"Set Tutorial's Auth Cookie"}}
      button(@click="removeCookie()") {{"Reomve Tutorial's Auth Cookie"}}
    div
      h3 {{"#3 - Store test:"}}
      h4 {{"windowWidth: "}}{{windowWidth}}
      h4 {{"windowTop: "}}{{windowTop}}
      h4 {{"isMobile: "}}{{isMobile}}
    div
      h3 {{"#4 - Dynamic route test:"}}
      div
        router-link(to="/tutorial/666") {{"Go to tutorial - 666"}}
      div
        router-link(to="/tutorial/error") {{"Go to tutorial - error"}}
    div
      h3 {{"#5 - AsyncData test:"}}
      h4 {{"Load From Server: "}}{{loadFromServer}}
      h4(v-if="host") {{"User's header host: "}}{{host}}
      button(@click="reloadPage()") {{"Refrsh Page"}}
    div
      h3 {{"#6 - Fetch test:"}}
      div
        router-link(to="/tutorial/100") {{"Go to tutorial - 100"}}
    div
      h3 {{"#7 - nuxtServerInit test:"}}
      button(@click="removeCookie();reloadPage()") {{"Reomve Tutorial's Auth Cookie & Refrsh Page"}}
    div
      h3 {{"#8 - Runtime Config test:"}}
      h4 {{"APP_ENV (show in Client or Server render): "}}{{APP_ENV}}
      h4 {{"APP_ENV (show in Server render): "}}{{API_SECRET}}
      button(@click="reloadPage()") {{"Refrsh Page"}}
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex"
export default {
  name: "IndexPage",
  asyncData({ req, $config: { APP_ENV, API_SECRET } }) {
    const response = { loadFromServer: false, APP_ENV, API_SECRET }
    if (process.server) {
      response.host = req.headers.host
      response.loadFromServer = true
    }
    return response
  },
  data() {
    return {
      loadFromServer: false,
      host: false,
      API_SECRET: "",
      APP_ENV: ""
    }
  },
  computed: {
    ...mapState({
      showAuthDenyNotify: (state) => state.showAuthDenyNotify,
      windowTop: (state) => state.app.windowTop,
      windowWidth: (state) => state.app.windowWidth
    }),
    ...mapGetters({
      isMobile: "app/isMobile"
    })
  },
  created() {
    // if (process.server) return
  },
  async beforeMount() {},
  mounted() {
    if (this.showAuthDenyNotify) {
      this.noAuthMessage()
      this.setShowAuthDenyNotify(false)
    }
  },
  methods: {
    ...mapMutations({
      setShowAuthDenyNotify: "SHOW_AUTH_DENY_NOTIFY"
    }),
    setCookie() {
      this.$cookies.set("tutorial-auth", "pass")
    },
    removeCookie() {
      this.$cookies.remove("tutorial-auth")
    },
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  h1 {
    text-align: center;
  }
  h4 {
    margin: 10px 0px;
  }
}
</style>
