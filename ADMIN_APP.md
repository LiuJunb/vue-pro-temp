
# 4.重写element-ui框架的样式

下面是重写element-ui框架 checkbox 组件的样式

1）全局修改

style标签中不需要添加scoped属性

```

<style lang="scss">
.main{
   .checkbox .el-checkbox__input{
     position: static;
     .el-checkbox__inner{
       position: absolute;
       right: 2px;
       top:2px;
     }
   }
}

```

2）使用vue-loader中的样式的穿透：/deep/ 深度选择器

style标签添加scoped属性

```

<style scoped lang="scss">
.main{

   .checkbox /deep/ .el-checkbox__input{
     position: static;
     .el-checkbox__inner{
       position: absolute;
       right: 2px;
       top:2px;
     }
   }
}

```


# 3.自定义element-ui的主题

> 以测试在ie8以上都可以跑以来

1.在项目中改变 SCSS 变量

在项目中新建一个theme-chalk.scss文件

```

/* 改变主题色变量 */
$--color-primary: #409EFF;
$--color-success: #67C23A;

/* 改变 icon 字体路径变量，下面两个是必需引入的 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "~element-ui/packages/theme-chalk/src/index";

```

2.引入theme-chalk.scss文件

```
import Vue from 'vue'
import {
  Button,
  Select
} from 'element-ui'
// 引入自定义主题会导致编译变慢
import '../styles/theme-chalk.scss'
Vue.use(Button)
Vue.use(Select)
// 或者使用下面来注册组件
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

```


# 2.集成element-ui框架

1.安装element-ui框架
npm install element-ui@2.13.1 --save


2.全局引入

在element-ui.js中全局引入
```

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

```

附加，项目打包大小：
  File                                     Size             Gzipped

  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              14.95 KiB        4.89 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB

  dist\js\vendor.76b4a080.js               810.91 KiB       217.26 KiB
  dist\css\vendor.5ad50e34.css             205.37 KiB       32.87 KiB

  dist\js\app.65ab5ddf.js                  17.87 KiB        5.42 KiB
  dist\js\chunk-182a5f71.33a8b1e7.js       0.55 KiB         0.38 KiB
  dist\js\chunk-6c17baac.f3d2140b.js       0.53 KiB         0.38 KiB
  dist\js\warning.82716aea.js              0.47 KiB         0.31 KiB
  dist\js\chunk-c98d0ff0.508a3321.js       0.44 KiB         0.33 KiB
  dist\js\chunk-56638406.45ae4f16.js       0.43 KiB         0.32 KiB
  dist\js\register.67517513.js             0.42 KiB         0.29 KiB
  dist\js\no-find.d2913e54.js              0.42 KiB         0.29 KiB
  dist\js\login.ae4575e8.js                0.41 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.fd48cb94.css                0.88 KiB         0.44 KiB
  dist\css\warning.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB

3.按需引入（优化打包）

1)安装插件
npm install babel-plugin-component@1.1.1 -D

2).配置babel.config.js

```
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // polyfill 配置ie兼容
    [
      .....
    ]
  ],
  plugins: [
    // polyfill 配置ie兼容
    [
      .....
    ],
    // element-ui按需加载
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}


```

3).编写按需导入的代码

```

import Vue from 'vue'
import {
  Button,
  Select
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)

```

附加，项目打包大小：
  File                                     Size             Gzipped

  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              14.95 KiB        4.89 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB

  // node_modules中的依赖大小( core-js:111k , element-ui/lib 83k, ployfill:8k)
  dist\js\vendor.b4db1280.js               222.43 KiB       72.11 KiB
  dist\css\vendor.d21cef24.css             41.74 KiB        7.24 KiB

  dist\js\app.8e16b96b.js                  17.93 KiB        5.45 KiB
  dist\js\chunk-182a5f71.33a8b1e7.js       0.55 KiB         0.38 KiB
  dist\js\chunk-6c17baac.f3d2140b.js       0.53 KiB         0.38 KiB
  dist\js\warning.82716aea.js              0.47 KiB         0.31 KiB
  dist\js\chunk-7c6624b7.6b5f066c.js       0.44 KiB         0.33 KiB
  dist\js\chunk-56638406.45ae4f16.js       0.43 KiB         0.32 KiB
  dist\js\register.67517513.js             0.42 KiB         0.29 KiB
  dist\js\no-find.d2913e54.js              0.42 KiB         0.29 KiB
  dist\js\login.ae4575e8.js                0.41 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.fd48cb94.css                0.88 KiB         0.44 KiB
  dist\css\warning.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\chunk-7c6624b7.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB


# 1.添加polifly

npm install @babel/polyfill@7.8.7 --save
npm install @babel/plugin-transform-runtime@7.9.0 --save-dev
npm install @babel/runtime@7.9.2 --save

babel.config.js
```

// 下面是给babel loade配置options
module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    // 兼容配置 npm install @babel/polyfill@7.8.7 --save
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  // npm install @babel/plugin-transform-runtime@7.9.0 --save-dev
  // npm install --save @babel/runtime
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
}

```

main.js

```

// 这里导入的库会影响打包大小(要么按需导入，要么使用cdn)
// npm install @babel/polyfill@7.8.7 --save
// 以前我们实现API的时候，会引入整个polyfill,其实polyfill只是包括了以下两个包
// core-js
// regenerator-runtime
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

```

附加：提示报错

// https://www.cnblogs.com/yf2196717/p/12587347.html

WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your 
`package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

以前的@babel/polyfill === core-js@2 + regenerator-runtime/runtime

报这个错误是因为@babel/polyfill已经被启用了，被替换了 core-js@3 + regenerator-runtime/runtime

新的配置方法：

1.babel.config.js 要指定 corejs: 3的版本
```

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
}


```

2.main.js导入要修改
```

// 这里导入的库会影响打包大小(要么按需导入，要么使用cdn)
// npm install @babel/polyfill@7.8.7 --save
// 旧版的用法
// import '@babel/polyfill'

// 新版的用法：core-js@3.6.5
import 'core-js/stable'
import 'regenerator-runtime/runtime'

```

# 注意事项

1）项目文件和文件夹都是小写
2）views store service  mockjs 的目录结构保持一样
3）所有的插件都放在plugins文件夹
