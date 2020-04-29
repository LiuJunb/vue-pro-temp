import Create from './create.vue'
// const Create = () => import('./create.vue')
export default {
  path: 'create',
  name: 'goodslistcreate',
  pname: 'goodslist',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
