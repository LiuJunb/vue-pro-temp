
// 普通加载路由
// import SmartBreadcrumb from './smart-breadcrumb.vue'
// 懒加载路由
const SmartBreadcrumb = () => import(/* webpackChunkName: "smart-breadcrumb" */ './smart-breadcrumb.vue')
export default {
  name: '智能面包屑',
  path: 'smart-breadcrumb', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // 2 级路由（number类型）
  component: SmartBreadcrumb,
  children: [
  ]
}
