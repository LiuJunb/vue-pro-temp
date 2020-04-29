import Vue from 'vue'

// 1.本地方式加载
import BaseUI from '../base-ui/src'
// 安装antdUi插件
Vue.use(BaseUI)

// 全局按需注册
// import ButtonGroups from '@/antd-ui/src/components/button-groups'
// Vue.component(ButtonGroups.name, ButtonGroups)

// 2.cdn 的方式加载
// import antdUi from 'AntdUi' // 这个会从 全局环境变量中查找，因为配置 externals
// 安装antdUi插件
// Vue.use(antdUi)

// 3.npm 的方式加载
// 1.全局按需注册
// import Button from 'antd-ui/dist/lib/button'
// import Icon from 'antd-ui/dist/lib/icon'
// import ButtonGroups from 'antd-ui/dist/lib/button-groups'

// import 'antd-ui/dist/style.css'
// Vue.component(Button.name, Button)
// Vue.component(Icon.name, Icon)
// Vue.component(ButtonGroups.name, ButtonGroups)

// 4.全量安装 antd-ui 插件
// import antdUi from 'antd-ui'
// import 'antd-ui/dist/style.css'
// Vue.use(antdUi)

Vue.use(BaseUI)
