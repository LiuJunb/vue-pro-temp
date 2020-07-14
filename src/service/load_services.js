/**
<<<<<<< HEAD
 * 首字母 大写
 * @param {*} name  Name
 */
const upperCaseFirstName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

/**
=======
>>>>>>> admin-app
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

  let serviceNames = serviceName[serviceName.length - 2]
  serviceNames = serviceNames.split('-')
  let sname = ''
  // ['login', 'index.js']
  sname += serviceNames[0]
  if (serviceNames.length > 1) {
    // ['login-ab', 'index.js']
    serviceNames.forEach((ele, index) => {
      if (index !== 0) {
        sname += upperCaseFirstName(serviceNames[index])
      }
    })
  }
  services[sname + 'Service'] = serviceObj
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
