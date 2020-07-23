<template>
  <div class="advanced-input">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
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
  AdvancedInput
} from '@/base-ui/src'
import {
  TableColumnMixin
} from '@/mixins/index.js'
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
  mixins: [TableColumnMixin],
  props: {

  },
  data: function() {
    return {
      formName: 'adForm',

      formItem1,
      formItem2,
      formItem3,

      formData: getFormFieldIds([...formItem1, ...formItem2]),
      formRules: getFormRules([...formItem1, ...formItem2]),
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
