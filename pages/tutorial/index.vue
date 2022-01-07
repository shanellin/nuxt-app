<template lang="pug">
  .main
    h1 {{"Tutorial Page"}}
    hr
</template>

<script>
export default {
  name: 'TutorialPage',
  head() {
    return {
      title: "Tutorial",
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  h1 {
    text-align: center;
  }
}
</style>