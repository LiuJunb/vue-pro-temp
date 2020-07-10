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
    if (value || value === 0) {
      if (value instanceof Array && value.length <= 0) {
        // 不会中断循环
      } else if (value instanceof String) {
        if (value.trim()) {
          obj[key] = values[key].trim()
        }
      } else {
        obj[key] = values[key]
      }
    }
  })
  return obj
}
// console.log(filterNullValue({ users: [1], name: '', age: null, address: undefined, email: 'xx' }))

/**
* 3.防抖函数 -> 会把前一个清除调
* @param method 事件触发的操作
* @param delay 多少毫秒内连续触发事件，不会执行(默认500毫秒)
* @returns {Function} handleInput:debounce(function(val){}){ console.log(val)  }
*/
export const debounce = (method, delay) => {
  delay = delay || 500
  let timer = null
  return function() {
    const self = this
    const args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(function() {
      method.apply(self, args)
    }, delay)
  }
}

/**
* 3.文件下载
*
*/
// 根据文件url 下载文件
export const downloadFileByUrl = {
  /**
   * 获取Blob
   * @param  {url} url 访问地址
   * @param  {cb} cb 回调
   */
  getBlob: (url, cb) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function() {
      if (xhr.status === 200) {
        cb(xhr.response)
      }
    }
    xhr.send()
  },

  /**
   * 保存
   * @param  {Blob} blob
   * @param  {String} filename 想要保存的文件名称
   */
  saveAs: (blob, filename) => {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename)
    } else {
      var link = document.createElement('a')
      var body = document.querySelector('body')

      link.href = window.URL.createObjectURL(blob)
      link.download = filename

      // fix Firefox
      link.style.display = 'none'
      body.appendChild(link)

      link.click()
      body.removeChild(link)

      window.URL.revokeObjectURL(link.href)
    };
  },

  /**
   * 下载
   * @param  {String} url 目标文件地址
   * @param  {String} filename 想要保存的文件名称
   */
  download: (url, filename) => {
    downloadFileByUrl.getBlob(url, (blob) => {
      downloadFileByUrl.saveAs(blob, filename)
    })
  }
}
