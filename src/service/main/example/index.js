import { httpGet, httpPost } from '@/http/index.js'

export const example_api = {
  dataUrl: '/home1',
  listUrl: '/tablelist',
  detailUrl: '/home1'
}

export default {

  getData: (payload, config) => {
    return httpPost(example_api.dataUrl, payload, config)
  },
  getList: (payload, config) => {
    return httpPost(example_api.listUrl, payload, config)
  },
  getDetail: (payload, config) => {
    return httpGet(example_api.detailUrl, payload, config)
  }

}
