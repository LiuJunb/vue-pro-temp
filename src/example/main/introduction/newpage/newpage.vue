<template>
  <div class="newpage">
    <br>
    <b-title-tag name="1.新建页面组件"></b-title-tag>
    <p>1）页面组件存放到views目录下</p>
    <p>2）页面组件必须存放到一个单独的目录中</p>
    <p>2）页面组件必须对应一个route.js路由配置文件</p>
    <p>2）页面组件对应一个page-config配置文件夹</p>
    <p>例如：</p>
    <code-h
      lang="json"
      content='

      |   `-- views
      |       |-- load-routes.js
      |       |-- login // 登录页面
      |       |   |-- login.vue // 页面组件
      |       |   |-- page-config // 页面配置
      |       |   |   |-- ad-login.js
      |       |   |   `-- index.js
      |       |   `-- route.js // 约定路由的配置
      |       |-- main
      |       |   |-- example // 案例页面
      |       |   |   |-- detail // 案例页面的-详情页面
      |       |   |   |   |-- detail.vue
      |       |   |   |   |-- page-config
      |       |   |   |   |   `-- index.js
      |       |   |   |   `-- route.js
      |       |   |   |-- example.vue
      |       |   |   |-- page-config
      |       |   |   |   |-- ad-search-config.js
      |       |   |   |   |-- btn-group-config.js
      |       |   |   |   |-- index.js
      |       |   |   |   `-- table-config.js
      |       |   |   `-- route.js

    '></code-h>
    下面以新建一个 demo 的页面为例：
    <p>1.新建demo页面组件( src/views/main/demo/demo.vue )</p>
    <code-h
      lang="js"
      content='
        <template>
        <div class="demo">
          <h3>Demo</h3>
        </div>
      </template>

      <script>
      // import {
      //
      // } from "./page-config"
      export default {
        name: "Demo",
        components: {

        },
        mixins: [],
        props: {
          msg: {
            type: String,
            default: "Demo"
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
      .demo{
        font-size:15px;
      }
      </style>
    '></code-h>
    <p>2.配置demo页面的路由( src/views/main/demo/route.js )</p>
    <code-h
      lang="js"
      content='

      // 普通加载路由
      // import Demo from "./demo.vue"
      // 懒加载路由
      const Demo = () => import(/* webpackChunkName: "demo" */ "./demo.vue")
      export default {
        path: "demo", // 二级路由前面没有/
        name: "demo",
        pname: "main", // 父亲路由的名称
        level: 2, // 2级路由
        component: Demo,
        children: [
        ],
        meta: {
          keepAlive: false, // 需不需要缓存
          requireAuth: false // 需不需要登录才能访问
        }
      }

    '></code-h>
    demo页面的路由：http://127.0.0.1/main/demo
    <p>3.在菜单中配demo页面 ( src/utils/asider-menu.js ) </p>
    <code-h
      lang="js"
      content='
      const menuList = [
        {
          icon: "el-icon-upload",
          id: 1,
          level: 1,
          name: "菜单一级目录",
          type: "dir",
          url: "/main",
          children: [
            {
              icon: "el-icon-setting",
              id: 11,
              level: 2,
              name: "demo页面",
              type: "menu",
              url: "/main/demo",
              children: [
              ]
            }
          ]
        }
      ]
    '></code-h>
    <p>4.新建一个页面完毕 </p>
    <p>5.demo页面如果需要编写配置，可以新建一个page-config文件夹存放所有的配置 ( src/views/main/demo/page-config/index.js ) </p>
    <br>
    <b-title-tag name="2.新建页面组件的-详情页"></b-title-tag>
    <p>1.新建demo页面组件对应的-详情页 ( src/views/main/demo/detail/detail.vue )</p>
    <code-h
      lang="js"
      content='
      <template>
        <div class="detail">
          <h3>Detail</h3>
        </div>
      </template>

      <script>
      // import {
      //
      // } from "./page-config"
      export default {
        name: "Detail",
        components: {

        },
        mixins: [],
        props: {
          msg: {
            type: String,
            default: "Detail"
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
      .detail{
        font-size:15px;
      }
      </style>

    '></code-h>
    <p>2.配置详情页的路由( src/views/main/demo/detail/route.js )</p>
    <code-h
      lang="js"
      content='

      // 普通加载路由
      // import Detail from "./detail.vue"
      // 懒加载路由
      const Detail = () => import(/* webpackChunkName: "detail" */ "./detail.vue")
      export default {
        path: "demo/detail", // 二级路由前面没有/
        name: "detail",
        pname: "main", // 父亲路由的名称
        level: 2, // 2级路由
        component: Detail,
        children: [
        ],
        meta: {
          keepAlive: false, // 需不需要缓存
          requireAuth: false // 需不需要登录才能访问
        }
      }

    '></code-h>
    <p>详情页面的路由：http://127.0.0.1/main/demo/detail</p>
    <p>详情页面的路由(传递参数的方式使用query的方式)：http://127.0.0.1/main/demo/detail?id=12</p>

    <p>3.配置详情页到菜单( src/config/index.js )</p>
    该步骤的作用是：1）配置给其它组件使用的；2）后期可能需要使用到
    <code-h
      lang="js"
      content='
      // 其它页面的配置(例如：详情，编辑，新建 等非菜单页面 )
      export const OtherList = [
        {
          parentUrl: "/main/demo", // demo列表页面的路由
          url: `/main/demo/detail`, // demo列表页面-的-详情页面路由
          name: "详情", // 路由名称
          children: [
          ]
        },
        ....
      ]
    '></code-h>
    <p>4.详情页面新建完成</p>
    <p>5.详情页面如果需要编写配置，可以新建一个page-config文件夹存放所有的配置 ( src/views/main/demo/detail/page-config/index.js ) </p>
    <br>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Newpage',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Newpage'
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
.newpage{
  font-size:15px;
}
</style>
