<template>
  <div class="introduce">
    <br>
    <b-title-tag name="1.技术栈"></b-title-tag>
    <p>前端技术栈： vue2 + vuex + vue-router + webpack + ES6/7 + scss + element-ui + eslint + jest + gulp + axios ...</p>
    <p>服务端技术栈： mockjs</p>
    <b-title-tag name="2.参考文档"></b-title-tag>

    <p><a href="">vue</a>：Vue是一套用于构建用户界面的渐进式框架。</p>
    <p><a href="">vuex</a>：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。</p>
    <p><a href="">vue-router</a>：Vue Router 是 Vue.js 官方的路由管理器。</p>
    <p><a href="">webpack</a>：前端模块打包器。</p>
    <p><a href="">scss</a>：Scss 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。</p>
    <p><a href="">element-ui</a>：Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。</p>
    <p><a href="">mockjs</a>：生成随机数据，拦截 Ajax 请求。</p>

    <br>
    <b-title-tag name="3.项目目录结构"></b-title-tag>
    <code-h
      lang="json"
      content='
      |-- README.md
      |-- babel.config.js
      |-- dist
      |-- gulpfile.config.js
      |-- gulpfile.js // 自动部署脚本
      |-- jest.config.js
      |-- mockjs // 模拟后台数据
      |   |-- home1-service.js
      |   `-- index.js
      |-- package-lock.json
      |-- package.json
      |-- public
      |   `-- index.html
      |-- server // 启动本地服务
      |   `-- index.js
      |-- src
      |   |-- App.vue
      |   |-- assets
      |   |   |-- logo.png
      |   |   `-- logo3.png
      |   |-- basic-comps // 独立组件
      |   |   |-- base-echarts
      |   |   |   |-- base-echarts.vue
      |   |   |   `-- echarts-config.js
      |   |   |-- basic-tabs
      |   |   |   `-- basic-tabs.vue
      |   |   `-- index.js
      |   |-- components // 非独立组件
      |   |   |-- HelloWorld.vue
      |   |   |-- all-modal
      |   |   |   `-- demo-modal
      |   |   |       `-- demo-modal.vue
      |   |   |-- all-panel
      |   |   |-- all-table
      |   |   `-- index.js
      |   |-- config // 项目打包多渠道配置
      |   |   |-- config.mock.js
      |   |   |-- config.dev.js
      |   |   |-- config.pro.js
      |   |   |-- config.real.js
      |   |   `-- index.js
      |   |-- enum // 定义枚举
      |   |   `-- index.js
      |   |-- http // 网路请求的封装
      |   |   |-- axios.js
      |   |   `-- index.js
      |   |-- main.js
      |   |-- mixins // 混合，抽取js逻辑的复用
      |   |   |-- index.js
      |   |   `-- table-list.js
      |   |-- permissions // 权限管理
      |   |   |-- index.js
      |   |   `-- permissions-config.js
      |   |-- plugins // 项目依赖的插件
      |   |   |-- base-ui.js
      |   |   |-- element-ui.js
      |   |   |-- index.js
      |   |   |-- mockjs.js
      |   |   `-- vue-bus.js
      |   |-- regular // 项目用到的正则
      |   |   `-- index.js
      |   |-- router // 自动注册路由
      |   |   |-- index.js
      |   |   `-- register-routes.js
      |   |-- service // 服务层代码
      |   |   |-- load_services.js
      |   |   |-- login // 登录页面对应的服务层
      |   |   |   `-- index.js
      |   |   |-- main
      |   |   |   |-- example // 案例页面对应的服务层
      |   |   |   |   `-- index.js
      |   |   `-- register // 注册页面对应的服务层
      |   |-- store // 数据存储层
      |   |   |-- index.js
      |   |   |-- load-modules.js
      |   |   |-- modules
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
      |   |-- styles
      |   |   |-- base.js
      |   |   |-- base.scss
      |   |   |-- global.scss
      |   |   `-- theme-chalk.scss
      |   |-- utils
      |   |   |-- asider-menu.js
      |   |   |-- clone-object.js
      |   |   |-- common.js
      |   |   `-- data.js
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
      |       |   |-- main.vue
      |       |   `-- route.js
      |       `-- register // 注册页面
      |           |-- register.vue
      |           `-- route.js
      |-- tests  // 测试包
      |   `-- unit
      |       `-- example.spec.js
      |-- vue.config.js
      `-- yarn-error.log

      '></code-h>
    <br>
    <b-title-tag name="4.开始新建项目"></b-title-tag>
    <code-h
      lang="html"
      content='

      '></code-h>
  </div>
</template>

<script>

export default {
  name: 'Introduce',
  components: {
  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Introduce'
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
.introduce{
  font-size:15px;
}
</style>
