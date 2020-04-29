import Vue from 'vue'
import VueBus from './vue-bus.js'
// 3.添加BaseUI公共组件库
import './base-ui.js'
// 1.添加mockjs插件
import './mockjs.js'
// 2.添加一个 eventbus 插件
Vue.use(VueBus)
