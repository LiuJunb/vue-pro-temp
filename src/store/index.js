import Vue from 'vue'
import Vuex from 'vuex'
import Types from './types.js'
import otherModules from './load-modules.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    detps: [],
    initData: {}
  },
  mutations: {
    [Types.detps](state, payload) {
      state.detps = payload
    },
    [Types.initData](state, payload) {
      state.initData = payload
    }
  },
  actions: {
    detps(context, payload) {
      context.commit(Types.detps, payload)
    },
    initData(context, payload) {
      context.commit(Types.initData, payload)
    }
  },
  getters: {
    detps(state, getters, rootState, rootGetters) {
      return state.detps
    },
    initData(state, getters, rootState, rootGetters) {
      return state.initData
    }
  },
  modules: {
    ...otherModules
    // main_example: {
    //   namespaced: ''
    //   state: {
    //   },
    //   mutations: {
    //   },
    //   actions: {
    //   },
    // }
  }
})
