import Types from './types.js'
import allService from '@/service/load_services.js'
const { exampleService } = allService
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
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      const result = await exampleService.getData(payload, config)
      context.commit(Types.data, result.data)
      return Promise.resolve(result.data)
    },
    async list(context, payload) {
      // console.log('payload=', payload)
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      const result = await exampleService.getList(payload, config)
      context.commit(Types.list, result.data)
      return Promise.resolve(result.data)
    },
    async detail(context, payload) {
      const config = {
      }
      const result = await exampleService.getDetail(payload, config)
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
    listPaginatonConfig(state, getters, rootState, rootGetters) {
      return {
        'current-page': 1, // 当前第几页, 从 1 开始
        'page-sizes': [10, 20, 30, 40], // 可选择一页显示多少条
        'page-size': 10, // 一页显示多少条
        total: 0 // 总共有多少条
      }
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

    // test example store
    // 1.获取store的数据
    this.$store.getters['example/data']
    // 2.分发一个action
    this.$store.dispatch('example/data') // 返回promise对象
    this.$store.getters['example/data']
    this.$store.getters['example/add'](100)
 */
