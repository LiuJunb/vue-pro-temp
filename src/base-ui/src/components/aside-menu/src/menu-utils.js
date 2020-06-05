// 根据key 和 value 来递归获取 menu
const getMenuByKey = (key, value, menuList = [], resultArrs = []) => {
  for (const aMenu of menuList) {
    if (aMenu[key] === value) {
      // 找到了目标对象
      resultArrs.push(aMenu)
      return aMenu
    } else if (aMenu.children && aMenu.children.length > 0) {
      const bMenu = getMenuByKey(key, value, aMenu.children, resultArrs)
      if (bMenu) {
        // 添加父亲
        resultArrs.unshift(aMenu)
        return bMenu
      }
    }
  }

  return null
}

export default {
  getMenuByKey
}
