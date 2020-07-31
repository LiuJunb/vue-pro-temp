<template>
  <div class="proxy">
    <b-title-tag name="1.配置代理"></b-title-tag>
    <p>1.修改vue.config.js</p>
    <code-h
      lang="js"
      content="
      module.exports = {
        // 代理 http
        devServer: {
          proxy: {
            // '/clue': {
            //   target: 'http://172.16.121.73:8765',
            //   ws: true,
            //   changeOrigin: true
            // },
            // '/user-hyd': {
            //   target: 'http://172.16.121.73:8765',
            //   ws: true,
            //   changeOrigin: true
            // }
            '/api': {
              target: 'http://172.16.121.73:8765', // hyd 远程
              // target: 'http://172.20.5.211:8762', // hai 本地
              // target: 'http://192.168.99.88:8765', // hra 本地
              // target: 'http://192.168.99.109:8765', // rh 本地
              ws: true,
              changeOrigin: true,
              // pathRewrite: {'^/api' : ''}的含义是重写url地址，把url的地址里面含有 '/api' 这样的 替换成 '',相当于前端给后端一个统一的baseURL
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        }
      }

      "></code-h>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Proxy',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Proxy'
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
.proxy{

}
</style>
