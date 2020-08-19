import store from '../store/index'
import router from '../router/index'
import { initGlobalState } from 'qiankun'
const packageName = require('../../package.json').name
class Shared {
  /**
   * 接受 props
   * @param {*} props
   */
  constructor(props) {
    // 初始化数据
    const data = {
      user: 'qiankun'
    }
    const { onGlobalStateChange, setGlobalState } = initGlobalState(data)
    // 把数据存到store中
    this.saveSharedData(data)
    if (props) {
      this.props = props
    } else {
      this.props = {
        onGlobalStateChange: onGlobalStateChange,
        setGlobalState: setGlobalState
      }
    }
  }

  setProps(props) {
    this.props = props
  }

  getProps(props) {
    return this.props
  }

  saveSharedData(data) {
    store.dispatch('sharedData', data)
  }

  getSharedData() {
    return store.getters.sharedData || {}
  }

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

  /**
   * 进行界面跳转
   * @param {*} options
   */
  pushToPath(options) {
    const { pushPath } = options
    // console.log('===============')
    // console.log(pushPath, options)
    if (!pushPath) { return }

    if (pushPath.appName === packageName) {
      // console.log(pushPath.appName, packageName)
      router.push(pushPath.path)
      this.setGlobalState(() => {
        return {
          ...options,
          pushPath: null
        }
      })
    }
  }

  /**
   * 只有调用 setGlobalState 的方法，该方法才会被调用,
   * 如果该方法被调用多次时，最后一次起作用
   * @param {*} callback
   */
  onGlobalStateChange(callback) {
    this.props.onGlobalStateChange((value, prev) => {
      // console.log('[onGlobalStateChange-parent - master]:', value, prev)
      // 存数据
      this.saveSharedData(value)
      callback(value, prev)
      this.pushToPath(value)
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
    this.props.setGlobalState(callback() || {})
  }
}

const shared = new Shared()
shared.onGlobalStateChange(() => { })
export default shared
