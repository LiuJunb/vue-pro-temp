<template>
  <div class="newstore">
    <b-title-tag name="1.新建页面组件对应的store层"></b-title-tag>
    <p>1)页面组件请求后台的数据统一存放到 store 层</p>
    <p>2)src/store/modules/ 下的目录 和 src/views/ 下的目录,文件夹结构基本一样</p>
    <p>3)菜单列表页面+列表的详情/新建/编辑页面都公用一个store层来存储数据</p>
    <p>4)store层存的数据大部分来源于 servce 层从网路获取的</p>
    <p>5)src/store/modules 下面所有的模块会自动被load-modules.js文件自动加载，最终将这些子模块注册到store中去</p>
    <p>5)store层的目录结构如下：</p>
    <code-h
      lang="json"
      content='
      |   |-- store // 数据存储层
      |   |   |-- index.js // store的入口文件
      |   |   |-- load-modules.js // 自动加载modules下所有的子模块
      |   |   |-- modules // 所有的子模块，目录结构跟src/view/的基本保持一致
      |   |   |   |-- login // 登录页面存储的数据
      |   |   |   |   |-- index.js
      |   |   |   |   `-- types.js
      |   |   |   |-- main
      |   |   |   |   |-- example // 案例页面存储的数据
      |   |   |   |   |   |-- index.js
      |   |   |   |   |   `-- types.js
      |   |   |   |   |-- index.js // 全局数据的存储
      |   |   |   |   `-- types.js
      |   |   |   `-- register // 中蹙额页面存储的数据
      |   |   |       |-- index.js
      |   |   |       `-- type.js
      |   |   `-- types.js
    '></code-h>

    <p>下面以新建demo页面以及对应detail页面的store层代码：</p>
    <b-title-tag name="2.新建demo页面以及detail页面的store层"></b-title-tag>
    <p>1.新建demo文件夹( src/store/modules/main/demo )</p>
    <code-h
      lang="json"
      content='
      |   |-- store
      |   |   |-- index.js
      |   |   |-- load-modules.js
      |   |   |-- modules
                  ......
      |   |   |   |-- main
      |   |   |   |   |-- demo // demo 以及 detail页面存储的数据
      |   |   |   |   |   |-- index.js
      |   |   |   |   |   `-- types.js
      |   |   |   |   |-- index.js
      |   |   |   |   `-- types.js
      |   |   `-- types.js
    '></code-h>
    <p>2.在demo文件夹下新建index.js( src/store/modules/main/demo/index.js )</p>
    <code-h
      lang="js"
      content='
      import Types from "./types.js"
      import allService from "@/service/load_services.js"
      import {
        PaginatonDefaultConfig
      } from "@/config/index.js"
      const { demoService } = allService
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
                "Content-Type": "application/json;charset=utf-8"
              }
            }
            const result = await demoService.getData(payload, config)
            context.commit(Types.data, result.data)
            return Promise.resolve(result.data)
          },
          async list(context, payload) {
            const config = {
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }
            const result = await demoService.getList(payload, config)
            context.commit(Types.list, result.data.data)
            return Promise.resolve(result.data.data)
          },
          async detail(context, payload) {
            const config = {
            }
            const result = await demoService.getDetail(payload, config)
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
                "current-page": data.pageNum + 1, // 当前第几页, 从 1 开始
                "page-sizes": [10, 20, 30, 40], // 可选择一页显示多少条
                "page-size": data.pageSize, // 一页显示多少条
                total: data.totalSize // 总共有多少条
              }
            } else {
              return { ...PaginatonDefaultConfig }
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
          this.$store.dispatch("depts") // 返回promise对象
          this.$store.getters.depts)

          // test demo store
          // 1.获取store的数据
          this.$store.getters["demo/data"]
          // 2.分发一个action
          this.$store.dispatch("demo/data") // 返回promise对象
          this.$store.getters["demo/data"]
      */

    '></code-h>
    <p>3.在demo文件夹下新建types.js( src/store/modules/main/demo/types.js )</p>
    <code-h
      lang="js"
      content='
      export default {
        data: "data",
        list: "list",
        detail: "detail"
      }
    '></code-h>
    <p>4.demo页面和detail页面对应的store层新建完成（store层是依赖service层，所以一会还要新建对应的service层代码）</p>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Newstore',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Newstore'
    }
  },
  data: function() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newstore{
  font-size:15px;
}
</style>
