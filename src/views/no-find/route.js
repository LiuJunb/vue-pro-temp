// import NoFind from './index.vue'
const NoFind = () => import(/* webpackChunkName: "no-find" */ './index.vue')
export default {
  path: '*',
  name: 'nofind',
  pname: '',
  level: 1, // 一级路由
  component: NoFind,
  children: [
  ]
}
