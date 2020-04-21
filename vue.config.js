
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
  }
  // http://192.168.99.252
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://news-at.zhihu.com',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
}
