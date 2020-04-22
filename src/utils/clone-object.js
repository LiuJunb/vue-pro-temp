/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */

// https://blog.csdn.net/lyt_angularjs/article/details/86599820

function _getDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function copyRegExp(regExp) {
  let attrs = ''
  if (regExp.global) attrs += 'g'
  if (regExp.ignoreCase) attrs += 'i'
  if (regExp.multiline) attrs += 'm'
  const newRegExp = new RegExp(regExp, attrs)
  newRegExp.lastIndex = regExp.lastIndex
  return newRegExp
}

function clone(x) {
  // String Number Boolean Undefined Null 返回自身
  if (x == null || typeof x !== 'object') return x
  // RegExp Date Function 克隆
  const type = _getDataType(x)
  let root
  switch (type) {
    case 'RegExp':
      return copyRegExp(x)
    case 'Date':
      return new Date(x.getTime())
    case 'Function':
      return x
    case 'Array':
      root = []
      break
    default:
      root = Object.create(Object.getPrototypeOf(x))
  }
  // Array Object 克隆
  // 用来去重 解决原数据中多个属性引用同一对象克隆后不相同问题( 防止循环引用问题 )
  const uniqueList = []
  // 使用栈结构解决递归爆栈问题
  const stack = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]
  // 深度优先循环(防止递归爆栈)
  while (stack.length) {
    const { parent, key, data } = stack.pop()
    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      const type = _getDataType(data)
      switch (type) {
        case 'RegExp':
          parent[key] = copyRegExp(data)
          continue
        case 'Date':
          parent[key] = new Date(data.getTime())
          continue
        case 'Function':
          parent[key] = data
          continue
        case 'Array':
          res = parent[key] = []
          break
        default:
          const proto = Object.getPrototypeOf(data)
          res = parent[key] = Object.create(proto)
      }
    }
    // 数据引用已经存在则赋值并退出本次循环,不存在则缓存
    const uniqueData = uniqueList.find(item => item.source === data)
    if (uniqueData) {
      parent[key] = uniqueData.target
      continue
    } else {
      uniqueList.push({
        source: data,
        target: res
      })
    }
    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        if (data[k] == null || typeof data[k] !== 'object') {
          // 基础类型克隆
          const descriptor = Object.getOwnPropertyDescriptor(data, k)
          Object.defineProperty(res, k, descriptor)
        } else {
          // 引用类型加入stack循环处理
          stack.push({
            parent: res,
            key: k,
            data: data[k]
          })
        }
      }
    }
  }
  return root
}
/**
 * 深克隆,考虑到(1.类型检查,2.递归爆栈,3.相同引用,4.Date和Function等特殊类型克隆,原型克隆)
 */
export {
  clone
}
