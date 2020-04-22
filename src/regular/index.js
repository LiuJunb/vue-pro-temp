// {
//   validator: function(rule, value, callback) {
//     const reg = new RegExp(Regular.Number[0])
//     if (value === undefined) value = 0
//     const result = reg.test(Number(value))
//     console.log(value, Number(value), result)
//     // 如果匹配失败
//     if (!result) {
//       callback(Regular.Number[1])
//     } else {
//       // 匹配成功
//       callback()
//     }
//   }
// }

// 定义表单所用到的正则
export default {
  Demo1: [
    /^xxxx$/,
    '正则格式:注意不是字符串来的'
  ],
  Number5: [
    /^\d{1,5}$/,
    '只能输入正数，最大5位'
  ],
  // $ : 代表时以什么结尾
  // ^ : 代表以什么开发
  // * : 代表0个或者多个
  Number: [
    /^\d*$/,
    '只能数字'
  ],
  // + 一次或多次； g 全局匹配
  // exec函数可以提取分组数据
  Empty: [
    /(^\s+)|(\s+$)/g,
    '前后不能输入空格'
  ],
  // i：表示不区分大小写
  // ^：代表是取反
  NoChinese: [
    /[^\u4E00-\u9FA5]/i,
    '不能输入中文'
  ],
  Email: [
    '',
    '邮箱输入错误'
  ],
  MobilePhone: [
    '/^1[3|4|5|6|7|8][0-9]{9}$/',
    '手机号码输入错误'
  ],
  TelPhone: [
    '',
    '座机号码输入错误'
  ],
  MobileORTelPhone: [
    '',
    '手机或者座机号码输入错误'
  ],
  NumberORLetter: [
    /[A-Za-z0-9]+/,
    '只能输入数字或英文字母'
  ]
}
