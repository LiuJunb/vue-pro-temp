<template>
  <div class="mockjs">
    <b-title-tag name="1."></b-title-tag>
    <p>1.在mockjs中编写下面的服务</p>
    <code-h
      lang="js"
      content='
      // 如果是测试环境(相当于服务器端)
      const Mock = require("mockjs")

      /**
      *  Mock.mock( { } )
      *  Mock.mock("", "", ()=>{} )
      * 获取列表的数据 get
      *  参数一：url (string | regex), 例如：/\.json/,在get请求的时候使用
      *  参数二: method
      *  参数三：回调函数
      */
      // 监听 http://127.0.0.1//station/home1 的get请求
      Mock.mock(/\/station\/home1/, "get", function(options) {
        return { name: "get" }
      })

      // 监听 http://127.0.0.1//station/home2 的post请求
      Mock.mock("/station/home2", "post", function(options) {
        return { name: "post" }
      })

    '></code-h>
    <p>2.在config中启用mockjs</p>
    <code-h
      lang="js"
      content='

      // 是否开始mock,不支持文件
      export const startMock = true

    '></code-h>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Mockjs',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Mockjs'
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
.mockjs{

}
</style>
