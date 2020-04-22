// import List from './list.vue'
const List = () => import('./list.vue')
export default {
  path: 'goodslist',
  name: 'goodslist',
  pname: 'main',
  level: 2, // 二级路由
  component: List,
  children: [
  ]
}
