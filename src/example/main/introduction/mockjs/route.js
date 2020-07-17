
// 普通加载路由
// import Mockjs from './mockjs.vue'
// 懒加载路由
const Mockjs = () => import(/* webpackChunkName: "mockjs" */ './mockjs.vue')
export default {
  name: 'mockjs',
  path: 'mockjs', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Mockjs,
  children: [
  ]
}
