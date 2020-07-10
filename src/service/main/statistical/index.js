import { httpGet, httpPost } from '@/http/index.js'

export const statistical_api = {
  dataUrl: '/home1',
  listUrl: '/tablelist',
  detailUrl: '/home1'
}

export default {

  getData: (payload, config) => {
    return httpPost(statistical_api.dataUrl, payload, config)
  },
  getList: (payload, config) => {
    return httpPost(statistical_api.listUrl, payload, config)
  },
  getDetail: (payload, config) => {
    return httpGet(statistical_api.detailUrl, payload, config)
  }

}
