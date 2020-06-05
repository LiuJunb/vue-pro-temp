<template>
  <div class="example">
    <!-- 高级搜索 -->
    <b-advanced-search
       ref='advanced-search'
       label-width="90px"
       :inline="true"
       :formItems="adSearchConfig"
       @handleSubmit="handleSubmitClick"
    >
     <template v-slot:url="slotProps">
       <el-input
        v-model="slotProps.data[slotProps.row.fieldId]"
        placeholder="请输入内容">
        <template slot="prepend">Http://</template>
      </el-input>
     </template>
    </b-advanced-search>
    <!-- 分界线 -->
    <b-divider-line :style="{margin:'0px -20px'}"></b-divider-line>
    <!-- 按钮组 -->
    <b-button-group
      :style="{margin:'15px 0px'}"
      :permissions="permissions"
      :btnList="btnListConfig"
      @handleBtnClick="handleBtnListClick">
      <template v-slot:upload-1="slotProps">
        <el-upload
          :style="{display: 'inline-block',margin:'0px 10px'}"
          action="https://jsonplaceholder.typicode.com/posts/"
          >
          <el-button
            :type="slotProps.item.type"
            :icon="slotProps.item.icon"
            :size="slotProps.item.size"
            :disabled="slotProps.item.disabled"
          >
            {{slotProps.item.name}}
          </el-button>
        </el-upload>
      </template>
    </b-button-group>

    <!-- 表格 -->
    <!-- height="600" max-height=''-->
    <b-advanced-table
      style="width: 100%"
      border
      stripe
      :hasSelection="true"
      :tabColumn="tabColumnConfig"
      :tabData="tabData"
      :paginationConf="paginationConfig"
      @handleSelectionChange="handleSelectionClick"
      @handlePaginatonChange="handlePaginatonClick"
    >
     <template v-slot:operation="slotProps">
        <b-button-group
          :btnList="btnOperationConfig"
          @handleBtnClick="handleBtnOperClick($event,slotProps.row)">
        </b-button-group>
      </template>
    </b-advanced-table>
  </div>
</template>

<script>
import {
  adSearchConfig,
  btnListConfig,
  btnOperationConfig,
  tabColumnConfig
} from './page-config'
import {
  PaginatonDefaultConfig,
  CurSearchParams
} from '@/config/index.js'
export default {
  name: 'Example',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Example'
    }
  },
  data: function() {
    return {
      adSearchConfig,
      btnListConfig,
      btnOperationConfig,
      tabColumnConfig,
      pageListActions: 'main_example/list',
      permissions: [
        'pp.list'
      ],

      tabData: [
        {
          name: '刘军1',
          age: 100,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '小军2',
          age: 10,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军3',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军4',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军5',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军6',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军7',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军8',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军9',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军10',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        }

      ],
      paginationConfig: { ...PaginatonDefaultConfig },
      curSearchParams: { ...CurSearchParams }
    }
  },
  computed: {
    tabData1() {
      const list = this.$store.getters[this.pageListActions] || []
      return list
    },
    paginationConfig1() {
      const pagConfig = this.$store.getters[this.pageListActions + 'PaginatonConfig'] || this.paginationConfig
      return pagConfig
    }
  },
  watch: {

  },
  created() {
    this.getList(this.curSearchParams, null)
  },
  mounted() {

  },
  methods: {
    getList(searchParams, valuse) {
      // searchParams.data的数据需要过滤掉 null， undefined, '', [] 的情况
      if (valuse) {
        searchParams.data = valuse // todo ...
      } else {
        // 重置表单
        if (this.$refs['advanced-search']) {
          this.$refs['advanced-search'].onReset()
        }
      }
      this.$store.dispatch(this.pageListActions, searchParams)
    },
    handleSubmitClick(valuse) {
      // console.log(valuse)
      this.getList(this.curSearchParams, valuse)
    },
    handleBtnListClick(item) {
      console.log(item)
      if (item.icon === 'el-icon-refresh') {
        this.getList(this.curSearchParams, null)
      }
    },
    handleBtnOperClick(item, row) {
      console.log(item, row)
    },
    handleSelectionClick(rows) {
      console.log(rows)
    },
    handlePaginatonClick(pagination) {
      console.log(pagination)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.example{

}
</style>
