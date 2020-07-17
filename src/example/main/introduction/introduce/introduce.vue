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
    <b-title-tag name="2.项目的目录结构"></b-title-tag>
    <code-h
      lang="html"
      content='
        <au-button type="primary" @click="loading = !loading">按钮</au-button>
        <au-button type="primary" :disabled="true">按钮</au-button>
        <au-button type="primary" :loading="loading">按钮</au-button>
      '></code-h>
    <br>
    <b-title-tag name="3.xxx"></b-title-tag>
    <code-h
      lang="html"
      content='
        <au-button type="primary" @click="loading = !loading">按钮</au-button>
        <au-button type="primary" :disabled="true">按钮</au-button>
        <au-button type="primary" :loading="loading">按钮</au-button>
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
