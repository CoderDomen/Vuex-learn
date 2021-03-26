import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3
  },
  mutations: {
    add(state) {
      state.count++;
    },
    addNum(state,num){
      state.count += num
    },
    del(state) {
      state.count--;
    }
  },
  actions: {
    asyncAdd({commit},step){
      setTimeout(()=>{
        console.log('等待一秒');
        
      return  commit('addNum',step)

      },1000)
    }
      
  },
  modules: {}
});
