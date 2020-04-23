const routes = []
// allRoute 是一个函数
const allRoute = require.context('@/views/', true, /route\.(js|ts)$/)
// ["./login/route.js", "./main/goods/list/route.js", "./main/route.js", "./no-find/route.js", "./register/route.js"]
// console.log('allRoute=', allRoute.keys())
allRoute.keys().forEach((file_path, index, array) => {
  const route = allRoute(file_path)
  routes.push(route.default) // router.default 拿到的才是导出的对象，router是模块对象
})
/**
 * routes:[
    {
      path: '/main',
      name: 'main',
      level: 1,
      pname:'',
      component: Main,
      children: [
      ]
    },
    {
      path: '/login',
      name: 'login',
      level: 1,
      pname:'',
      component: Login,
      children:[

      ]
    },
    {
      children: []
      component: {name: "List", components: {…}, staticRenderFns: Array(0), _compiled: true, render: ƒ, …}
      level: 2
      pname:'main',
      name: "goodslist"
      path: "goodslist"
      pname: "main"
    }
 * ]
 */
export default routes || []
