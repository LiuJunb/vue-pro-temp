<template>
  <div class="advanced-input">
    <!-- ====copy advanced-search -->
    <template v-for="(formItem, index) in formItems">
      <!-- 1.InputType.default 默认输入框 -->
      <el-form-item
          v-if="formItem.ItemType === InputType.default"
          :id="hashPre+formItem.fieldId"
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
            <!-- tooltip -->
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

      <!-- 2.InputType.select 默认select选着输入框 -->
      <el-form-item
          v-if="formItem.ItemType === InputType.select"
          :id="hashPre+formItem.fieldId"
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

            <!-- tooltip -->
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
            <el-option
              v-for="(item,index) in formItem.selectList"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>

      <!-- 3.InputType.selectDate -->
      <el-form-item
          v-if="formItem.ItemType === InputType.selectDate"
          :id="hashPre+formItem.fieldId"
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

      <!-- 4.InputType.selectDateRange -->
      <el-form-item
          v-if="formItem.ItemType === InputType.selectDateRange"
          :id="hashPre+formItem.fieldId"
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

      <!-- 5.InputType.checkboxs -->
      <el-form-item
          v-if="formItem.ItemType === InputType.checkboxs"
          :id="hashPre+formItem.fieldId"
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

      <!-- 6.InputType.radios -->
      <el-form-item
          v-if="formItem.ItemType === InputType.radios"
          :id="hashPre+formItem.fieldId"
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

      <!-- 9.InputType.selectAndInput 默认select选着输入框 -->
      <el-form-item
          v-if="formItem.ItemType === InputType.selectAndInput"
          :id="hashPre+formItem.fieldId"
          :key="index"
          :required="formItem.required"
          :style="{marginBottom:($attrs.size==='small'||$attrs.size==='mini')? '0px' :'20px'}"
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
                      <!-- tooltip -->
                      <template
                        v-if="formItem.formItem_1.tooltip"
                        slot="prefix">
                        <el-tooltip
                          effect="light"
                          placement="top">
                          <div
                            slot="content"
                            v-html="formItem.formItem_1.tooltip">
                            <!-- 1.Left Center 提示文字<br/>
                            2.第二行信息提示文字<br/>
                            2.第3行信息提示文字 -->
                          </div>
                          <i class="el-icon-question"></i>
                        </el-tooltip>
                      </template>
                  </el-select>
                </el-form-item>
              </el-input>
            </el-form-item>
          </el-row>

      </el-form-item>

      <!-- 10.InputType.selectDataAndTime 默认select选着输入框 -->
      <el-form-item
          v-if="formItem.ItemType === InputType.selectDataAndTime"
          :id="hashPre+formItem.fieldId"
          :key="index"
          :required="formItem.required"
          :style="{marginBottom:($attrs.size==='small'||$attrs.size==='mini')? '0px' :'20px'}"
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
                  :style="formItem.formItem_1.style?formItem.formItem_1.style:{width: '100%'}"

                  v-bind="formItem.formItem_1"
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

      <!-- 自定义item的布局 InputType.custom -->
      <el-form-item
          v-if="formItem.ItemType === InputType.custom"
          :id="hashPre+formItem.fieldId"
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
    <!-- ====copy advanced-search -->
  </div>
</template>

<script>
/*
 *@description: 高级的表单输入组件
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-23 10:58:18
 *@version V0.1.0
 *@API:
 *@ 参数
 *  formItems: []
 *  formData: {}
 *@ 事件
 *  this.$emit('handleFormItemChange', value, formItem)
*/
import {
  InputType
} from '../../../utils/input-type.js'
export default {
  name: 'BAdvancedInput',
  components: {

  },
  mixins: [],
  props: {
    formItems: {
      type: Array,
      default: function() {
        return [

        ]
      }
    },
    formData: {
      type: Object,
      default: function() {
        return {

        }
      }
    },
    hashPre: {
      type: String,
      default: 'hash_'
    }
  },
  data: function() {
    return {
      InputType
      // FormItems: this.formItems
    }
  },
  computed: {

  },
  watch: {
    // formItems: {
    //   handler(val, old) {
    //     this.FormItems = val
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    // ====copy advanced-search
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
    // ====copy advanced-search
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-input{
  .line{
    text-align: center;
  }

  /deep/ .el-form-item{
    .el-form-item__content{
      [tooltip]{
        .el-select__tags{
          margin-left: 15px;
        }
      }

    }

  }
}
</style>
