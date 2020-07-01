<template>
  <div class="advanced-input">
    <br>
    <h4>1.自定义表单组件：advanced-input</h4>
    <el-form
      :ref="formName"
      :inline="true"
      :model="formData"
      :rules="formRules">

      <div>custom other layout</div>

      <b-advanced-input
        :formItems="formItem1"
        :formData="formData"
      >
      </b-advanced-input>

      <div>custom other layout</div>

      <b-advanced-input
        :formItems="formItem2"
        :formData="formData"
      >
      </b-advanced-input>

      <div>custom other layout</div>
      <b-advanced-input
        :formItems="formItem3"
        :formData="formData"
        class="cus-width"
      >
      </b-advanced-input>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
      <h5>testse</h5>
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
  formItem2,
  formItem3
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
      formItem3,

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
      this.$refs[this.formName].validate((valid, object) => {
        if (valid) {
          console.log(this.formData)
        } else {
          console.log('error submit!!', object) // {user1:'', user2: Array(1)}
          const keys = Object.keys(object) || []
          if (keys.length >= 1) {
            console.log('error=', keys[0])
            setTimeout(() => {
              window.location.hash = ''
              window.location.hash = `hash_${keys[0]}`
            })
          }
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
