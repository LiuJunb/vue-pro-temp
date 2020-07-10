import Types from './types.js'
import allService from '@/service/load_services.js'
import {
  PaginatonDefaultConfig
} from '@/config/index.js'
const { mainService } = allService
export default {
  // 1.启用命名空间
  namespaced: true,
  // 2.定义状态
  state: {
    list: {},
    deptList: [] // 部门列表
  },
  // 3.修改状态
  mutations: {
    // 这里的 `state` 对象是模块的局部状态
    [Types.list](state, payload) {
      state.list = payload
    },
    [Types.deptList](state, payload) {
      state.deptList = payload
    }
  },
  // 4.提交action，来修改状态
  actions: {
    async list(context, payload) {
      // console.log('payload=', payload)
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      const result = await mainService.getList(payload, config)
      context.commit(Types.list, result.data.data)
      return Promise.resolve(result.data.data)
    },

    // 获取部门列表
    async deptList(context, payload) {
      const config = {
      }
      const result = await mainService.getDeptList(payload, config)
      context.commit(Types.deptList, result.data.data)
      return Promise.resolve(result.data)
    }

  },
  // 5.获取定义的状态, 通过store.getters获取里面的函数,例如：store.getters.count
  getters: {
    // state 是获取局部状态；rootState是获取根状态
    list(state, getters, rootState, rootGetters) {
      const data = state.list
      if (data) {
        return data.content || []
      } else {
        return []
      }
    },
    listPaginatonConfig(state, getters, rootState, rootGetters) {
      const data = state.list
      if (data) {
        return {
          'current-page': data.pageNum, // 当前第几页, 从 1 开始
          'page-sizes': [10, 20, 30, 40], // 可选择一页显示多少条
          'page-size': data.pageSize, // 一页显示多少条
          total: data.total // 总共有多少条
        }
      } else {
        return { ...PaginatonDefaultConfig }
      }
    },
    deptList(state, getters, rootState, rootGetters) {
      return state.deptList || []
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
