import Types from './types.js'
import loginService from '@/service/login/index.js'
export default {
  // 1.启用命名空间
  namespaced: true,
  // 2.定义状态
  state: {
    user: {},
    data: {},
    list: {},
    detail: {}
  },
  // 3.修改状态
  mutations: {
    // 这里的 `state` 对象是模块的局部状态
    [Types.user](state, payload) {
      state.user = payload
    },
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
    async login(context, { name, age }) {
      const user = await loginService.login(name, age)
      context.commit(Types.user, user.data)
      return Promise.resolve(user.data)
    },
    data(context, payload) {
      // context 对象 与 store对象有相同的方法；context != store
      // 注意：局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
      context.commit(Types.data, payload)
    },
    list(context, payload) {
      context.commit(Types.list, payload)
    },
    detail(context, payload) {
      context.commit(Types.detail, payload)
    }
  },
  // 5.获取定义的状态, 通过store.getters获取里面的函数,例如：store.getters.count
  getters: {
    // state 是获取局部状态；rootState是获取根状态
    user(state, getters, rootState, rootGetters) {
      return state.user
    },
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
