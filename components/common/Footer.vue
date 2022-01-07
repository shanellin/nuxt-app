<template lang="pug">
  footer
    h2 {{"Footer's Text" | toUpperCase}}
</template>

<script>
export default {
  name: "FooterLayout",
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: calc(100% - 100px);
  padding: 10px 50px;
  background: black;
  h2 {
    margin: 0px;
    color: white;
    text-align: center;
  }
}
</style>
