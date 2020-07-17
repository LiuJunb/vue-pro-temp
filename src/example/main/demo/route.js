
// 普通加载路由
// import Demo from './demo.vue'
// 懒加载路由
const Demo = () => import(/* webpackChunkName: "demo" */ './demo.vue')
export default {
  path: 'demo', // 二级路由前面没有/
  name: 'demo',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: Demo,
  children: [
  ]
}
