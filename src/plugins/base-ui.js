import Vue from 'vue'

// 1.本地方式加载
// import {
//   AdvancedSearch
// } from '@/base-ui/src'
// import BaseUI from '../base-ui/src' // ok 相对路径查找
// import BaseUI from '@/base-ui/src' // ok 起了别名
import BaseUI from 'base-ui/src' // ok 起了别名
// 安装BaseUI插件
Vue.use(BaseUI)
