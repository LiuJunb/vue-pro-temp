<template>
  <div class="advanced-search">
    <!-- 隐藏表单按钮 -->
    <h4>1.隐藏表单按钮</h4>
    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="small"
       :showBtn="false"
       @handleSubmit="handleSubmit"

    >
    </b-advanced-search>
    <b-divider-line></b-divider-line>
    <h4>2.默认</h4>
    <!-- 默认 -->
    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="mini"
       :formItems="adSearchDefaultConfig"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
    >
    </b-advanced-search>

   <b-divider-line></b-divider-line>

    <!-- 自定义配置 -->
    <h4>3.自定义配置</h4>
    <b-advanced-search
       label-width="90px"
       :inline="true"
       :formItems="adSearchConfig"
       @handleSubmit="handleSubmit"
    >
     <template v-slot:custom1="slotProps">
       <el-input
        v-model="slotProps.data[slotProps.row.fieldId]"
        v-bind="slotProps.row"
        >
        <template slot="prepend">Http://</template>
      </el-input>
     </template>

    </b-advanced-search>

    <b-divider-line></b-divider-line>
    <h4>4.登录表单</h4>
    <!-- 登录表单 -->
    <b-advanced-search
       :formItems="adLogin"
       :style="{width:'300px'}"
       @handleSubmit="handleSubmit"
    >
     <template v-slot:form-subit="slotProps">
          <el-button
            type="primary"
            :style="{width:'100%'}"
            @click="slotProps.refForm.onSubmit()"
            >
            登录
          </el-button>
      </template>
    </b-advanced-search>
    <b-divider-line></b-divider-line>
    <h4>5.普通表单1</h4>
    <!-- 普通表单1 -->
    <b-advanced-search
       :formItems="adForm"
       label-position="left"
       :style="{width:'400px'}"
       @handleSubmit="handleSubmit"
    >
     <template v-slot:form-subit="slotProps">
          <el-button
            type="primary"
            @click="slotProps.refForm.onSubmit()"
            >
            保存
          </el-button>
          <el-button
            type="default"
            @click="slotProps.refForm.onReset()"
            >
            重置
          </el-button>
      </template>
    </b-advanced-search>
    <b-divider-line></b-divider-line>
    <h4>6.普通表单2</h4>
    <!-- 普通表单2 -->
    <b-advanced-search
       :formItems="adForm2"
       label-position="right"
       :inline="true"
       @handleSubmit="handleSubmit"
    >
     <template v-slot:form-subit="slotProps">
          <el-button
            type="primary"
            @click="slotProps.refForm.onSubmit()"
            >
            保存
          </el-button>
          <el-button
            type="default"
            @click="slotProps.refForm.onReset()"
            >
            重置
          </el-button>
          <el-button
            type="default"
            @click="handleInitData(slotProps.refForm)"
            >
            回显
          </el-button>
      </template>
    </b-advanced-search>

    <h4>BAsiderMenu 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BAsiderMenu 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BAsiderMenu 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

  </div>
</template>

<script>
import {
  adSearchDefaultConfig,
  adSearchConfig,
  adLogin,
  adForm,
  adForm2
} from './page-config'
import {
  TableColumnMixin
} from '@/mixins/index.js'
export default {
  name: 'AdvancedSearch',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'AdvancedSearch'
    }
  },
  data: function() {
    return {
      adSearchDefaultConfig,
      adSearchConfig,
      adLogin,
      adForm,
      adForm2,
      tabDataProps: [
        {
          attr: 'menuList',
          des: '菜单列表',
          type: 'Array',
          select: ' ',
          default: ' '
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'menu-btn',
          des: '自定义折叠按钮'
        }
      ],
      tabDataEvent: [
        {
          name: 'handleClickCurrentMenu',
          des: '监听重复点击当前的菜单',
          func: 'func( menu )'
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
    handleInitData(advancedSearch) {
    // 回显表单的值
      advancedSearch.initFormData({
        username: '刘军',
        password_1: '123',
        select_1: '广州',
        select_2: '男',
        select_3: ['跑步', '听歌'],
        textarea_1: 'haha'
      })
    },
    handleSubmit(formData) {
      // console.log(new Date(formData.data1).toLocaleString())
      console.log(formData)
    },
    handleReset() {
      console.log('handleReset')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-search{

}
</style>
