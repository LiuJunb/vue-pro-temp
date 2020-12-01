<template>
  <div class="advanced-table">
    <!-- 表格功能 -->
     <el-table
      ref="elTable"
      :data="tableData"
      v-bind="$attrs"
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      v-on="$listeners"
      @selection-change="handleSelectionChange">
      <!-- 添加嵌套布局 -->
      <template v-if="hasExpand">
        <el-table-column
          type="expand">
          <template slot-scope="scope">
            <slot
                name="expand"
                :row="scope.row">
                <div class="no-data">没数据</div>
            </slot>
          </template>
        </el-table-column>
      </template>

      <!-- 第一列的选择框 -->
      <template v-if="hasSelection">
        <el-table-column
          type="selection"
          width="55"
          v-bind="selectionAttr">
        </el-table-column>
      </template>
     <!-- 第二列的索引 -->
     <template v-if="hasIndex">
      <el-table-column
        label="序号"
        type="index"
        width="50">
      </el-table-column>
     </template>
      <!-- 第三，四,五... 列 -->
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
      :background="pagination.background===false?pagination.background:true"
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
    // table 头部的样式
    headerCellStyle: {
      type: Object,
      default: function() {
        return {
          backgroundColor: '#f5f5f9'
        }
      }
    },
    //  每一行的样式
    rowStyle: {
      type: Object,
      default: function() {
        return {

        }
      }
    },
    // 是否有嵌套布局
    hasExpand: {
      type: Boolean,
      default: false
    },
    // 是否需要序号
    hasIndex: {
      type: Boolean,
      default: true
    },
    // 是否需要可勾选的行
    hasSelection: {
      type: Boolean,
      default: false
    },
    // 勾选列的配置，也是el-table-column的配置
    selectionAttr: {
      type: Object,
      default: function() {
        return {}
      }
    },
    // 是否需要分页器
    hasPagination: {
      type: Boolean,
      default: true
    },
    // table的列的配置
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
    // table每一列的数据
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
    // 初始化或者更新分页器的配置
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
    tabColumn: function(newV, oldV) {
      this.tableColumn = newV
    },
    tabData: function(newV, oldV) {
      this.tableData = newV
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
    },

    // 返回el-table的对象
    getElTable() {
      if (this.$refs.elTable) {
        return this.$refs.elTable
      }
      return null
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../style/_vars.scss";
.advanced-table{

  // 分页器
  .el-pagination{
    text-align: right;
    margin: 10px;
  }
  /deep/ .el-table__expanded-cell{
    padding:0px;
  }

  .no-data{
    line-height: 60px;
    text-align: center;
    color: $tColorContent;
    font-size: 16px;
    border: 1px solid $tableBorderColor;
  }

}
</style>
