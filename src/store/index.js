import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarActiveState: false,
  },
  mutations: {
    toggleSidebarActiveState(state) {
      state.sidebarActiveState = !state.sidebarActiveState;
    }
  },
  actions: {
  },
  modules: {
  }
})
