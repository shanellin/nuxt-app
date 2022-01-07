import Vue from 'vue'

const mixin = {
  methods: {},
  notifications: {
    showTestMessage: {
      title: "Notify Success",
      message: `Plugin's notifications is loaded`,
      type: "success"
    },
    noAuthMessage: {
      title: "No Authority Notice",
      message: `Yoy don't have permission to go tutorial page`,
      type: "warn"
    }
  }
}

Vue.mixin(mixin)
