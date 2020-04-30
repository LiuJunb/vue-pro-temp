import Types from './types.js'
import warningService from '@/service/main/warning/index.js'
export default {
  // 1.启用命名空间
  namespaced: true,
  // 2.定义状态
  state: {
    data: {},
    list: {},
    detail: {}
  },
  // 3.修改状态
  mutations: {
    // 这里的 `state` 对象是模块的局部状态
    [Types.data](state, payload) {
      state.data = payload
    },
    [Types.list](state, payload) {
      state.list = payload
    },
    [Types.detail](state, payload) {
      state.detail = payload
    }
  },
  // 4.提交action，来修改状态
  actions: {
    async data(context, payload) {
      const result = await warningService.getData(payload)
      context.commit(Types.data, result.data)
      return Promise.resolve(result.data)
    },
    async list(context, payload) {
      const result = await warningService.getList(payload)
      context.commit(Types.list, result.data)
      return Promise.resolve(result.data)
    },
    async detail(context, payload) {
      const result = await warningService.getDetail(payload)
      context.commit(Types.detail, result.data)
      return Promise.resolve(result.data)
    }
  },
  // 5.获取定义的状态, 通过store.getters获取里面的函数,例如：store.getters.count
  getters: {
    // state 是获取局部状态；rootState是获取根状态
    data(state, getters, rootState, rootGetters) {
      return state.data
    },
    list(state, getters, rootState, rootGetters) {
      return state.list
    },
    detail(state, getters, rootState, rootGetters) {
      return state.list
    }
  }
}
/**
 *
    // test global store
    // 1.获取store的数据
    this.$store.getters.depts)
    // 2.分发一个action
    this.$store.dispatch('depts') // 返回promise对象
    this.$store.getters.depts)

    // test login store
    // 1.获取store的数据
    this.$store.getters['login/data']
    // 2.分发一个action
    this.$store.dispatch('login/data') // 返回promise对象
    this.$store.getters['login/data']
    this.$store.getters['login/add'](100)
 */
