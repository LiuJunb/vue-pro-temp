
// 普通加载路由
// import CodeSpecification from './code-specification.vue'
// 懒加载路由
const CodeSpecification = () => import(/* webpackChunkName: "code-specification" */ './code-specification.vue')
export default {
  path: 'code-specification', // 二级路由前面没有/
  name: 'code-specification',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: CodeSpecification,
  children: [
  ]
}
