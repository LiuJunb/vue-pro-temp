
// 全量打包base-ui的组件库
const path = require('path')
const config = require('./config')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const friendlyFommater = require('eslint-friendly-formatter')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageJson = require('../src/base-ui/package.json')
console.log(packageJson)
console.log(packageJson.version)

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'production', // production development
  entry: {
    // 打包入口文件
    index: resolve('../src/base-ui/src/index.js')
  },
  /**
   * base-ui中的输出的目录结构：
   * dist
   *  assets
   *    fontawesome-webfont.eot
   *  index.js
   *  style.css
   */
  output: {
    path: resolve('../src/base-ui/dist'),
    filename: '[name].js',
    // filename: `[name]-${packageJson.version}.js`,
    library: 'BaseUI',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  stats: {
    assets: true,
    assetsSort: '!size',
    builtAt: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    depth: false,
    entrypoints: false,
    env: false,
    errors: true,
    errorDetails: true,
    hash: false,
    modules: false,
    moduleTrace: false,
    modulesSort: '!size',
    maxModules: 10,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: false,
    source: false,
    timings: false,
    usedExports: false,
    version: true,
    warnings: true
  },
  module: {
    rules: [
      {
        test: /\.js|vue$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        exclude: /node_nodules/,
        options: {
          formatter: friendlyFommater,
          emitWarnings: true,
          emitError: true
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
          // publicPath: '/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // 起导入的别名
    alias: config.alias
  },
  // 不需要打包的库
  externals: Object.assign({}, nodeExternals(), {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    'element-ui': 'element-ui'
  }),
  optimization: {
    minimize: false,
    sideEffects: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // filename: `style-${packageJson.version}.css`
      filename: `style.css`
    }),
    new webpack.BannerPlugin(`
BaseUI v${packageJson.version}
(c) 2020-2021 Liu Jun
Released under the MIT License.
    `)
  ]
}
