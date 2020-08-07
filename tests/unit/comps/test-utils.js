// ======== common.js ===========

// const time = require('./time.js')
// import {
//   getTime
// } from './time'
// import axios from 'axios'
// export const getName = (name) => {
//   return 'name=' + name
// }

// export const getAge = (age) => {
//   return age
// }

// export const getDate = (age) => {
//   return getTime()
// }

// export const request = fn => {
//   return axios.get('https://jsonplaceholder.typicode.com/todos/1')
// }
// ======== common.js ===========

// ======== time.js ===========
// export const getTime = (age) => {
//   return '2020-07-20'
// }
// ======== time.js ===========

// const axios = require('axios')
// const common = require('../../../src/basic-comps/test-utils/common.js')

// 1.简单的编写测试用例
// https://juejin.im/post/5ebdf9c26fb9a04329766c66
// test('getName(name)', () => {
//   expect(common.getName('liujun')).toBe('name=liujun') // 测试通过
//   // expect(common.getName('liujun')).toBe('name=liujun') // 测试不通过
// })

// 2.分组测试
// describe('分别测试common的2个方法', () => {
//   test('测试getName', () => {
//     expect(common.getName('liujun')).toBe('name=liujun') // 测试通过
//   })
//   test('测试getAge', () => {
//     expect(common.getAge(12)).toBe(12) // 测试通过
//   })
// })

// // 3.测试的钩子函数
// describe('分别测试common的2个方法', () => {
//   beforeAll(() => {
//     console.log('before all tests!')
//   })

//   beforeEach(() => {
//     console.log('before each test!')
//   })

//   afterAll(() => {
//     console.log('after all tests!')
//   })

//   afterEach(() => {
//     console.log('after each test!')
//   })

//   test('测试getName', () => {
//     expect(common.getName('liujun')).toBe('name=liujun') // 测试通过
//   })
//   test('测试getAge', () => {
//     expect(common.getAge(12)).toBe(12) // 测试通过
//   })
// })

// 4.分组测试(包含本地依赖)
// describe('测试common的getDate方法', () => {
//   test('测试getDate', () => {
//     expect(common.getDate()).toBe('2020-07-20') // 测试通过
//   })
// })

// 5.分组测试(mock模拟数据)
// describe('测试mock模拟数据', () => {
//   test('mock模拟数据', () => {
//     const funa = jest.fn(() => {
//       return 'this is mock fn 1'
//     })
//     const a = funa()
//     console.log(a)
//   })

//   test('测试 jest.fn()', () => {
//     const func = jest.fn()
//     // mockImplementationOnce只会改变要mock的函数多次
//     func.mockImplementation(() => {
//       return 'this is mock fn 1'
//     })
//     // mockImplementationOnce只会改变要mock的函数一次
//     func.mockImplementationOnce(() => {
//       return 'this is mock fn 2'
//     })
//     const a = func() // this is mock fn 2
//     const b = func() // this is mock fn 1
//     const c = func() // this is mock fn 1
//     console.log(a)
//     console.log(b)
//     console.log(c)
//   })
// })

// const mockAxios: any = jest.genMockFromModule('axios')
// mockAxios.create = jest.fn(() => mockAxios)
// mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
// mockAxios.get.mockImplementationOnce(() => {
//   return Promise.resolve({
//     data: {
//       data: qlinks,
//       error_code: 0,
//       message: '',
//     },
//   })
// })

// jest.mock('axios') // 要放在describe外面,模拟一个axios对象( 类似于代理了 axios 对象 )

// 模拟对象和数据
// const mocks = {
//   // 项目中的模块
//   zpfe: {
//     // @zpfe模块，若有，将包名转换为驼峰式以便访问，比如：koaMiddleware
//     log: {
//       info: jest.fn()
//     }

//   },
//   dependencies: {
//     tModule: {
//       // 第三方依赖模块，若有
//       getDate: jest.fn()
//     },
//     files: {
//       // 本地依赖文件
//       router: jest.fn()
//     },
//     others: {
//       // 公共假对象
//       ctx: jest.fn()
//     }
//   }
// }

// 6.分组测试（包含第三方依赖）
// describe('测试common的request方法', () => {
// beforeAll(() => {
// 使用jest.mock()方法模拟axios，
// 使用mockResolvedValue和mockResolvedValueOnce方法模拟返回的数据，
// 同样的，mockResolvedValueOnce方法只会改变一次返回的数据
// jest.mock('axios') // 放在这里不行，要放在describe外面
// })

// 需要注释掉：jest.mock('axios')
// test('测试request，返回真数据', async() => {
//   await common.request().then((res) => {
//     console.log(res)
//   })
//   await common.request().then((res) => {
//     console.log(res)
//   })
// })

// test('测试request，模拟返回数据', async() => {
//   console.log('------------------1-')
//   console.log(axios)
//   console.log('------------------2-')
//   console.log(axios.get)
// 这里的是可有可无，如果有模拟者返回模拟的数据，否则返回真实数据
//   axios.get.mockResolvedValueOnce({ data: 'Jordan', position: 'SG' })
//   axios.get.mockResolvedValue({ data: 'kobe', position: 'SG' })

// 下面发起的get请求会被上面的get方法拦截掉并返回
//   await common.request().then((res) => {
//     expect(res.data).toBe('Jordan') // 测试通过
//   })
//   await common.request().then((res) => {
//     expect(res.data).toBe('kobe') // 测试通过
//   })
// })
// })
