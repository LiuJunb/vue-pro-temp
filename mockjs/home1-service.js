
// 如果是测试环境(相当于服务器端)
const Mock = require('mockjs')

/** options:
   * {
      url: "/station/holographic/holographic/list"
      type: "POST"
      body: "{"data":{"DESC":"createTime"},"pageNum":1,"pageSize":10}"
   * }
*/
// const tempResult = (options) => {
//   return Mock.mock({
//     code: 200,
//     data: {
//       pageNum: options.pageNum - 1,
//       pageSize: options.pageSize,
//       totalPages: 12,
//       totalSize: 111,
//       'content|111': [
//         {
//           'name|+1': [Mock.mock('@cname'), Mock.mock('@name'), Mock.mock('@clast')], // 重这3个随机取一个
//           'sex|+1': [Mock.mock('@csentence(4)'), Mock.mock('@csentence(14)'), Mock.mock('@csentence(9)')],
//           'culture|+1': [Mock.mock('@word'), Mock.mock('@word(3, 15)'), Mock.mock('@word(13, 25)')],
//           'no|+1': [Mock.mock('@integer(1000, 10000)'), Mock.mock('@integer(100, 1000)'), Mock.mock('@integer(10, 1000)')]
//         }
//         // { name: 'liujun2', id: 122, no: 122 }
//       ]
//     }
//   })
// }

/**
 *  Mock.mock( { } )
 *  Mock.mock('', '', ()=> )
   * 获取列表的数据 get
   *  参数一：url (string | regex), 例如：/\.json/,在get请求的时候使用
   *  参数二: method
   *  参数三：回调函数
   */
Mock.mock(/\/station\/home1/, 'get', function(options) {
  //  options 是接口客户端提交的请求参数
  /**
   * {
      url: "/station/holographic/holographic/list"
      type: "get"
      body: "{"data":{"DESC":"createTime"},"pageNum":1,"pageSize":10}"
   * }
   */
  console.log('home1=', options.url)
  return { name: 'get' }
})

Mock.mock('/station/home2', 'post', function(options) {
  //  options 是接口客户端提交的请求参数
  /**
    * {
       url: "/station/holographic/holographic/list"
       type: "post"
       body: "{"data":{"DESC":"createTime"},"pageNum":1,"pageSize":10}"
    * }
    */
  console.log('home2=', options.body)
  return { name: 'post' }
})

const tempResult = {
  code: 200,
  data: {
    content: [
      { address: '大上海1', content: '护手霜里，绝对是好', sex: '男', age: 18, name: '刘军', id: 121 },
      { address: '大上海2', content: '护手霜里，绝对是好', sex: '男', age: 11, name: '大军', id: 122 },
      { address: '大上海3', content: '护手霜里，绝对是好', sex: '男', age: 12, name: '小军', id: 123 },
      { address: '大上海4', content: '护手霜里，绝对是好', sex: '男', age: 13, name: '军军', id: 124 },
      { address: '大上海5', content: '护手霜里，绝对是好', sex: '男', age: 14, name: '刘军1', id: 125 },
      { address: '大上海6', content: '护手霜里，绝对是好', sex: '男', age: 15, name: '军军2', id: 126 },
      { address: '大上海7', content: '护手霜里，绝对是好', sex: '男', age: 21, name: '小军2', id: 127 },
      { address: '大上海8', content: '护手霜里，绝对是好', sex: '男', age: 2, name: '大军2', id: 128 },
      { address: '大上海9', content: '护手霜里，绝对是好', sex: '男', age: 10, name: '军', id: 129 },
      { address: '大上海0', content: '护手霜里，绝对是好', sex: '男', age: 19, name: '军哥', id: 120 }
    ],
    pageNum: 0,
    pageSize: 10,
    totalPages: 2,
    totalSize: 11
  }
}

Mock.mock('/station/tablelist', 'post', function(options) {
  //  options 是接口客户端提交的请求参数
  /**
    * {
       url: "/station/holographic/holographic/list"
       type: "post"
       body: "{"data":{"DESC":"createTime"},"pageNum":1,"pageSize":10}"
    * }
    */
  return tempResult
})
