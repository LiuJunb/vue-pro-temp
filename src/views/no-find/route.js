// import NoFind from './no-find.vue'
const NoFind = () => import(/* webpackChunkName: "no-find" */ './no-find.vue')
export default {
  path: '/no-find',
  name: 'nofind',
  pname: '',
  level: 1, // 一级路由
  component: NoFind,
  children: [
  ],
  meta: {
    keepAlive: false, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
