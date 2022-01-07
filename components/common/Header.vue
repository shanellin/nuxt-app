<template lang="pug">
  header
    .header-logo
      img(src="~assets/images/logo.png")
      h2 {{"Header's Text" | toUpperCase}}
    .link-list
      router-link(to="/")
        p Home
      router-link(to="/tutorial")
        p Tutorial
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {}
  },
  computed: {},
  async beforeMount() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
header {
  width: calc(100% - 100px);
  padding: 10px 50px;
  background: black;
  display: inline-flex;
  justify-content: space-between;
  @include notDesktop {
    width: calc(100% - 20px);
    padding: 5px 10px;
  }
  h2 {
    color: white;
    text-align: center;
  }
  .link-list {
    display: grid;
    grid-template-columns: 80px 80px;
    grid-gap: 20px;
    align-content: center;
    @include notDesktop {
      grid-template-columns: 60px 60px;
      grid-gap: 10px;
    }
    p {
      text-align: center;
      color: white;
    }
  }
  .header-logo {
    display: inline-flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    h2 {
      margin: 0px 0px 0px 20px;
      align-self: center;
      @include notDesktop {
        margin: 0px 0px 0px 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
