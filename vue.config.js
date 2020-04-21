
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://cli.vuejs.org/zh/config/
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
  },
  configureWebpack: (config) => {
    // 1.排除哪些库不需要打包 import Vue from 'vue'
    // 用cdn方式引入
    config.externals = {
      vue: 'Vue', // key 是 require 的包名，value 是全局的变量
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios'
    }
  },
  // 代理 http
  devServer: {
    proxy: {
      '/station': {
        target: 'http://172.16.119.213:9090',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
