import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: []
  },
  mutations: {
    setNav(state, payload) {
      state.navList = payload.navList
    }
  },
  actions: {
    getNav({ commit }) {
      axios({
        url: '/api/nav'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setNav', navList: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
