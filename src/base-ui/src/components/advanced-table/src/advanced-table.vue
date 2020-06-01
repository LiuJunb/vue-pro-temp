<template>
  <div class="advanced-table">
    <!-- 表格功能 -->
     <el-table
      :data="tableData"
      v-bind="$attrs"
      @selection-change="handleSelectionChange">
      <!-- 第一列的选择框 -->
      <template v-if="hasSelection">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
      </template>
      <!-- 第二，三，四... 列 -->
      <template v-for="(columnData,index) in tableColumn">
        <el-table-column
          :key="index"
          v-bind="columnData">
          <!-- 自定义-列布局 -->
           <template
            slot-scope="scope">
            <slot
              :name="columnData.slotColName"
              :row="scope.row">
              {{scope.row[columnData.prop]}}
            </slot>
          </template>

          <!-- 自定义-该列-头部 -->
          <template
            v-if="columnData.slotColHeader"
            slot="header">
            <slot
              :name="columnData.slotColHeader">
              {{columnData.label}}
            </slot>
          </template>
        </el-table-column>
      </template>

    </el-table>

    <!-- 分页功能 -->
    <el-pagination
      v-if="hasPagination"
      v-bind="pagination"
      :layout="pagination.layout?pagination.layout:'total, sizes, prev, pager, next, jumper'"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>

    <!-- <el-pagination
      v-if="hasPagination"
      :current-page="pagination.currentPage"
      :page-sizes="pagination.pageSizes"
      :page-size="pagination.pageSize"
      :layout="pagination.layout?pagination.layout:'total, sizes, prev, pager, next, jumper'"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination> -->
  </div>
</template>

<script>
/*
 *@description:
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-01 10:09:06
 *@version V0.1.0
 *@API:
 *@ 参数

 *@ 事件
     this.$emit('handleSelectionChange', value)
     this.$emit('handlePaginatonChange', this.pagination)
*/
export default {
  name: 'BAdvancedTable',
  components: {

  },
  mixins: [],
  props: {
    hasSelection: {
      type: Boolean,
      default: false
    },
    hasPagination: {
      type: Boolean,
      default: true
    },
    tabColumn: {
      type: Array,
      default: function() {
        return [
          {
            prop: 'name',
            label: '姓名',
            width: '180px',
            'show-overflow-tooltip': true
          },
          {
            prop: 'date',
            label: '日期',
            width: '180px',
            slotColName: 'date' // 自定义列的插槽
          },
          {
            prop: 'address',
            label: '地址',
            slotColHeader: 'address-header'// 自定义列头部的插槽
          }
        ]
      }
    },
    tabData: {
      type: Array,
      default: function() {
        return [
          {
            date: '2016-05-02',
            name: '王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '1111111111-11111-111111111阿斯蒂芬111111111阿斯蒂芬111111111阿斯蒂芬111111111阿斯蒂芬',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
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
    }
    // paginationConf: {
    //   type: Object,
    //   default: function() {
    //     return {
    //       currentPage: 1,
    //       pageSizes: [100, 200, 300, 400],
    //       pageSize: 100,
    //       layout: 'total, sizes, prev, pager, next, jumper',
    //       total: 400
    //     }
    //   }
    // }

  },
  data: function() {
    return {
      tableColumn: this.tabColumn,
      tableData: this.tabData,
      pagination: this.paginationConf
    }
  },
  computed: {

  },
  watch: {
    tableColumn: function(newV, oldV) {
      this.tableColumn = this.tabColumn
      this.tableData = this.tabData
      this.pagination = this.paginationConf
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleSelectionChange(value) {
      // console.log('handleSelection=', value)
      this.$emit('handleSelectionChange', value)
    },
    handleSizeChange(val) {
      this.pagination['page-size'] = val
      // console.log(`每页 ${val} 条`)
      // console.log(this.pagination)
      this.$emit('handlePaginatonChange', this.pagination)
    },
    handleCurrentChange(val) {
      this.pagination['current-page'] = val
      // console.log(`当前页: ${val}`)
      // console.log(this.pagination)
      this.$emit('handlePaginatonChange', this.pagination)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-table{

  // 分页器
  .el-pagination{
    text-align: right;
    margin: 10px;
  }

}
</style>
