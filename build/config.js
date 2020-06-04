const path = require('path')
const fs = require('fs')
// 获取antd-ui 下所有的文件(数组)
const components = fs.readdirSync(path.resolve(__dirname, '../src/base-ui/src/components'))

/**
 * 给导入起了别名的配置, __dirname 是获取当前文件所在的路径
 */
exports.alias = {
  '@': path.resolve(__dirname, '../src'),
  'base-ui': path.resolve(__dirname, '../src/base-ui'),
  '@base-ui': path.resolve(__dirname, 'base-ui'),
  // eslint-disable-next-line quote-props
  'components': path.resolve(__dirname, '../src/base-ui/src/components')
}

/**
 * {
 *  'lib/breadcrumb':'E:\\liujun\\workspace\\test-ui\\admin-ui\\src\\admin-ui\\src\\components\\button-groups'
 *  'lib/button':'E:\\liujun\\workspace\\test-ui\\admin-ui\\src\\admin-ui\\src\\components\\button'
 *  ......
 * }
 */
// 2.components 数组转 {} 对象( 在打包入口的时候需要用到 )
exports.components = components.reduce((last, curr) => {
  // last[lib/button-groups] = E:\\liujun\\workspace\\test-ui\\antd-ui\\src\\antd-ui\\src\\components\\button-groups
  last[`lib/${curr}`] = path.resolve(__dirname, `../src/base-ui/src/components/${curr}`)
  return last
}, {})

/**
 * 3.不用打包的文件。
 * 在组件库中使用了 import vue from 'vue'
 * 或者 import ButtonGroups from 'components/button-groups'  都从外部引入
 * {
 *  vue:'vue',
 *  'components/button-groups':'base-ui/dist/lib/button-groups'
 *  'components/button':'base-ui/dist/lib/button'
 *  'components/cascading':'base-ui/dist/lib/cascading',
 *  'components/select': 'base-ui/dist/lib/select'
 * }
 */
let externals = {}
components.forEach(name => {
  // externals[components/button-groups] = base-ui/dist/lib/button-groups
  // externals[`components/${name}`] = `BaseUI/dist/lib/${name}`
  // 在base-ui库的组件中引用本库的组件不需要打包； 在base-ui库的组件中vue也不需要打包
  externals[`components/${name}`] = `base-ui/dist/lib/${name}`
})

// directives.forEach(name => {
//   name = name.substring(0, name.lastIndexOf('.'))
//   externals[`directives/${name}`] = `admin-ui/dist/directives/${name}`
// })

externals = Object.assign({
  vue: 'vue'
}, externals)
exports.externals = externals // base-ui组件库中引用的vue不需要打包，引用自身的组件不需要打包

// export {
//   alias,
//   components,
//   externals
// }
