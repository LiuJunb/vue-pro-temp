// 该文件在main.js的最底部引入
import { registerMicroApps, start } from 'qiankun'
registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#appContainer',
    activeRule: '/app1'
  }
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#appContainer',
  //   activeRule: '/yourActiveRule2'
  // }
])
start()
