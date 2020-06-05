<template>
  <div class="advanced-search">
    <!-- 隐藏表单按钮 -->
    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="small"
       :showBtn="false"
       @handleSubmit="handleSubmit"
    >
    </b-advanced-search>
    <b-divider-line></b-divider-line>
    <!-- 默认 -->
    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="small"
       @handleSubmit="handleSubmit"
    >
    </b-advanced-search>

   <b-divider-line></b-divider-line>

    <!-- 自定义配置 -->
    <b-advanced-search
       label-width="90px"
       :inline="true"
       :formItems="adSearchConfig"
       @handleSubmit="handleSubmit"
    >
     <template v-slot:custom1="slotProps">
       <el-input
        v-model="slotProps.data[slotProps.row.fieldId]"
        placeholder="请输入内容">
        <template slot="prepend">Http://</template>
      </el-input>
     </template>

    </b-advanced-search>

    <b-divider-line></b-divider-line>
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

  </div>
</template>

<script>
import {
  adSearchConfig,
  adLogin,
  adForm,
  adForm2
} from './page-config'
export default {
  name: 'AdvancedSearch',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'AdvancedSearch'
    }
  },
  data: function() {
    return {
      adSearchConfig,
      adLogin,
      adForm,
      adForm2

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
      console.log(new Date(formData.data1).toLocaleString())
      console.log(formData)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-search{

}
</style>
