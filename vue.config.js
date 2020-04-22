
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const isDevelopment = process.env.NODE_ENV === 'development'
// cdn链接
const cdn = {
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    // 'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
    // 'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
    // 'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js'
  ]
}
// https://cli.vuejs.org/zh/config/
module.exports = {
  productionSourceMap: false, // 仅仅在dev环境使用SourceMap
  lintOnSave: true,
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
    if (isDevelopment) {

    } else {
      // ============注入cdn start============
      // https://www.jianshu.com/p/476387c7fea3
      config.plugin('html').tap(args => {
        // 生产环境或本地需要cdn时，才注入cdn
        args[0].cdn = cdn
        return args
      })
      // ============注入cdn start============
    }
  },
  configureWebpack: (config) => {
    if (isDevelopment) {

    } else {
      // 1.排除哪些库不需要打包 import Vue from 'vue'
      // 用cdn方式引入
      config.externals = {
        // vue: 'Vue', // key 是 require 的包名，value 是全局的变量
        // vuex: 'Vuex',
        // 'vue-router': 'VueRouter',
        // // 'core-js': 'core', // 包好了es6和es7等新的语法，要放在程序的入口处加载
        // axios: 'axios'
      }
      // 2.公共代码的抽取
      config.optimization = {
        // https://juejin.im/post/5e7c83b4e51d455c6c269608
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: 'styles',
              test: /\.(sa|sc|c)ss$/,
              chunks: 'all',
              enforce: true
            },
            runtimeChunk: {
              name: 'manifest'
            }
          }
        }
      }
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
