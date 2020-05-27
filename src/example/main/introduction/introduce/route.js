
// 普通加载路由
// import Introduce from './introduce.vue'
// 懒加载路由
const Introduce = () => import(/* webpackChunkName: "introduce" */ './introduce.vue')
export default {
  path: 'introduce', // 二级路由前面没有/
  name: 'introduce',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: Introduce,
  children: [
  ]
}
