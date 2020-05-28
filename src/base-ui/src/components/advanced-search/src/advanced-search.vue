<template>
  <div
    class="advanced-search"
    :style="{width:width}"
    >
    <el-form
      :ref="formName"
      :model="formData"
      :rules="formRules"
      class="b-search-form-inline"
      v-bind="$attrs"
      >
      <template v-for="(formItem, index) in formItems">
        <!-- 1.SearchType.default 默认输入框 -->
        <el-form-item
          v-if="formItem.type === SearchType.default"
          :key="index"
          :label="formItem.labelName"
          :prop="formItem.fieldId">
          <el-input
            v-model="formData[formItem.fieldId]"
            :style="formItem.style"
            :placeholder="formItem.placeholder">
          </el-input>
        </el-form-item>

        <!-- 2.SearchType.select 默认select选着输入框 -->
        <el-form-item
          v-if="formItem.type === SearchType.select"
          :key="index"
          :label="formItem.labelName"
          :prop="formItem.fieldId">
          <el-select
            v-model="formData[formItem.fieldId]"
            :style="formItem.style"
            :clearable="formItem.clearable"
            :placeholder="formItem.placeholder">
            <el-option
              v-for="(item,index) in formItem.selectList"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 3.SearchType.selectDataAndTime 默认select选着输入框 -->
        <el-form-item
          v-if="formItem.type === SearchType.selectDataAndTime"
          :key="index"
          :required="formItem.required"
          :label="formItem.labelName">
          <el-col :span="11">
            <el-form-item
              :style="{marginRight:'0px'}"
              :prop="formItem.formItem_1.fieldId">
              <el-date-picker
                v-model="formData[formItem.formItem_1.fieldId]"
                type="date"
                :placeholder="formItem.formItem_1.placeholder"
                :style="formItem.formItem_1.style">
              </el-date-picker>
           </el-form-item>
          </el-col>
          <el-col
            class="line"
            :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item :prop="formItem.formItem_2.fieldId">
              <el-time-picker
                v-model="formData[formItem.formItem_2.fieldId]"
                :placeholder="formItem.formItem_2.placeholder"
                :style="formItem.formItem_2.style">
              </el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

      </template>

      <!-- 自定提交表单按钮 -->
      <el-form-item>
        <slot
          name="form-subit"
          :refForm="this">
          <el-button
            v-if="showSearch"
            type="primary"
            @click="onSubmit">
            查询
          </el-button>
          <el-button
            v-if="showReset"
            type="default"
            @click="onReset">
            重置
          </el-button>
        </slot>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
/*
 *@description:
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-05-28 10:00:36
 *@version V0.1.0
 *@API:
  @ 参数

  @ 事件
  this.$emit('handleSubmit', this.formData) // @handleSubmit="handleSubmit"
 *
*/
import {
  SearchType,
  getFormFieldIds,
  getFormRules
} from './search-type'
export default {
  name: 'BAdvancedSearch',
  components: {

  },
  mixins: [],
  props: {
    formItems: {
      type: Array,
      default: function() {
        return [
          {
            type: SearchType.default,
            fieldId: 'user',
            defaultValue: undefined,
            labelName: '活动',

            rules: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            placeholder: null
          },
          {
            type: SearchType.select,
            fieldId: 'region',
            defaultValue: null,
            labelName: '活动区域',

            rules: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            clearable: true,
            placeholder: null,
            style: {
              width: '100%'
            },

            selectList: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: 'beijing'
              }
            ]
          },
          {
            type: SearchType.selectDataAndTime,
            labelName: '活动时间',
            required: true, // 显示红点
            formItem_1: {
              fieldId: 'data1',
              defaultValue: null,

              rules: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              placeholder: null,
              style: {
                width: '100%'
              }
            },
            formItem_2: {
              fieldId: 'data2',
              defaultValue: null,

              rules: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              placeholder: null,
              style: {
                width: '100%'
              }
            }
          }
        ]
      }
    },
    width: {
      type: String,
      default: '100%'
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    showReset: {
      type: Boolean,
      default: true
    }

  },
  data: function() {
    return {
      SearchType,
      formName: 'adsForm',
      formData: getFormFieldIds(this.formItems),
      formRules: getFormRules(this.formItems)
    }
  },
  computed: {

  },
  watch: {
    formItems: (bewV, oldV) => {
      this.formData = getFormFieldIds(bewV)
      this.formRules = getFormRules(bewV)
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onSubmit() {
      // console.log(this.formData)
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          // console.log(this.formData)
          this.$emit('handleSubmit', this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onReset() {
      this.$refs[this.formName].resetFields()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-search{
  .line{
    text-align: center;
  }
}
</style>
