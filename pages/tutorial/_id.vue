<template lang="pug">
  .main
    h1 {{"Tutorial Page - "}}{{$route.params.id}}
    hr
    div
      h3 {{"#6 - Fetch test:"}}
      h4 {{`store's count + ${$route.params.id} = `}}{{count}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TutorialDetailPage',
  validate({ params }) {
    // 必須是 number 類型
    return /^\d+$/.test(params.id)
  },
  fetch({ store, params }) {
      store.commit('app/ADD_COUNT', params.id)
  },
  computed: {
    ...mapState({
      count: (state) => state.app.count,
    }),
  },
  created() {
    // if (process.server) return
    // console.log(this.count);
  },
  methods: {
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