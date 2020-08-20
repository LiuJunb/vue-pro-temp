
// 普通加载路由
// import GridItem from './grid-item.vue'
// 懒加载路由
const GridItem = () => import(/* webpackChunkName: "grid-item" */ './grid-item.vue')
export default {
  name: 'grid-item',
  path: 'grid-item', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: GridItem,
  children: [
  ]
}
