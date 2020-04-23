// 这里导入的库会影响打包大小(要么按需导入，要么使用cdn)
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入插件
import '@/plugins/index.js'
// 导入全局样式
import '@/styles/global.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
