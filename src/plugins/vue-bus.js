/**
 * 编写一个vue-bus的插件
 * @param {} Vue
 */
const install = function(Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(evnet, callback) {
        this.$on(evnet, callback)
      },
      off(evnet, callback) {
        this.$on(evnet, callback)
      }
    }
  })
  Vue.prototype.$bus = Bus
}
export default install
