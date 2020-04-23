import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入插件
import '@/plugins/index.js'
// 导入全局样式
import '@/styles/global.scss'
console.log('liujun--')
console.log('liujun--')
console.log('liujun--')
console.log('liujun--')
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
