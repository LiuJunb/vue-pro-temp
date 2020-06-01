<template>
  <div class="advanced-table">
     <el-table
      :data="tableData"
      stripe
      border
      height="500"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!-- 第一列的选择框 -->
      <template>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
      </template>
      <!-- 第二，三，四... 列 -->
      <template v-for="(columnData,index) in tableColumn">
        <el-table-column
          :key="index"
          :prop="columnData.prop"
          :label="columnData.label"
          :width="columnData.width">
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
  </div>
</template>

<script>
export default {
  name: 'BAdvancedTable',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'AdvancedTable'
    }
  },
  data: function() {
    return {
      tableColumn: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px'
        },
        {
          prop: 'date',
          label: '日期',
          width: '180px',
          slotColName: 'date'
        },
        {
          prop: 'address',
          label: '地址',
          slotColHeader: 'address-header'
        }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎王小虎王小虎王小虎王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '1111111111-11111-111111111阿斯蒂芬',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleSelectionChange(value) {
      console.log('handleSelection=', value)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-table{

}
</style>
