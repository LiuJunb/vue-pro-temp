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
