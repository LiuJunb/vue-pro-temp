import Vue from 'vue'
import Vuex from 'vuex'
import Types from './types.js'
import otherModules from './load-modules.js'
// console.log(otherModules)
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    detps: [],
    initData: {},
    sharedData: {}
  },
  mutations: {
    [Types.detps](state, payload) {
      state.detps = payload
    },
    [Types.initData](state, payload) {
      state.initData = payload
    },
    [Types.sharedData](state, payload) {
      state.sharedData = payload
    }
  },
  actions: {
    detps(context, payload) {
      context.commit(Types.detps, payload)
    },
    initData(context, payload) {
      context.commit(Types.initData, payload)
    },
    sharedData(context, payload) {
      context.commit(Types.sharedData, payload)
    }
  },
  getters: {
    detps(state, getters, rootState, rootGetters) {
      return state.detps
    },
    initData(state, getters, rootState, rootGetters) {
      return state.initData
    },
    sharedData(state, getters, rootState, rootGetters) {
      return state.sharedData
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
