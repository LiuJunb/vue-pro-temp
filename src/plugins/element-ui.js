import Vue from 'vue'
import {
  Button,
  Select,
  Checkbox
} from 'element-ui'
// 引入自定义主题会导致编译变慢
import '../styles/theme-chalk.scss'
Vue.use(Button)
Vue.use(Select)
Vue.use(Checkbox)
// 或者使用下面来注册组件
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
