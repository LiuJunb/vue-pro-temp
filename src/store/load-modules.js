/**
 * 自动加载store的二级 modules
 */
const modules = {}
const allModules = require.context('@/store/modules/', true, /index\.(js|ts)$/)
// ["./login/index.js", "./main/books/index.js", "./main/goods/index.js", "./register/index.js"]
// console.log('allModules=', allModules.keys())
allModules.keys().forEach((item, index, array) => {
  // item = ./login/index.js => login/index.js
  // item = ./main/books/index.js => main/books/index.js
  const module_path = item.substr(2)
  const module = require(`@/store/modules/${module_path}`)
  const moduleNames = module_path.split('/') // [login, index.js] - [main, books, index.js]
  moduleNames.pop()
  const key = moduleNames.join('_')
  modules[key] = module.default
})
/**
 * modules:{
    goods :{
         // 0.启用命名空间
         namespaced: true,
         // 1.定义状态
         state: {
           data: {}, // 列表数据
           recordDetail: {} // 详情数据
         },
         // 2.修改状态
         mutations: {
           // 这里的 `state` 对象是模块的局部状态
           [Types.addData](state, payload) {
             state.data = payload
           },
           [Types.recordDetail](state, payload) {
             state.recordDetail = payload
           }
         },
         // 3.提交action，来修改状态
         actions: {
           async list(context, payload) {
             // context 对象 与 store对象有相同的方法；context != store
             // 注意：局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
             const config = {
               headers: {
                 'Content-Type': 'application/json;charset=utf-8'
               }
             }
             try {
               const result = await interrogaterecordService.list(payload, config)
               Console.log('result=', result)
               context.commit(Types.addData, result.data.data)
               return Promise.resolve(result.data.data)
             } catch (err) {

             }
           },
           async recordDetail(context, payload) {
             // context 对象 与 store对象有相同的方法；context != store
             // 注意：局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
             const config = {
             }
             try {
               const result = await interrogaterecordService.recordDetail(payload, config)
               Console.log('recordDetail=', result)
               context.commit(Types.recordDetail, result.data.data)
               return Promise.resolve(result.data)
             } catch (err) {

             }
           }
         },
         // 4.获取定义的状态, 通过store.getters获取里面的函数,例如：store.getters.count
         getters: {
           // state 是获取局部状态；rootState是获取根状态
           ...ComGetters, // list --> data.content ; listPageConfig -> pageConfig
           recordDetail(state, getters, rootState, rootGetters) {
             return state.recordDetail || {}
           }
         }
       }
 * }
 */
export default modules || {}
