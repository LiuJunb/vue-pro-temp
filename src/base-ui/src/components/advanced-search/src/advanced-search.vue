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
          v-if="formItem.ItemType === SearchType.default"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <!--
            :style="formItem.style"

            :type="formItem.inputType"
            :row="formItem.rows"
            :autosize="formItem.autosize"
            :maxlength="formItem.maxlength"
            :show-word-limit="formItem.maxlength"

            :prefix-icon="formItem.prefixIcon"
            :suffix-icon="formItem.suffixIcon"

            :show-password="formItem.showPassword"
            :clearable="formItem.clearable"

            :placeholder="formItem.placeholder"

            or

            v-bind="formItem"
           -->
          <el-input
            v-model="formData[formItem.fieldId]"
            v-bind="formItem"
            @input="handleInputChange($event,formItem)">
            <template
              v-if="formItem.tooltip"
              slot="prefix">
              <el-tooltip
                effect="light"
                placement="top">
                <div
                  slot="content"
                  v-html="formItem.tooltip">
                  <!-- 1.Left Center 提示文字<br/>
                  2.第二行信息提示文字<br/>
                  2.第3行信息提示文字 -->
                </div>
                <i class="el-icon-question"></i>
              </el-tooltip>
            </template>
          </el-input>
        </el-form-item>

        <!-- 2.SearchType.select 默认select选着输入框 -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.select"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <!--
            :style="formItem.style"

            :multiple="formItem.multiple?formItem.multiple:false"
            :clearable="formItem.clearable"
            :placeholder="formItem.placeholder"

            or

            v-bind="formItem"
           -->
          <el-select
            v-model="formData[formItem.fieldId]"
            filterable
            v-bind="formItem"
            @input="handleSelectChange($event,formItem)">
            <el-option
              v-for="(item,index) in formItem.selectList"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 3.SearchType.selectDate -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.selectDate"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <!--
            :placeholder="formItem.placeholder"
            :style="formItem.style"
            or
            v-bind="formItem"
           -->
          <el-date-picker
            v-model="formData[formItem.fieldId]"
            :type="formItem.type?formItem.type:'date'"
            v-bind="formItem"
            @input="handleDateSelectChange($event,formItem)">
          </el-date-picker>
        </el-form-item>

        <!-- 4.SearchType.selectDateRange -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.selectDateRange"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <!--
            :style="formItem.style"
            or
            v-bind="formItem"
           -->
          <el-date-picker
            v-model="formData[formItem.fieldId]"
            :type="formItem.type?formItem.type:'daterange'"

            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"

            v-bind="formItem"
            @input="handleDateSelectChange($event,formItem)">
          </el-date-picker>
        </el-form-item>

        <!-- 5.SearchType.checkboxs -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.checkboxs"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <el-checkbox-group
            v-model="formData[formItem.fieldId]"
            :style="formItem.style"
            @change="handleSelectChange($event,formItem)">
            <el-checkbox
              v-for="(cbox, index) in formItem.checkboxList"
              :key="index"
              :label="cbox.label"
              :name="formItem.fieldId">
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <!-- 6.SearchType.radios -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.radios"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <el-radio-group
            v-model="formData[formItem.fieldId]"
            :style="formItem.style"
            @change="handleSelectChange($event,formItem)">
            <el-radio
              v-for="(rad, index) in formItem.radioList"
              :key="index"
              :label="rad.label">
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 9.SearchType.selectAndInput 默认select选着输入框 -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.selectAndInput"
          :key="index"
          :required="formItem.required"
          class="liujun"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth">
          <el-row :style="formItem.style">
            <el-form-item
              :label="formItem.formItem_2.labelName"
              :label-width="formItem.formItem_2.labelWidth"
              :prop="formItem.formItem_2.fieldId">
              <!--
                :style="formItem.formItem_2.style"
                :placeholder="formItem.formItem_2.placeholder"
                or
                v-bind="formItem.formItem_2"
               -->
              <el-input
                v-model="formData[formItem.formItem_2.fieldId]"
                v-bind="formItem.formItem_2"
                @input="handleInputChange($event,formItem.formItem_2)">
                <!-- 下面这select放在input的前面 -->
                <el-form-item
                slot="prepend"
                :style="{margin:'-1px'}"
                :prop="formItem.formItem_1.fieldId">
                <!--
                      :multiple="formItem.formItem_1.multiple?formItem.formItem_1.multiple:false"
                      :style="formItem.formItem_1.style"
                      :clearable="formItem.formItem_1.clearable"
                      :placeholder="formItem.formItem_1.placeholder"
                      or
                      v-bind="formItem.formItem_1"
                 -->
                  <el-select
                      v-model="formData[formItem.formItem_1.fieldId]"
                      filterable
                      v-bind="formItem.formItem_1"
                      @input="handleSelectChange($event,formItem.formItem_1)">
                      <el-option
                        v-for="(itemData, index) in formItem.formItem_1.selectList"
                        :key="index"
                        :label="itemData.label"
                        :value="itemData.value">
                      </el-option>
                  </el-select>
                </el-form-item>
              </el-input>
            </el-form-item>
          </el-row>

        </el-form-item>

        <!-- 10.SearchType.selectDataAndTime 默认select选着输入框 -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.selectDataAndTime"
          :key="index"
          :required="formItem.required"
          class="liujun"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth">
          <el-row :style="formItem.style">
            <el-col :span="11">
              <el-form-item
                :style="{marginRight:'0px'}"
                :prop="formItem.formItem_1.fieldId">
                <!--
                  :placeholder="formItem.formItem_1.placeholder"
                 -->
                <el-date-picker
                  v-model="formData[formItem.formItem_1.fieldId]"
                  type="date"
                  :style="formItem.formItem_2.style?formItem.formItem_2.style:{width: '100%'}"

                  v-bind="formItem.formItem_2"
                  @input="handleDateSelectChange($event,formItem)">
                </el-date-picker>
            </el-form-item>
            </el-col>
            <el-col
              class="line"
              :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item :prop="formItem.formItem_2.fieldId">
                <!--
                  :placeholder="formItem.formItem_2.placeholder"
                 -->
                <el-time-picker
                  v-model="formData[formItem.formItem_2.fieldId]"
                  :style="formItem.formItem_2.style?formItem.formItem_2.style:{width: '100%'}"
                  v-bind="formItem.formItem_2"
                  @input="handleDateSelectChange($event,formItem)">
                </el-time-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>

        <!-- 自定义item的布局 SearchType.custom -->
        <el-form-item
          v-if="formItem.ItemType === SearchType.custom"
          :key="index"
          :label="formItem.labelName"
          :label-width="formItem.labelWidth"
          :prop="formItem.fieldId">
          <slot
            :name="formItem.customSlot"
            :row="formItem"
            :data="formData"
          >
          <span>请完成自定布局</span>
          </slot>
        </el-form-item>

      </template>

      <!-- 自定提交表单按钮 -->
      <el-form-item v-if="showBtn">
        <slot
          name="form-subit"
          :refForm="this"
          >
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
  this.$emit('handleReset', this)
  this.$emit('handleFormItemChange',value, formItem) // @handleFormItemChange="handleFormItemChange"
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
            ItemType: SearchType.default,
            fieldId: 'user1',
            defaultValue: undefined,
            labelName: '活动1',

            rules: [
              { required: false, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            placeholder: null
          },
          {
            ItemType: SearchType.default,
            fieldId: 'user2',
            defaultValue: undefined,
            labelName: '活动2',

            tooltip: `
              1.Left Center 提示文字<br/>
              2.第二行信息提示文字<br/>
              3.第3行信息提示文字
            `,
            rules: [
              { required: false, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            placeholder: null
          },
          {
            ItemType: SearchType.default,
            fieldId: 'user3',
            defaultValue: undefined,
            labelName: '活动3',
            rules: [
              { required: false, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            style: {
              width: '150px'
            },
            placeholder: null
          },
          {
            ItemType: SearchType.default,
            fieldId: 'user4',
            defaultValue: undefined,
            labelName: '活动4-活动4-活动4',
            rules: [
              { required: false, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],

            labelWidth: '150px',
            placeholder: null
          },
          {
            ItemType: SearchType.select,
            fieldId: 'region1',
            defaultValue: null,
            labelName: '活动区域1',
            // labelWidth: '150px',

            rules: [
              { required: false, message: '请选择活动区域', trigger: 'change' }
            ],
            clearable: false,
            placeholder: null,
            style: {
              width: '150px'
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
            ItemType: SearchType.select,
            fieldId: 'region2',
            defaultValue: [],
            labelName: '活动区域2',

            multiple: true,
            rules: [
              { required: false, message: '请选择活动区域', trigger: 'change' }
            ],
            clearable: true,
            placeholder: null,
            style: {
              width: '100%'
            },
            selectList: [
              {
                label: '区域一1',
                value: 'shanghai2'
              },
              {
                label: '区域二2',
                value: 'beijing2'
              }
            ]
          },
          {
            ItemType: SearchType.selectAndInput,
            labelName: '名称',
            formItem_1: {
              fieldId: 'sel_1',

              rules: [
                { required: false, message: '请选择活动区域', trigger: 'change' }
              ],
              clearable: false,
              placeholder: null,
              style: {
                width: '100px'
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
            formItem_2: {
              fieldId: 'input_1',
              defaultValue: null,

              rules: [
                { required: false, message: '请输入名称', trigger: 'blur' }
              ],
              placeholder: null,
              style: {
                width: '300px'
              }
            }
          },
          {
            ItemType: SearchType.checkboxs,
            fieldId: 'check_box_1',
            defaultValue: [],
            labelName: '活动性质',
            style: {
              width: '100%'
            },
            checkboxList: [
              {
                label: '美食/餐厅线上活动'
              },
              {
                label: '地推活动'
              },
              {
                label: '线下主题活动'
              }
            ],
            rules: [
              { type: 'array', required: false, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            placeholder: null
          },
          {
            ItemType: SearchType.radios,
            fieldId: 'radios_11',
            defaultValue: '',
            labelName: '请选择活动资源',
            labelWidth: '150px',
            style: {
              width: '100%'
            },
            radioList: [
              {
                label: '线上品牌商赞助'
              },
              {
                label: '线下场地免费'
              }
            ],
            rules: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            placeholder: null
          },
          {
            ItemType: SearchType.selectDate,
            fieldId: 'startDate',
            defaultValue: null,
            labelName: '时间1',
            // labelWidth: '150px',

            rules: [
              { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
            ],
            placeholder: null,
            style: {
              width: '130px'
            }
          },
          {
            ItemType: SearchType.selectDate,
            fieldId: 'dateTime',
            defaultValue: null,
            labelName: '时间2',

            type: 'datetime',
            rules: [
              { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
            ],
            placeholder: null
            // style: {
            //   width: '100%'
            // }
          },
          {
            ItemType: SearchType.selectDateRange,
            fieldId: 'startDateTime1',
            defaultValue: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            labelName: '时间范围1',
            // labelWidth: '150px',

            type: 'daterange',
            rules: [
              { required: false, message: '请选择时间', trigger: 'change' }
            ],
            placeholder: null,
            style: {
              width: '230px'
            }
          },
          {
            ItemType: SearchType.selectDateRange,
            fieldId: 'startDateTime2',
            defaultValue: '',
            labelName: '时间范围2',

            type: 'datetimerange',
            rules: [
              { required: false, message: '请选择时间', trigger: 'change' }
            ],
            placeholder: null,
            style: {
              width: '350px'
            }
          },

          {
            ItemType: SearchType.selectDataAndTime,
            labelName: '活动时间',
            required: false, // 显示红点
            // labelWidth: '150px',
            // style: {
            //   width: '320px'
            // },
            formItem_1: {
              fieldId: 'data1',
              defaultValue: null,

              rules: [
                { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
              ],
              placeholder: null
              // style: {
              //   width: '100%'
              // }
            },
            formItem_2: {
              fieldId: 'data2',
              defaultValue: null,

              rules: [
                { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
              ],
              placeholder: null
              // style: {
              //   width: '100%'
              // }
            }
          }
        ]
      }
    },
    width: {
      type: String,
      default: '100%'
    },
    showBtn: {
      type: Boolean,
      default: true
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
    /**
     * {
     *  username:'刘军'
     * }
     */
    initFormData(fieldIds) {
      Object.keys(fieldIds).forEach((key) => {
        // this.formData.username = fieldIds.username
        this.formData[key] = fieldIds[key]
      })
    },
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
      this.$emit('handleReset', '')
    },
    handleInputChange(value, formItem) {
      // console.log('val=', value)
      this.handleFormItemChange(value, formItem)
    },
    handleSelectChange(value, formItem) {
      // console.log('sel val=', value, formItem)
      this.handleFormItemChange(value, formItem)
    },
    handleDateSelectChange(value, formItem) {
      // console.log('date sel val=', value, formItem)
      this.handleFormItemChange(value, formItem)
    },
    handleFormItemChange(value, formItem) {
      this.$emit('handleFormItemChange', value, formItem)
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

  .liujun{
    margin-bottom: 0px;
  }
}
</style>
