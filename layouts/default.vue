<template lang="pug">
  div
    Header
    nuxt.body-component
    Footer
</template>

<script>
import _throttle from "lodash/throttle"
import _debounce from "lodash/debounce"
import { mapMutations } from "vuex"
export default {
  name: "IndexPage",
  data() {
    return {}
  },
  computed: {},
  created() {},
  async beforeMount() {},
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        window.addEventListener("scroll", this.onScroll)
        window.addEventListener("resize", this.onResize)
        this.onResize()
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    ...mapMutations({
      updateWindowWidth: "app/UPDATE_WINDOW_WIDTH",
      updateWindowTop: "app/UPDATE_WINDOW_TOP"
    }),
    onScroll: _throttle(function () {
      this.updateWindowTop(window.scrollY || document.documentElement.scrollTop)
    }, 100),
    onResize: _debounce(function () {
      this.updateWindowWidth(window.innerWidth)
    }, 400)
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  margin: 0px;
}
.body-component {
  min-height: 100vh;
  width: calc(100% - 60px);
  padding: 30px;
  @include notDesktop {
    width: calc(100% - 20px);
    padding: 5px 10px 10px 10px;
  }
}
</style>
