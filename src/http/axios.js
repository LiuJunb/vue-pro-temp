import axios from 'axios'
import qs from 'qs'
import {
  baseURL
} from '@/config/index.js'
// 1.创建一个axios的实例
const instance = axios.create({
  baseURL, //  /category ; /home/data?type=pop&page=1
  timeout: 60000 // 60 s
})
// 2.添加默认的配置
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.transformRequest = [function(data, config) {
  if (!config['Content-Type']) {
    // 将对象 序列化成URL的形式，以&进行拼接
    return qs.stringify(data)
  }
  switch (config['Content-Type'].toLowerCase()) {
    // 上传json对象
    case 'application/json;charset=utf-8': {
      // 将对象 序列化成json字符串的形式
      return JSON.stringify(data)
    }
    // multipart/form-data;charset=utf-8 上传文件
    case 'multipart/form-data;charset=utf-8': {
      return data
    }
    default: {
      // 提交表单: 将对象 序列化成URL的形式，以&进行拼接
      return qs.stringify(data)
    }
  }
}]

// 3.拦截请求
instance.interceptors.request.use(config => {
  // 给所有的请求头：统一添加自定义的 auth_token
  config.headers.auth_token = '1a4536a3-9f7e-40f5-85fd-7a6232f37ffe'
  return config
}, error => {
  return Promise.reject(error.data.error.message)
})

// 4.拦截响应
instance.interceptors.response.use(response => {
  // const data = response.data
  return response
}, error => {
  // 判断错误url是否为请求接口*/
  if (error.response.status === 404) {
    return Promise.reject(error)
  }

  // 判断返回的状态码为400
  if (error.response.status === 403) {
    return Promise.reject(error)
  }
  // 判断返回的状态码为403
  return Promise.reject(error)
})

/**
 * 5.发起一个get请求
 * @param url     // /home?name=xxx&age=xx
 * @param params  // {name:"liujun",age:12 }
 * @param config  //  {baseURL:'http://xxxx',timeout: 5000,headers: {'X-Requested-With': 'XMLHttpRequest'}, ... }
 * @return promise
 */
export const httpGet = (url, params, config) => {
  params = params || {}
  config = config || {}
  config = Object.assign(config, { params: params })
  return instance.get(url, config)
}

/**
 * 6.发起一个post请求
 * @param url   // /home
 * @param data  // { name:"liujun",age:12 } or FormData
 * @param config // {baseURL:'http://xxxx',timeout: 5000,headers: {'X-Requested-With': 'XMLHttpRequest'}, ... }
 * @return promise
 */
export const httpPost = (url, data, config) => {
  config = config || {}
  return instance.post(url, data, config)
}

/**
 * 7.发起一个put请求: 编辑
 * @param url   // /home
 * @param data  // { name:"liujun",age:12 } or FormData
 * @param config // {baseURL:'http://xxxx',timeout: 5000,headers: {'X-Requested-With': 'XMLHttpRequest'}, ... }
 * @return promise
 */
export const httpPut = (url, data, config) => {
  config = config || {}
  return instance.put(url, data, config)
}

/**
 * 8.发起一个delete请求: 删除数据
 * @param url   // /home
 * @param data  // { name:"liujun",age:12 } or FormData
 * @param config // {baseURL:'http://xxxx',timeout: 5000,headers: {'X-Requested-With': 'XMLHttpRequest'}, ... }
 * @return promise
 */
export const httpDelete = (url, config) => {
  config = config || {}
  return instance.delete(url, config)
}

/**
 使用案例：

import { httpGet ,httpPost} from '@src/ajax'

httpGet('/home',{
      age:"20",
      name:"刘军"
    }).then((res)=>{
        console.log(res.data);
    })

httpGet('/get',{
      age:"20",
      name:"刘军"
    },{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded",
        "Accept":"application/json"
      }
    }).then((res)=>{
        console.log(res.data);
    })

httpPost('/post',{
      age:"20",
      name:"刘军"
    },{
      headers:{
        "Content-Type":"application/x-www-form-urlencoded",
        "Accept":"application/json"
      }
    }).then((res)=>{
        console.log(res.data);
    })

 */
