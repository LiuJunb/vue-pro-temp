<template>
  <div class="advanced-input">
    <el-form
      :ref="formName"
      :inline="true"
      :model="formData"
      :rules="formRules">

      <b-advanced-input
        :formItems="formItem1"
        :formData="formData"
      >
      </b-advanced-input>
      <b-advanced-input
        :formItems="formItem2"
        :formData="formData"
      >
      </b-advanced-input>

      <!-- 自定提交表单按钮 -->
      <el-form-item>
        <slot
          name="form-subit"
          :refForm="this"
          >
          <el-button
            type="primary"
            @click="onSubmit">
            查询
          </el-button>
          <el-button
            type="default"
            @click="onReset">
            重置
          </el-button>
          <el-button
            type="default"
            @click="onInit">
            init
          </el-button>
        </slot>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import {
  AdvancedInput
} from '@/base-ui/src'
import {
  formItem1,
  formItem2
} from './page-config'
const {
  getFormFieldIds,
  getFormRules
} = AdvancedInput
export default {
  name: 'AdvancedInput',
  components: {

  },
  mixins: [],
  props: {

  },
  data: function() {
    return {
      formName: 'adForm',

      formItem1,
      formItem2,

      formData: getFormFieldIds([...formItem1, ...formItem2]),
      formRules: getFormRules([...formItem1, ...formItem2])
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
    onSubmit() {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          console.log(this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onReset() {
      this.$refs[this.formName].resetFields()
    },
    onInit() {
      this.formData.user1 = 'user1'
      this.formData.user2 = 'user2'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-input{

}
</style>
