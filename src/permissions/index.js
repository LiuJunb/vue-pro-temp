/**
 * 判断按钮是否有权限
 * @param permissions 登录后拿到所有的 permissions: ['','']
 * @param {} btnPermission 该按钮对应的权限:''
 */
export const hasPermission = (permissions, btnPermission) => {
  permissions = permissions || []
  let result = false
  permissions.forEach((element, index) => {
    // 用户拥有该 btnPermission 的权限
    if (btnPermission === element) {
      result = true
    }
  })
  return result
}
