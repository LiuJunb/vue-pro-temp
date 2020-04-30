
// 普通加载路由
// import warning from './warning.vue'
// 懒加载路由
const Warning = () => import(/* webpackChunkName: "warning" */ './warning.vue')
export default {
  path: 'warning',
  name: 'warning',
  pname: 'main', // 父亲路由的名称
  level: 2, // 一级路由
  component: Warning,
  children: [
  ]
}
