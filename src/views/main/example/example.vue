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
        v-bind="slotProps.row">
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
            v-bind="slotProps.item"
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
     <!-- 年龄 => 配置 slotColName:'age'  -->
     <template v-slot:age="slotProps">
        <b-tag-group
         :tagList="[ {name:slotProps.row.age, type:'success', size:'mini'} ]"
        >
        </b-tag-group>
      </template>
     <!-- 性别  => 配置 slotColName:'sex' -->
     <template v-slot:sex="slotProps">
        <b-status-text
         :value="slotProps.row.sex"
         :statusList="sexEnumList"
        >
        </b-status-text>
      </template>
      <!-- 操作 => 配置 slotColName:'operation' -->
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
  // PaginatonDefaultConfig,
  CurSearchParams
} from '@/config/index.js'
// import {
//   filterNullValue
// } from '@/utils/common.js'
import {
  TableList
} from '@/mixins/index.js'
import {
  Sex
} from '@/enum/index.js'
import { MessageBox, Message } from 'element-ui'
export default {
  name: 'Example',
  components: {

  },
  mixins: [TableList],
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
      sexEnumList: Sex,

      pageListActions: 'main_example/list',
      sortBy: 'name',
      permissions: [
        'pp.list'
      ]

      // tabData1: [
      // ],
      // paginationConfig1: { ...PaginatonDefaultConfig },

      // isFirstRequest: true,
      // curSearchParams: { ...CurSearchParams }
    }
  },
  computed: {
    // tabData() {
    //   const list = this.$store.getters[this.pageListActions]
    //   return list
    // },
    // paginationConfig() {
    //   const paginatonConf = this.$store.getters[this.pageListActions + 'PaginatonConfig']
    //   return paginatonConf
    // }
  },
  watch: {

  },
  created() {
    // 不需要缓存
    // this.getList({ ...CurSearchParams }, null)
  },
  mounted() {
    // console.log('mounted2')
  },
  methods: {

    // 搜索参数，data参数
    // getList(searchParams, valuse) {
    //   if (valuse && Object.keys(valuse).length > 0) {
    //     searchParams.data = { ...valuse }
    //   } else {
    //     // valuse 为 null
    //     searchParams.data = {}
    //     // 重置表单
    //     if (this.$refs['advanced-search']) {
    //       this.$refs['advanced-search'].onReset()
    //     }
    //   }
    //   searchParams.data.sortBy = this.sortBy
    //   // searchParams.data的数据需要过滤掉 null， undefined, '', [] 的情况
    //   searchParams.data = filterNullValue(searchParams.data)
    //   // 可以解构多层
    //   this.curSearchParams = { ...searchParams }
    //   this.$store.dispatch(this.pageListActions, searchParams)
    //     .then((res) => {
    //       this.isFirstRequest = false
    //     })
    // },

    // // 高级搜索
    // handleSubmitClick(valuse) {
    //   // console.log(valuse)
    //   // 需要缓存
    //   this.curSearchParams.pageNum = 1
    //   this.getList(this.curSearchParams, valuse)
    // },
    // 按钮组
    handleBtnListClick(item) {
      // console.log(item)
      // 刷新(不需要缓存)
      if (item._name === '刷新') {
        this.getList({ ...CurSearchParams })
      }
    },
    handleBtnOperClick(item, row) {
      if (item.name === '查看') {
        // this.$router.push({
        //   name: 'example',
        //   params: { type: 'detail' },
        //   query: { id: 1 }
        // })
        this.$router.push(`/main/example/detail?id=${1}`)
      } else if (item.name === '详情') {
        this.$router.push(`/main/example/detail?id=${1}`)
      } else if (item.name === '编辑') {
        // todo ...
      } else if (item.name === '删除') {
        MessageBox.confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(`${this.pageListActions}Delete`, {
            id: row.id
          }).then((res) => {
            if (res.code === 0) {
              Message({
                message: `删除成功`,
                type: 'success'
              })
              // 刷新页面（需要缓存）
              this.getList(this.curSearchParams)
            } else {
              Message({
                message: `删除失败`,
                type: 'error'
              })
            }
          })
        }).catch(() => {
        // 点击取消
        })
      }
    },
    handleSelectionClick(rows) {
      console.log(rows)
    }
    // handlePaginatonClick(pagination) {
    //   // console.log(pagination)
    //   this.curSearchParams.pageNum = pagination['current-page']
    //   this.curSearchParams.pageSize = pagination['page-size']
    //   // 需要缓存
    //   this.getList(this.curSearchParams, { ...this.curSearchParams.data })
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.example{

}
</style>
