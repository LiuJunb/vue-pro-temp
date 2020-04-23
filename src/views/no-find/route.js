// import NoFind from './no-find.vue'
const NoFind = () => import(/* webpackChunkName: "no-find" */ './no-find.vue')
export default {
  path: '/nofind',
  name: 'nofind',
  pname: '',
  level: 1, // 一级路由
  component: NoFind,
  children: [
  ]
}
