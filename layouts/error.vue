<template lang="pug">
  div
    h1 {{"Page Not Found"}}
    router-link(to="/") {{"Go To Home Page."}}
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  margin: 0px;
}
</style>