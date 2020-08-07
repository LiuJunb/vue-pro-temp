
// 按需打包base-ui的组件库
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const friendlyFommater = require('eslint-friendly-formatter')
const nodeExternals = require('webpack-node-externals')
const packageJson = require('../src/base-ui/package.json')
// console.log(packageJson)
// console.log(packageJson.version)
const config = require('./config')
// console.log(config.components)
module.exports = {
  mode: 'production',
  /**
   * {
   *  'lib/button-groups':'xxx\\xxx\\src\\components\\button-groups',
   *  'lib/button':'xxx\\xxx\\src\\components\\button',
   *  'helpers/dom':'xxx\\xxx\\src\\helpers\\dom.js',
   *  ......
   * }
   */
  entry: Object.assign({},
    config.components
    // config.directives,
    // config.helpers,
    // config.theme
  ),
  /**
   * dist
   *  assets
   *    fontawesome-webfont.eot
   *    ...
   *  directives
   *    index.js
   *  helper
   *    dom.js
   *  lib
   *    button-groups.js ( js ,css div )
   *    ....
   *  theme.js
   */
  output: {
    path: path.resolve(__dirname, '../src/base-ui/dist/'),
    // publicPath: '/dist/',
    pathinfo: false,
    // filename: '[name].js',
    filename: `[name]-${packageJson.version}.js`,
    libraryTarget: 'commonjs2'
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
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../tests')],
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
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
          publicPath: 'assets'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  // 不用打包的文件，nodeExternals 是排除 node_module 中的文件不需要打包
  externals: Object.assign({},
    config.externals,
    nodeExternals()
  ),
  optimization: {
    minimize: false,
    sideEffects: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`
    BaseUI v${packageJson.version}
    (c) 2020-2021 Liu Jun
    Released under the MIT License.
    `)
  ]

}
