// 默认导出config.dev.js的导出的属性
// export * from './config.dev.js'
export * from './config.pro.js'

export const isDevelopment = process.env.NODE_ENV === 'development'
