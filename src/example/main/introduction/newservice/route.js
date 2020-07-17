
// 普通加载路由
// import Newservice from './newservice.vue'
// 懒加载路由
const Newservice = () => import(/* webpackChunkName: "newservice" */ './newservice.vue')
export default {
  name: 'newservice',
  path: 'newservice', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Newservice,
  children: [
  ]
}
