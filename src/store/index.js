import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increaseCount(state) {
      state.count++
    },
    decreaseCount(state) {
      state.count--
    },
  },
  getters: {},
  actions: {
    increaseCount({ commit }) {
      commit('increaseCount')
    },
    decreaseCount({ commit }) {
      commit('decreaseCount')
    },
  },
})
