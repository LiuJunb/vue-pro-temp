
// 普通加载路由
// import Router from './router.vue'
// 懒加载路由
const Router = () => import(/* webpackChunkName: "router" */ './router.vue')
export default {
  name: 'router',
  path: 'router', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Router,
  children: [
  ]
}
