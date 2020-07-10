import { httpGet, httpPost } from '@/http/index.js'

export const gridview_api = {
  dataUrl: '/home1',
  listUrl: '/tablelist',
  detailUrl: '/home1'
}

export default {

  getData: (payload, config) => {
    return httpPost(gridview_api.dataUrl, payload, config)
  },
  getList: (payload, config) => {
    return httpPost(gridview_api.listUrl, payload, config)
  },
  getDetail: (payload, config) => {
    return httpGet(gridview_api.detailUrl, payload, config)
  }

}
