import {
  httpGet,
  httpPost
} from '@/http/index.js'
export const main_api = {
  getList: '/clue/list',
  getDeptList: '/sys/dept/list'
}

/*
 *@description: 下面编写的是公共的网络请求（会被多个页面使用）
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-18 16:12:57
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {

  getList: (payload, config) => {
    return httpPost(main_api.getList, payload, config)
  },

  getDeptList: (payload, config) => {
    return httpGet(main_api.getDeptList, payload, config)
  }

}
