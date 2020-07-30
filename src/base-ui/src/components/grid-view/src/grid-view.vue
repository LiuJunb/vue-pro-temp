<template>
  <div
    class="grid-view"
    :style="{width:width}"
  >
    <!-- grid-view -->
    <el-row
      v-if="gridData.length>0"
      :gutter="gutter"
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

    <!-- 暂无数据 -->
    <div
      v-else-if="showEmptyText"
      class="empty-text"
    >
      <slot name="empty-text">暂无数据</slot>
    </div>
    <!-- 分页器 -->
    <!-- 分页功能 -->
    <el-pagination
      v-if="hasPagination"
      :background="pagination.background===false?pagination.background:true"
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
    // 组件的宽
    width: {
      type: String,
      default: null
    },
    // 栅格间隔
    gutter: {
      type: Number,
      default: 0
    },
    // 栅格系统的数据
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
    // 是否有分页器
    hasPagination: {
      type: Boolean,
      default: true
    },
    // 分页器的配置
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
    },
    // 没数据时是否显示空文本
    showEmptyText: {
      type: Boolean,
      default: false
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
@import "../../../style/_vars.scss";
.grid-view{
  // 分页器
  .el-pagination{
    text-align: right;
    margin: 10px;
  }

  .empty-text{
    line-height: 60px;
    text-align: center;
    color: $tColorContent;
    font-size: 16px;
    border: 1px solid $tableBorderColor;
  }
}
</style>
