// 导入mockjs
import { startMock } from '@/config/index.js'
// 必须是测试环境 才打包该 mockjs 库( 下面的代码顺序不能调整 )
process.env.NODE_ENV === 'development' && startMock && require('../../mockjs/index.js')
