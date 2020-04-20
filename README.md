# 简介

vue-pro-temp 是 vue 的模板项目，该项目默认集成了：

vue
vuex
axios
router
sass
eslint
mock


该项目添加了自动加载：路由，store


该项目添加了生成、删除组件的命令



该项目添加自动部署的功能

该项目公共组件全局注册


# 1.修改.eslintrc.js的配置


# 2.修改index.html

1.添加进度  2.添加了统一标签的样式normalize.css  3.添加mete标签

# 3.添加vue.config.js

```

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
  }
}

```

# 4.修改router，实现自动加载路由

