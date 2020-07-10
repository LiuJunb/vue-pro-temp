import {
  CurSearchParams
} from '@/config/index.js'
import {
  filterNullValue
} from '@/utils/common.js'

export default {
  data: function() {
    return {
      // 备份一个分页参数
      CurSearchParams: { ...CurSearchParams },
      isFirstRequest: true,
      curSearchParams: { ...CurSearchParams }
    }
  },
  computed: {
    tabData() {
      const list = this.$store.getters[this.pageListActions]
      return list
    },
    paginationConfig() {
      const paginatonConf = this.$store.getters[this.pageListActions + 'PaginatonConfig']
      return paginatonConf
    }
  },
  watch: {

  },
  created() {
    this.getList({ ...CurSearchParams })
  },
  // 如果子组件也写了同样的生命周期，先执行mixins的生命周期，再执行子组件的生命周期
  mounted() {
    // console.log('mounted1')
  },
  // 如果子组件也写了同样的方法，子组件的方法会覆盖mixins的方法
  methods: {
    /**
     * // 不需要缓存
     * getList(this.CurSearchParams)
     * // 需要缓存
     * getList(this.curSearchParams)
     * // 添加查询参数
     * getList(this.curSearchParams, value)
     * @param {*} searchParams 分页的参数
     * @param {*} value 高级搜索参数
     * @param {*} compareParams 实时分页的参数
     */
    getList(searchParams, value, compareParams = this.curSearchParams) {
      // 判断是否需要缓存
      if (searchParams === compareParams) {
        // 需要缓存(用于列表翻页或者列表内部分数据变动,页面不改变)
        searchParams = { ...searchParams, ...value }
        searchParams.sortBy = this.sortBy
        searchParams = filterNullValue(searchParams)
      } else {
        // 不需要缓存,重置页面或者第一次调用
        if (this.$refs['advanced-search']) {
          this.$refs['advanced-search'].onReset()
        }
      }
      this.curSearchParams = searchParams
      // todo ........
      // if (valuse && Object.keys(valuse).length > 0) {
      //   searchParams.data = { ...valuse }
      // } else {
      //   // valuse 为 null
      //   searchParams.data = {}
      //   // 重置表单
      //   if (this.$refs['advanced-search']) {
      //     this.$refs['advanced-search'].onReset()
      //   }
      // }
      // searchParams.data.sortBy = this.sortBy
      // // searchParams.data的数据需要过滤掉 null， undefined, '', [] 的情况
      // searchParams.data = filterNullValue(searchParams.data)
      // todo ........

      // 可以解构多层
      this.curSearchParams = { ...searchParams }
      this.$store.dispatch(this.pageListActions, searchParams)
        .then((res) => {
          this.isFirstRequest = false
        })
    },
    // 高级搜索
    handleSubmitClick(valuse) {
      // 需要缓存
      this.curSearchParams.pageNum = 1
      this.getList(this.curSearchParams, valuse)
    },
    // 按钮组
    handleBtnListClick(item) {
      // console.log(item)
      // 刷新(不需要缓存)
      if (item._name === '刷新') {
        this.getList({ ...CurSearchParams })
      }
    },
    handlePaginatonClick(pagination) {
      // console.log(pagination)
      this.curSearchParams.pageNum = pagination['current-page']
      this.curSearchParams.pageSize = pagination['page-size']
      // 需要缓存
      this.getList(this.curSearchParams)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件this实例
      if (from.query.id) {
        // 需要缓存(详情返回)
        vm.getList(vm.curSearchParams)
      } else {
        // 不需要缓存（从其它菜单跳转这个页面）
        if (!vm.isFirstRequest) { // 排除第一次初始化的请求
          vm.getList({ ...CurSearchParams })
        }
      }
    })
  }

}
