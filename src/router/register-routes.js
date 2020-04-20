import AllRoute from '@/views/load-routes.js'
// 获取一级路由
const aRoutes = AllRoute.filter((route) => {
  return route.level === 1
})
// 获取一级路由
const bRoutes = AllRoute.filter((route) => {
  return route.level === 2
})
// 获取一级路由
const cRoutes = AllRoute.filter((route) => {
  return route.level === 3
})

aRoutes.forEach(element1 => {
  // 遍历2级路由
  bRoutes.forEach((element2) => {
    if (element2.pname === element1.name) {
      // 遍历3级路由
      cRoutes.forEach((element3) => {
        if (element3.pname === element2.name) {
          element2.children.push(element3)
        }
      })
      element1.children.push(element2)
    }
  })
})
// console.log(aRoutes)
export default aRoutes

