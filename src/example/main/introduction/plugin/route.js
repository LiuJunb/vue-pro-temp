
// 普通加载路由
// import Plugin from './plugin.vue'
// 懒加载路由
const Plugin = () => import(/* webpackChunkName: "plugin" */ './plugin.vue')
export default {
  name: 'plugin',
  path: 'plugin', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Plugin,
  children: [
  ]
}
