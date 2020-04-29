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
    '@babel/plugin-transform-runtime',
    {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
  ]
}

```

main.js

```

// 这里导入的库会影响打包大小(要么按需导入，要么使用cdn)
// npm install @babel/polyfill@7.8.7 --save
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

```

