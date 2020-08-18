import store from '../store/index'

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
   * 只有调用 setGlobalState 的方法，该方法才会被调用
   * @param {*} callback
   */
  onGlobalStateChange(callback) {
    this.props.onGlobalStateChange((value, prev) => {
      // console.log('[onGlobalStateChange - master]:', value, prev)
      // 先把数存到store中
      this.saveSharedData(value)
      console.log(this.getSharedData())
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
    this.props.setGlobalState(callback() || {})
  }
}

const shared = new Shared()
export default shared
