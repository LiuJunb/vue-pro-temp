<template>
  <div class="example">
    <!-- 高级搜索 -->
    <b-advanced-search
       label-width="90px"
       :inline="true"
       size='small'
       :formItems="adSearchConfig"
       @handleSubmit="handleSubmit"
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
      :tabColumn="tabColumnConfig"
      :tabData="tabData"
      :paginationConf="paginationConfig"
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
  tabColumnConfig,
  paginationConfig
} from './page-config'
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
      paginationConfig,
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

      ]
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
    handleSubmit(valuse) {
      console.log(valuse)
    },
    handleBtnListClick(item) {
      console.log(item)
    },
    handleBtnOperClick(item, row) {
      console.log(item, row)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.example{

}
</style>
