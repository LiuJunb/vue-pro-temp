<template>
  <div
    class="grid-view"
    :style="{width:width}"
  >
    <!-- grid-view -->
    <el-row
      class="grid-row">
      <template v-for="(itemdata, index) in gridData">
        <!-- xl 大pc， lg 小pc + 笔记本 -->
        <el-col
          :key="index"
          :xs="xs"
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl">
          <slot
            name="col-item"
            :item="itemdata"
          >
            <div class="grid-col">
                {{index}}
            </div>
          </slot>
        </el-col>
      </template>
    </el-row>
    <!-- 分页器 -->
    <!-- 分页功能 -->
    <el-pagination
      v-if="hasPagination"
      v-bind="pagination"
      :layout="pagination.layout?pagination.layout:'total, sizes, prev, pager, next, jumper'"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'BGridView',
  components: {

  },
  mixins: [],
  props: {
    width: {
      type: String,
      default: null
    },
    itemData: {
      type: Array,
      default: function() {
        return [
          {
            name: '大军',
            age: '11',
            sex: '男',
            address: 'abc',
            email: '113345321@123'
          },
          {
            name: '小军1',
            age: '11',
            sex: '男',
            address: 'abc',
            email: '113345321@123'
          },
          {
            name: '小军2',
            age: '11',
            sex: '男',
            address: 'abc',
            email: '113345321@123'
          },
          {
            name: '小军3',
            age: '11',
            sex: '男',
            address: 'abc',
            email: '113345321@123'
          },
          {
            name: '小军4',
            age: '11',
            sex: '男',
            address: 'abc',
            email: '113345321@123'
          }
        ]
      }
    },
    hasPagination: {
      type: Boolean,
      default: true
    },
    paginationConf: {
      type: Object,
      default: function() {
        return {
          'current-page': 1, // 重 1 开始
          'page-sizes': [100, 200, 300, 400],
          'page-size': 100,
          layout: 'total, sizes, prev, pager, next, jumper',
          total: 400
        }
      }
    },
    xs: {
      type: Number,
      default: 24
    },
    sm: {
      type: Number,
      default: 24
    },
    md: {
      type: Number,
      default: 24
    },
    lg: {
      type: Number,
      default: 8
    },
    xl: {
      type: Number,
      default: 6
    }

  },
  data: function() {
    return {
      gridData: this.itemData,
      pagination: this.paginationConf
    }
  },
  computed: {

  },
  watch: {
    itemData: function(newV, oldV) {
      this.gridData = newV
    },
    paginationConf: function(newV, oldV) {
      this.pagination = newV
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleSizeChange(val) {
      this.pagination['page-size'] = val
      // console.log(`每页 ${val} 条`)
      // console.log(this.pagination)
      this.$emit('handlePaginatonChange', this.pagination)
    },
    handleCurrentChange(val) {
      this.pagination['current-page'] = val
      console.log(`当前页: ${val}`)
      console.log(this.pagination)
      this.$emit('handlePaginatonChange', this.pagination)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-view{
  // 分页器
  .el-pagination{
    text-align: right;
    margin: 10px;
  }
}
</style>
