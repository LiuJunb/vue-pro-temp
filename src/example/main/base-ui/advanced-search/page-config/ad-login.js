
import {
  AdvancedSearch
} from '@/base-ui/src'
import Regular from '@/regular/index.js'
const { SearchType } = AdvancedSearch

var validateUsername = (rule, value, callback) => {
  // console.log(rule, value, callback)
  if (value === '') {
    callback(new Error('不能为空'))
  } else {
    callback()
  }
}

/**
  当输入密码时回调这个函数（change事件）
  1.字符长度【8,24】
  2.字符类型：大写字母，小写字母，数字，特殊符号，不能为空格
  3.密文展示
  4.密码强度（至少包含两种字符类型）

  5.重复字元不超过三个 比如：111, AAA 可以用，1111、AAAA四个以上重复就不行
  6.连续数字字元不超过三个 比如：123 可以用, 1234 四个以上连续就不行

  7.不能为空
  8.可以重复
  10.没填写密码时，友好提示请输入密码

  9.请求过程中和数据库存储需要加密处理
  11.密码填写错误时，友好提示账号或密码输入错误

 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
var validatePassword = (rule, value, callback) => {
  // console.log(rule, value, callback)
  const hasBlankSpace = new RegExp(Regular.HasBlankSpace[0])
  const number = new RegExp(Regular.Number[0])
  const letter = new RegExp(Regular.Letter[0])
  const aAA = new RegExp(Regular.AAA[0])
  const aBC = new RegExp(Regular.ABC[0])
  const cBA = new RegExp(Regular.CBA[0])

  const blankSpace = hasBlankSpace.test(value)
  const isNumber = number.test(value)
  const isLetter = letter.test(value)
  const isAAA = aAA.test(value)
  const isABC = aBC.test(value)
  const isCBA = cBA.test(value)
  if (blankSpace) {
    callback(new Error('不能输入空格'))
  } else if (value === '') {
    callback(new Error('请输入密码'))
  } else if (isNumber || isLetter) {
    callback(new Error('至少包含两种字符类型'))
  } else if (isAAA) {
    callback(new Error('重复的字母/数组/符号不能出现3次'))
  } else if (isABC || isCBA) {
    callback(new Error('连续数字不超过三个'))
  } else if (value.length < 8 || value.length > 24) {
    callback(new Error('密码长度为8-24个字符'))
  } else {
    callback()
  }
}

export const adLogin = [

  {
    ItemType: SearchType.default,
    fieldId: 'username',

    defaultValue: '',
    // labelName: '用户名',
    // prefixIcon: 'el-icon-user',
    'prefix-icon': 'el-icon-user',
    clearable: true,

    rules: [
      { required: false, message: '请输入用户名', trigger: 'blur' },
      // { min: 11, max: 11, message: '长度在11个字符', trigger: 'change' },
      { validator: validateUsername, trigger: 'change' }
    ],
    placeholder: '请输入用户名'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'password',

    defaultValue: '',
    // labelName: '请输入密码',
    prefixIcon: 'el-icon-lock',
    // showPassword: true, // 跟下面的一样
    'show-password': true,

    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { validator: validatePassword, trigger: 'change' }
    ],
    placeholder: '请输入密码'
  }
]
