
// 普通加载路由
// import Example from './example.vue'
// 懒加载路由
const Example = () => import(/* webpackChunkName: "example" */ './example.vue')
export default {
  name: 'example',
  path: '/example', // 非一级路由前面没有/
  pname: '', // 父亲路由的名称
  level: 1, // x 级路由（number类型）
  component: Example,
  children: [
  ],
  meta: {
    keepAlive: true, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
