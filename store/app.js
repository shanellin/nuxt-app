export const state = () => ({
  windowWidth: 1000,
  windowTop: 0,
  count: 0
})

export const getters = {
  isMobile(state) {
    return state.windowWidth < 1000
  }
}

export const actions = {
}

export const mutations = {
  UPDATE_WINDOW_WIDTH(state, payload) {
    state.windowWidth = payload
  },
  UPDATE_WINDOW_TOP(state, payload) {
    state.windowTop = payload
  },
  ADD_COUNT(state, payload) {
    state.count = state.count + parseInt(payload)
  }
}
