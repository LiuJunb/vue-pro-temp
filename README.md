# 简介

vue-pro-temp 是 vue 的模板项目，该项目默认集成了：

vue
vuex
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

附加：此时打包的大小：

```

  File                                     Size             Gzipped  
  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.ef2c018d.js        37.70 KiB        13.64 KiB
  dist\js\app.dee68bc4.js                  13.11 KiB        2.88 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.38144b40.css                0.15 KiB         0.13 KiB

``` 

# 5.添加axios框架和封装axios请求

1.使用cdn的方式添加axios框架

2.封装了axios的请求

3.添加config的配置

# 6.添加 devServer 实现跨越的功能

直接添加下面的配置，不用安装webpack-dev-server，默认脚手架已经安装了的

```

  devServer: {
    proxy: {
      '/station': {
        target: 'http://172.16.119.213:9090',
        ws: true,
        changeOrigin: true
      }
    }
  }

```

附加：此时打包的大小：

```

  File                                     Size             Gzipped

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.00bc79c9.js        45.15 KiB        16.18 KiB
  dist\js\app.6d8d1580.js                  14.13 KiB        3.33 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.e6e72d52.css                0.15 KiB         0.13 KiB
```

# 7.添加 mockjs 实现后台接口的模拟

1.安装mockjs  
 
  npm install mockjs --save-dev

2.编写mock接口 并在main.js中引入

3.注意不能模拟上传文件，get请求使用正则匹配url


附加：此时打包的大小：
```
  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.d3a9f9e8.js        181.28 KiB       65.23 KiB
  dist\js\app.bd520232.js                  14.55 KiB        3.47 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.60167145.css                0.15 KiB         0.13 KiB

```

dist\js\chunk-vendors.d3a9f9e8.js        181.28 KiB       65.23 KiB 

突然变大是因为 mockjs 也打包进去了

# 8.封装store层











### 注意事项

1. 少了全局的网络请求(一些全局使用的接口，需要在项目启动的时候就加载)。

2. 不需要抽象一个公共的对话框（方便自定义每一个对话框样式和对话框表单的验证）。

3. 所有的第三方框架都要不能进行打包到项目中去。

4. 项目的适配要测试 1350px  1600px 1900px 三个版本。

5. 表格打印出现2页是因为使用自动居中导致。

6. 表格要给固定的宽(最小宽) 和 高（ 表格大小：560px - 1000px ），保证沾满A4的80%。

7. 所有页面必须要共用一个混合（方便抽象共性的东西）。

8. 提交的表单，要给表单组件添加锚点，方便后面提交表单定位到校验不通过的一处。

9. 在有表单的地方最好不用使用插入template slot 的技术（如果使用了只能调用api来手动验证表单）。
   template slot中定义了ref 属性，获取到的组件对象不能使用组件对象的方法

10. 界面跳转的时，要记录从哪个界面跳转到哪个界面（方便做页面的缓存）和 控制页面的展示规则。

11. 加入mack来进行模拟后台的接口数据。

12. 每添加一个按钮，需要考虑按钮的权限控制。

13. config 中有关部署的配置文件可以拆分成多个，这样方便后面快速的切换部署环境。

14. 搭建环境的时候可以搭建测试环境 2 套代码（一套测试用，一套后端用，本地自己用）。

15. 可以考虑全局的 notice 提示对话框，不用每次都要单独导入。

16. 公共的组件可以考虑编写成全局组件，通过插件引用 antd-ui 。

17. 可以考虑一套 px 转 rem 的工具（移动端时可以考虑）。

18. 统一文件夹/文件命名规范(默认都是小写:l-advance-edit,l-advance-edit.vue),紧vue文件组件名是首字母大写

19. 代码的命名规范(1.枚举，class User:首字大写。2.变量/方法:驼峰命名。3.常量:全大写。4.css样式类：a-a-a)

20. 注意详情页面：如果详情页面是依靠后端返回的数据来动态渲染的，那如果没有数据的时候应该显示 NoData 页面。

21. 注意要设计：菜单、按钮，列表的权限管理。

22. getter获取的state的数据，不能对state的引用数据进行解构赋值之类操作，不然会导致界面一直在render

23. 菜单组件 最好不用route-link, 使用api进行路由

24. iframe 标签的使用：1.统一门户嵌入子网站 2.<a>标签下载文件，当前iframe接收返回新网页：alert('') 3.打印网页时window.print  4.html导出docx的时候使用iframe（实现把要到处的html片段放到一个新的网页上去导出，定制导出网页样式）

## 可优化点

1. 可优化打包的结果（减少包的体积大小）

2. 可优化 自动注册路由, store, service

3. 可优化公共组件单独导出，自动注册公共组件

4. 可优化减少了重复发送的网络请求(统一获取配置信息)

5. 可优化字体图标最好使用svg

6. 可以使用nodejs实现自动生成/删除：页面组件，路由配置，store层，service层，api层的代码



## 项目难点

编辑日志： 
1.动态添加检察事件(3维数组)，可通过后台配置 
2.表单验证和跳转到锚点 
3.数据量大（初始化显示处理数据，提交处理数据，回显处理数据）
4.

