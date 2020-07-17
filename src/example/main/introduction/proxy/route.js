
// 普通加载路由
// import Proxy from './proxy.vue'
// 懒加载路由
const Proxy = () => import(/* webpackChunkName: "proxy" */ './proxy.vue')
export default {
  name: 'proxy',
  path: 'proxy', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Proxy,
  children: [
  ]
}
