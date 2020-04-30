import { httpGet, httpPost } from '@/http/index.js'

export const warning_api = {
  dataUrl: '/home1',
  listUrl: '/home1',
  detailUrl: '/home1'
}

export default {

  getData: (payload) => {
    return httpPost(warning_api.dataUrl, payload)
  },
  getList: (payload) => {
    return httpPost(warning_api.listUrl, payload)
  },
  getDetail: (payload) => {
    return httpGet(warning_api.detailUrl, payload)
  }

}
