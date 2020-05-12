
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
function resolve(dir) {
  return path.join(__dirname, dir)
}
const startAnalyzerPlugin = true
const isDevelopment = process.env.NODE_ENV === 'development'
// cdn链接
const cdn = {
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    // 'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
  ]
}
// https://cli.vuejs.org/zh/config/
module.exports = {
  productionSourceMap: false, // 仅仅在dev环境使用SourceMap
  css: {
    loaderOptions: {
      less: {

      },
      // 配置每个vue组件自动导入base.scss文件
      sass: {
        // 引入全局变量样式,@使我们设置的别名,执行src目录
        // 旧版是data , 新版是 prependData
        prependData: `
        @import "@/styles/base.scss";
        // 自定义scss的函数 width:pxToRem(100)
        @function pxToRem($px) {
          @return $px/$htmlFintSize*1rem;
        }
        `
      }
    }
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
    if (isDevelopment) {

    } else {
      // 1.注入cdn
      // https://www.jianshu.com/p/476387c7fea3
      config.plugin('html').tap(args => {
        // 生产环境或本地需要cdn时，才注入cdn
        args[0].cdn = cdn
        return args
      })
      // 2.启用Analyzer分析打包后的大小
      if (startAnalyzerPlugin) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
      }
      // 3.移除 prefetch 插件 减少http数量
      config.plugins.delete('prefetch')
      // 4.移除 preload 插件 减少http数量
      config.plugins.delete('preload')
    }
  },
  configureWebpack: (config) => {
    if (isDevelopment) {

    } else {
      // 1.排除哪些库不需要打包 import Vue from 'vue'
      // 用cdn方式引入
      config.externals = {
        vue: 'Vue', // key 是 require 的包名，value 是全局的变量
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios'
      }
      // 2.公共代码的抽取
      config.optimization = {
        // https://juejin.im/post/5e7c83b4e51d455c6c269608  代码拆分
        splitChunks: {
          // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
          // chunks: 'all', // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
          // minSize: 30000, // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
          // minChunks: 1, // 表示按需加载文件时，并行请求的最大数目。默认为5。
          // maxAsyncRequests: 5, // 表示加载入口文件时，并行请求的最大数目。默认为3。
          // maxInitialRequests: 3, // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
          // automaticNameDelimiter: '~', // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。

          // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。
          // 模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。
          // 默认将所有来自 node_modules目录的模块打包至vendors组，
          // 将两个以上的chunk所共享的模块打包至default组。
          cacheGroups: {
            vendor: {
              chunks: 'all', // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
              test: /node_modules/,
              name: 'vendor', // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
              minChunks: 1, // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
              maxInitialRequests: 5, // 表示加载入口文件时，并行请求的最大数目。默认为3。
              maxAsyncRequests: 5, // 表示按需加载文件时，并行请求的最大数目。默认为5。
              minSize: 20000, // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
              automaticNameDelimiter: '~', // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2, // 将两个以上的chunk所共享的模块打包至common组。
              maxInitialRequests: 5,
              minSize: 20000,
              maxAsyncRequests: 5,
              automaticNameDelimiter: '~',
              priority: 60
            }
            // styles: {
            //   name: 'styles',
            //   test: /\.(sa|sc|c)ss$/,
            //   chunks: 'all',
            //   enforce: true
            // },
            // runtimeChunk: {
            //   name: 'manifest'
            // }
          }
        }
      }
      // 3.代码压缩  config.plugins 只有在configureWebpack这里才有该函数
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      // 4.启用GZip压缩 只有在configureWebpack这里才有config.plugins该函数
      const productionGzipExtensions = ['js', 'css']
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
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
