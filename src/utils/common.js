/**
 * {
 *   name:null,
 *   age:'',
 *   user:'  ',
 *   address:undefind,
 *   arrs:[]
 * }
 * @param {*} values
 */
export const filterNullValue = (values) => {
  const obj = {}

  Object.keys(values).forEach((key) => {
    const value = values[key]
    // 如果不为空
    if (value) {
      if (value instanceof Array && value.length <= 0) {
        return // 不会中断循环
      }
      if (value.trim()) {
        obj[key] = values[key]
      }
    }
  })
  return obj
}

// console.log(filterNullValue({ users: [1], name: '', age: null, address: undefined, email: 'xx' }))
