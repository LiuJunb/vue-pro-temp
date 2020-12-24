
// 普通加载路由
// import BasicComps from './basic-comps.vue'
// 懒加载路由
const BasicComps = () => import(/* webpackChunkName: "basic-comps" */ './basic-comps.vue')
export default {
  name: 'basic-comps',
  path: 'basic-comps', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: BasicComps,
  children: [
  ],
  meta: {
    keepAlive: false, // 指定页面需不需要缓存
    requireAuth: false // 指定页面需不需要登录才能访问
  }
}
