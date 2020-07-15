// 这里导入的库会影响打包大小(要么按需导入，要么使用cdn)
// npm install @babel/polyfill@7.8.7 --save
// import '@babel/polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 代码高亮
import {
  CodeH
} from '@/components/index.js'
// 导入插件
import '@/plugins/index.js'
// 导入全局样式
import '@/styles/global.scss'
Vue.component('code-h', CodeH)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
