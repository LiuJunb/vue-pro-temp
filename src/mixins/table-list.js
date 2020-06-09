import {
  CurSearchParams
} from '@/config/index.js'
import {
  filterNullValue
} from '@/utils/common.js'

export default {
  data: function() {
    return {
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
    this.getList({ ...CurSearchParams }, null)
  },
  // 如果子组件也写了同样的生命周期，先执行mixins的生命周期，再执行子组件的生命周期
  mounted() {
    // console.log('mounted1')
  },
  // 如果子组件也写了同样的方法，子组件的方法会覆盖mixins的方法
  methods: {
    getList(searchParams, valuse) {
      if (valuse && Object.keys(valuse).length > 0) {
        searchParams.data = { ...valuse }
      } else {
        // valuse 为 null
        searchParams.data = {}
        // 重置表单
        if (this.$refs['advanced-search']) {
          this.$refs['advanced-search'].onReset()
        }
      }
      searchParams.data.sortBy = this.sortBy
      // searchParams.data的数据需要过滤掉 null， undefined, '', [] 的情况
      searchParams.data = filterNullValue(searchParams.data)
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
        this.getList({ ...CurSearchParams }, null)
      }
    },
    handlePaginatonClick(pagination) {
      console.log(pagination)
      this.curSearchParams.pageNum = pagination['current-page']
      this.curSearchParams.pageSize = pagination['page-size']
      // 需要缓存
      this.getList(this.curSearchParams, { ...this.curSearchParams.data })
    }
  }

}
