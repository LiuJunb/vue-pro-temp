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
注意路由的name不能出现重复

路由编写格式：

编写一级路由
```

import Register from './register.vue'
export default {
  path: '/register',
  name: 'register', // 最好不能出现重复
  pname: '',
  level: 1, // 一级路由
  component: Register,
  children: [
  ]
}

```

编写二级路由
```

import List from './list.vue'
export default {
  path: 'bookslist',
  name: 'bookslist',
  pname: 'main',
  level: 2, // 二级路由
  component: List,
  children: [
  ]
}


```
编写三级路由
```

import Create from './create.vue'
export default {
  path: 'create',
  name: 'create',
  pname: 'goodslist',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}


```
# 5.