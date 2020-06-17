
// 普通加载路由
// import GridView from './grid-view.vue'
// 懒加载路由
const GridView = () => import(/* webpackChunkName: "grid-view" */ './grid-view.vue')
export default {
  name: 'grid-view',
  path: 'grid-view', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: GridView,
  children: [
  ]
}
