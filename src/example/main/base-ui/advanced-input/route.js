
// 普通加载路由
// import AdvancedInput from './advanced-input.vue'
// 懒加载路由
const AdvancedInput = () => import(/* webpackChunkName: "advanced-input" */ './advanced-input.vue')
export default {
  name: 'advanced-input',
  path: 'advanced-input', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: AdvancedInput,
  children: [
  ]
}
