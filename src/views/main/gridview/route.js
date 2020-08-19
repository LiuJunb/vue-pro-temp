
// 普通加载路由
// import Gridview from './gridview.vue'
// 懒加载路由
const Gridview = () => import(/* webpackChunkName: "gridview" */ './gridview.vue')
export default {
  name: 'gridview',
  path: 'gridview', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Gridview,
  children: [
  ]
}
