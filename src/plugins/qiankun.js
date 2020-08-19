// 该文件在main.js的最底部引入
import { registerMicroApps, start } from 'qiankun'
const appContainer = document.querySelector('#appContainer')
registerMicroApps([
  {
    name: 'vue-app', // app name registered
    entry: '//192.168.99.115:8081',
    // container: '#appContainer',
    container: appContainer,
    activeRule: '/app1'
  }
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#appContainer',
  //   activeRule: '/yourActiveRule2'
  // }
],
{
  afterMount: (app) => {
    appContainer.firstChild.style = 'height:100%'
  }
}
)
start()
