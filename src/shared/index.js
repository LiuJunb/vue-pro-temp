import store from '../store/index'
import { initGlobalState } from 'qiankun'
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun'
})
class Shared {
  /**
   * 获取 Token
   */
  getToken() {
    console.log(store)
    // const state = store.getState()

    // return state.token || ''
  }

  /**
   * 设置 Token
   */
  setToken(token) {
    console.log(token)
    // 将 token 的值记录在 store 中
    // store.dispatch({
    //   type: 'SET_TOKEN',
    //   payload: token
    // })
  }

  onGlobalStateChange(callback) {
    onGlobalStateChange((value, prev) => {
      console.log('[onGlobalStateChange - master]:', value, prev)
      callback(value, prev)
    })
  }

  setGlobalState(callback) {
    // setGlobalState({
    //   ignore: 'master',
    //   pushPath: '',
    //   user: {
    //     name: 'master'
    //   }
    // })
    setGlobalState(callback() || {})
  }
}

const shared = new Shared()
export default shared
