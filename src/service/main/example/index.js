import { httpGet, httpPost } from '@/http/index.js'

export const example_api = {
  dataUrl: '/home1',
  listUrl: '/home1',
  detailUrl: '/home1'
}

export default {

  getData: (payload) => {
    return httpPost(example_api.dataUrl, payload)
  },
  getList: (payload) => {
    return httpPost(example_api.listUrl, payload)
  },
  getDetail: (payload) => {
    return httpGet(example_api.detailUrl, payload)
  }

}
