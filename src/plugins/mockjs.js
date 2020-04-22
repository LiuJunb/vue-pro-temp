// 导入mockjs
import { startMock, isDevelopment } from '@/config/index.js'
// import '../../mockjs/index.js'
// console.log(startMock)
// console.log(isDevelopment)
startMock && isDevelopment && require('../../mockjs/index.js')
