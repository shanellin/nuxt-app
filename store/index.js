export const state = () => ({
  showAuthDenyNotify: false
})

export const getters = {
}

export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const tutorialAuth = app.$cookies.get("tutorial-auth")
    if (!tutorialAuth) {
      commit("SHOW_AUTH_DENY_NOTIFY", true)
    }
  }
}

export const mutations = {
  SHOW_AUTH_DENY_NOTIFY(state, payload) {
    state.showAuthDenyNotify = payload
  }
}
