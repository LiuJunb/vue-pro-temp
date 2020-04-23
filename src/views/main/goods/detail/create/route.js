import Create from './create.vue'
// const Create = () => import('./create.vue')
export default {
  path: 'create',
  name: 'goodscreate',
  pname: 'goodsdetail',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
