import List from './index.vue'
// const List = () => import('./index.vue')
export default {
  path: 'goodslist',
  name: 'goodslist',
  pname: 'main',
  level: 2, // 二级路由
  component: List,
  children: [
  ]
}
