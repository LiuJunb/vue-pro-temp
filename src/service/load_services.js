/**
 * 自动加载 services
 */
const services = {}
const allServices = require.context('@/service/', true, /index\.(js|ts)$/)
// console.log('allServices=', allServices.keys()) // ['./login/index.js']
allServices.keys().forEach((item, index, array) => {
  // item = ./login/index.js => login/index.js
  const module_path = item.substr(2)
  const module = require(`@/service/${module_path}`) // @/service/login/index.js
  const serviceObj = module.default
  const serviceName = module_path.split('/') // ['login', 'index.js']
  services[serviceName[serviceName.length - 2] + 'Service'] = serviceObj
  // const ServiceFunc = module.default // 拿到了 class == func
  // console.log(new ServiceFunc()) // 新建对象
  // const serviceName = module_path.split('/') // [interrogaterecord, index.js]
  // services[serviceName[serviceName.length - 2] + 'Service'] = new ServiceFunc() // s_router.default 拿到的才是导出的对象，s_router是模块对象
})
/**
 * services:{
    interrogaterecordService：new ServiceFunc()
 * }
 */
// console.log(services)
export default services || {}
