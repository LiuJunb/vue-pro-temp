import Create from './index.vue'
// const Create = () => import('./index.vue')
export default {
  path: 'create',
  name: 'goodscreate',
  pname: 'goodsdetail',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
