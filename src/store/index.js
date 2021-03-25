import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:3
  },
  mutations: {
    "ADDITION":(state)=>{
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})