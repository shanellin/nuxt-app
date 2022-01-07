import Vue from 'vue'

Vue.filter('toUpperCase', (string) => {
  if (string) {
    return string.toUpperCase()
  }
  return string
})
