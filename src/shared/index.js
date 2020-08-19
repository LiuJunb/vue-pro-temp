import store from '../store/index'
import router from '../router/index'
const packageName = require('../../package.json').name
class Shared {
  /**
   * 接受 props
   * @param {*} props
   */
  constructor(props) {
    if (props) {
      this.props = props
    }
  }

  setProps(props) {
    this.props = props
    this.onGlobalStateChange(() => { })
  }

  getProps(props) {
    return this.props
  }

  saveSharedData(data = {}) {
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
   * 只有调用 setGlobalState 的方法，该方法才会被调用
   * @param {*} callback
   */
  onGlobalStateChange(callback) {
    if (this.props) {
      this.props.onGlobalStateChange((value, prev) => {
      // console.log('[onGlobalStateChange - master]:', value, prev)
      // 先把数存到store中
        this.saveSharedData(value)
        // console.log(this.getSharedData())
        callback(value, prev)
      // this.pushToPath(value)
      })
    }
  }

  setGlobalState(callback) {
    // setGlobalState({
    //   ignore: 'master',
    //   pushPath: '',
    //   user: {
    //     name: 'master'
    //   }
    // })
    if (this.props) {
      this.props.setGlobalState(callback() || {})
    }
  }
}

const shared = new Shared()
export default shared
