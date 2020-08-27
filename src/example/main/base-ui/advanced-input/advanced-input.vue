<template>
  <div class="advanced-input">

    <b-title-tag name="b-advanced-input 组件"></b-title-tag>
    <h4>1.基本的使用</h4>
    <el-form
      :ref="form1Name"
      :inline="true"
      :model="form1Data"
      :rules="form1Rules">
      <b-advanced-input
        :formItems="form1Item"
        :formData="form1Data"
      >
      </b-advanced-input>
      <!-- 自定提交表单按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit1">
          保存
        </el-button>
        <el-button
          type="default"
          @click="onReset1">
          重置
        </el-button>
        <el-button
          type="default"
          @click="onInit1">
          init
        </el-button>
      </el-form-item>
    </el-form>

    <code-h
      lang="html"
      content='
      <el-form
        :ref="form1Name"
        :inline="true"
        :model="form1Data"
        :rules="form1Rules">
        <b-advanced-input
          :formItems="form1Item"
          :formData="form1Data"
        >
        </b-advanced-input>
        <!-- 自定提交表单按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit1">
            保存
          </el-button>
          <el-button
            type="default"
            @click="onReset1">
            重置
          </el-button>
          <el-button
            type="default"
            @click="onInit1">
            init
          </el-button>
        </el-form-item>
      </el-form>
    '></code-h>
    <code-h
      lang="js"
      content="
      import BaseUI from 'BaseUI'
      const {
        InputType,
        getFormFieldIds,
        getFormRules
      } = BaseUI.AdvancedInput
      // 这里的配置其实跟 b-advanced-search 的 formItem 的配置是一样的
      const form1Item = [
        {

          ItemType: InputType.default,
          fieldId: 'u1',
          defaultValue: undefined,
          labelName: '活动1',

          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          placeholder: null
        },
        {
          ItemType: InputType.default,
          fieldId: 'n1',
          defaultValue: undefined,
          labelName: '用户名',

          rules: [
            { required: true, message: '用户名', trigger: 'blur' }
          ],
          placeholder: null
        },
        {
          ItemType: InputType.select,
          fieldId: 's1',
          defaultValue: undefined,
          labelName: '性别',
          clearable: true,
          selectList: [
            {
              label: '男',
              value: '男'
            },
            {
              label: '女',
              value: '女'
            }
          ],
          rules: [
            { required: true, message: '性别', trigger: 'blur' }
          ],
          placeholder: null
        }
      ]

      // ============

      data() {
        return {
          form1Name: 'form1Name',
          form1Item: form1Item,
          form1Data: getFormFieldIds([...form1Item]),
          form1Rules: getFormRules([...form1Item]),
        }
      }

      // ============

      onSubmit1() {
        this.$refs[this.form1Name].validate((valid, object) => {
          if (valid) {
            console.log(this.form1Data)
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
      onReset1() {
        this.$refs[this.form1Name].resetFields()
      },
      onInit1() {
      // 1.初始化表单其它配置项的数据
      this.form1Item[2].selectList = [
        {
          label: '男1',
          value: '男1'
        },
        {
          label: '女1',
          value: '女1'
        }
      ]
      // 2.初始化表单的值
      this.form1Data.u1 = 'web'
      this.form1Data.n1 = '刘军'
      this.form1Data.s1 = '男1'
      console.log(this.formItem1)
    }

    InputType:
      default, select,
      selectAndInput, checkboxs,
      radios,selectDate, selectDateRange,
      selectDateRange, custom

    ItemType：指定item组件的类型，默认default是input输入框组件。
    fieldId： 指定表单组件的id，提交表单时通过该id获取表单的值
    defaultValue: 指定表单组件默认值
    labelName: 指定表单组件label的名称
    labelWidth：指定表单组件label的宽度
    style: 指定表单组件的行内样式，接收一个对象
    style.width: 指定表单组件的宽度
    tooltip: 指定表单组件的前面添加一个问号图标，没有则不需要添加该属性
    rules: 指定表单组件的正则
    placeholder: 指定表单组件的占位符

      "></code-h>

    <h4>2.其它表单类型</h4>
    <el-form
      :ref="form2Name"
      :inline="true"
      label-width="120px"
      :style="{width:'500px'}"
      :model="form2Data"
      :rules="form2Rules">
      <b-advanced-input
        :formItems="form2Item"
        :formData="form2Data"
      >
      </b-advanced-input>
      <!-- 自定提交表单按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit2">
          保存
        </el-button>
        <el-button
          type="default"
          @click="onReset2">
          重置
        </el-button>
        <el-button
          type="default"
          @click="onInit2">
          init
        </el-button>
      </el-form-item>
    </el-form>

    <code-h
      lang="html"
      content='
      <el-form
        :ref="form2Name"
        :inline="true"
        :model="form2Data"
        :rules="form2Rules">
        <b-advanced-input
          :formItems="form2Item"
          :formData="form2Data"
        >
        </b-advanced-input>
        <!-- 自定提交表单按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit2">
            保存
          </el-button>
          <el-button
            type="default"
            @click="onReset2">
            重置
          </el-button>
          <el-button
            type="default"
            @click="onInit2">
            init
          </el-button>
        </el-form-item>
      </el-form>
    '></code-h>
    <code-h
      lang="js"
      content="
      import BaseUI from 'BaseUI'
      const {
        InputType,
        getFormFieldIds,
        getFormRules
      } = BaseUI.AdvancedInput

      const colWidth = '360px'
      const form2Item = [
      // 这里的配置其实跟 b-advanced-search 的 formItem 的配置是一样的
        {
          ItemType: InputType.default,
          fieldId: 'u2',
          defaultValue: undefined,
          labelName: '活动1',

          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.default,
          fieldId: 'n2',
          defaultValue: undefined,
          labelName: '用户名',

          rules: [
            { required: false, message: '用户名', trigger: 'blur' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.select,
          fieldId: 's2',
          defaultValue: undefined,
          labelName: '性别',
          clearable: true,
          selectList: [
            {
              label: '男',
              value: '男'
            },
            {
              label: '女',
              value: '女'
            }
          ],
          rules: [
            { required: true, message: '性别', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.select,
          fieldId: 'r2',
          defaultValue: [],
          labelName: '活动区域2',
          style: {
            width: colWidth
          },
          multiple: true,
          rules: [
            { required: false, message: '请选择活动区域（多选）', trigger: 'change' }
          ],
          clearable: true,
          placeholder: null,
          //   tooltip: `
          //   1.Left Center 提示文字<br/>
          //   2.第二行信息提示文字<br/>
          //   3.第3行信息提示文字
          //  `,
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
          ItemType: InputType.selectAndInput,
          labelName: '名称',
          formItem_1: {
            fieldId: 'sel_2',
            defaultValue: 'shanghai',
            rules: [
              { required: false, message: '请选择活动区域', trigger: 'change' }
            ],
            clearable: false,
            placeholder: null,
            style: {
              width: '100px'
            },
            //   tooltip: `
            //   1.Left Center 提示文字<br/>
            //   2.第二行信息提示文字<br/>
            //   3.第3行信息提示文字
            //  `,
            // 可继续添加 element-ui  select 组件的其它的属性
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
            fieldId: 'input_2',
            defaultValue: null,
            rules: [
              { required: false, message: '请输入名称', trigger: 'blur' }
            ],
            placeholder: null,
            style: {
              width: colWidth
            }
            // 可继续添加 element-ui  input 组件的其它的属性
          }
        },
        {
          ItemType: InputType.inputAndSelect,
          labelName: '活动时间',
          required: false, // 显示红点
          // labelWidth: '90px',
          style: {
            width: colWidth
          },
          formItem_1: {
            fieldId: 'i_s1',
            defaultValue: null,
            rules: [
              { type: 'string', required: false, message: '请选择日期', trigger: 'change' }
            ],
            // style: {
            //   width: '180px'
            // },
            placeholder: null
            // 可继续添加 element-ui  DatePicker 组件的其它的属性

          },
          formItem_2: {
            fieldId: 'i_s2',
            defaultValue: null,
            rules: [
              { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
            ],
            style: {
              width: '150px'
            },
            clearable: true,
            placeholder: null,
            // tooltip: `
            //   1.Left Center 提示文字<br/>
            //   2.第二行信息提示文字<br/>
            //   3.第3行信息提示文字
            // `,
            // 可继续添加 element-ui  select 组件的其它的属性
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
          }
        },
        {
          ItemType: InputType.checkboxs,
          fieldId: 'ch_box_2',
          defaultValue: ['地推活动'],
          labelName: '活动性质',
          style: {
            width: colWidth
          },
          checkboxList: [
            {
              label: '美食/餐厅'
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
          ItemType: InputType.radios,
          fieldId: 'radio2',
          defaultValue: '',
          labelName: '请选择活动',
          // labelWidth: '150px',
          style: {
            width: colWidth
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
            { required: false, message: '请选择活动资源', trigger: 'change' }
          ],
          placeholder: null
        },
        {
          ItemType: InputType.selectDate,
          fieldId: 'sDate2',
          defaultValue: null,
          labelName: '时间date',
          // labelWidth: '150px',
          valueFormat: 'yyyy-MM-dd',
          rules: [
            { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.selectDate,
          fieldId: 'dTime2',
          defaultValue: null,
          labelName: '时间1',
          // 指定组件的类型
          type: 'datetime',
          rules: [
            { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.selectDateRange,
          fieldId: 'sTime2',
          defaultValue: ['2020-03-08', '2020-03-09'],
          labelName: '时间范围1',
          // labelWidth: '150px',
          valueFormat: 'yyyy-MM-dd',

          type: 'daterange',
          rules: [
            { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.selectDateRange,
          fieldId: 'ssTime2',
          // defaultValue: null, // ok
          defaultValue: ['2020-03-08 01:22:00', '2020-03-09 01:22:00'],
          labelName: '时间范围2',

          type: 'datetimerange',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          rules: [
            { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.selectDateRange,
          labelName: '活动时间',
          required: false, // 显示红点
          // labelWidth: '90px',
          style: {
            width: colWidth
          },
          formItem_1: {
            fieldId: 'data2',
            defaultValue: null,
            valueFormat: 'yyyy-MM-dd',
            rules: [
              { type: 'string', required: false, message: '请选择日期', trigger: 'change' }
            ],
            // labelWidth: '10px',
            // style: {
            //   width: '160px'
            // },
            placeholder: null

          },
          formItem_2: {
            fieldId: 'ddata2',
            defaultValue: null,
            valueFormat: 'HH:mm:ss',
            rules: [
              { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
            ],
            // labelWidth: '10px',
            // style: {
            //   width: '160px'
            // },
            placeholder: null
          }
        },
        {
          ItemType: InputType.custom,
          customSlot: 'custom2', // 插槽名称
          fieldId: 'custom2',

          defaultValue: undefined,
          labelName: '自定义item',
          // labelWidth: '130px',
          style: {
            width: colWidth
          },
          rules: [
            { required: false, message: '请输入自定义名称', trigger: 'blur' }
          ],
          placeholder: '请输入内容'
        }
      ]

      "></code-h>

    <h4>3.自定义item</h4>
    <el-form
      :ref="form3Name"
      :inline="true"
      label-width="120px"
      :style="{width:'500px'}"
      :model="form3Data"
      :rules="form3Rules">
      <b-advanced-input
        :formItems="form3Item"
        :formData="form3Data"
      >
      <!-- 自定义item -->
      <template v-slot:custom3="slotProps">
        <el-input-number
         v-model="slotProps.data[slotProps.row.fieldId]"
         v-bind="slotProps.row"
        >
        </el-input-number>
      </template>
      </b-advanced-input>
      <!-- 提交表单按钮 -->
      <el-form-item
       :style="{width:'100%', textAlign: 'center'}"
      >
        <el-button
          type="primary"
          @click="onSubmit3">
          保存
        </el-button>
        <el-button
          type="default"
          @click="onReset3">
          重置
        </el-button>
        <el-button
          type="default"
          @click="onInit3">
          init
        </el-button>
      </el-form-item>
    </el-form>

    <code-h
      lang="html"
      content='
    <el-form
      :ref="form3Name"
      :inline="true"
      label-width="120px"
      :style="{width:"500px"}"
      :model="form3Data"
      :rules="form3Rules">
      <b-advanced-input
        :formItems="form3Item"
        :formData="form3Data"
      >
      <!-- 自定义item -->
      <template v-slot:custom3="slotProps">
        <el-input-number
         v-model="slotProps.data[slotProps.row.fieldId]"
         v-bind="slotProps.row"
        >
        </el-input-number>
      </template>
      </b-advanced-input>
      <!-- 提交表单按钮 -->
      <el-form-item
       :style=" { width:"100%", textAlign: "center"}"
      >
        <el-button
          type="primary"
          @click="onSubmit3">
          保存
        </el-button>
        <el-button
          type="default"
          @click="onReset3">
          重置
        </el-button>
        <el-button
          type="default"
          @click="onInit3">
          init
        </el-button>
      </el-form-item>
    </el-form>
    '></code-h>
    <code-h
      lang="js"
      content="
      import BaseUI from 'BaseUI'
      const {
        InputType,
        getFormFieldIds,
        getFormRules
      } = BaseUI.AdvancedInput

      const colWidth = '360px'
      const form3Item = [
        {
          ItemType: InputType.default,
          fieldId: 'u3',
          defaultValue: undefined,
          labelName: '活动1',

          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.default,
          fieldId: 'n3',
          type: 'textarea',
          defaultValue: undefined,
          labelName: '用户名',

          rules: [
            { required: true, message: '用户名', trigger: 'blur' }
          ],
          placeholder: null,
          style: {
            width: colWidth
          }
        },
        {
          ItemType: InputType.custom,
          customSlot: 'custom3', // 插槽名称
          fieldId: 'custom3',

          defaultValue: undefined,
          labelName: '自定义item',
          min: 1,
          max: 10,
          // labelWidth: '130px',
          style: {
            width: colWidth
          },
          controlsPosition: 'right',
          rules: [
            { required: false, message: '请输入自定义名称', trigger: 'blur' }
          ],
          placeholder: '请输入内容'
        }
      ]
      "></code-h>

    <h4>4.自定义复杂组合表单</h4>
    <el-form
      :ref="formName"
      :inline="true"
      :model="formData"
      :rules="formRules">
      <div>这里可以添加其它布局</div>
      <b-advanced-input
        :formItems="formItem1"
        :formData="formData"
      >
      </b-advanced-input>
      <div>这里可以添加其它布局</div>
      <b-advanced-input
        :formItems="formItem2"
        :formData="formData"
      >
      </b-advanced-input>
      <div>这里可以添加其它布局</div>
      <b-advanced-input
        :formItems="formItem3"
        :formData="formData"
        class="cus-width"
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

    <code-h
      lang="html"
      content='
      <el-form
          :ref="formName"
          :inline="true"
          :model="formData"
          :rules="formRules">
          <div>这里可以添加其它布局</div>
          <b-advanced-input
            :formItems="formItem1"
            :formData="formData"
          >
          </b-advanced-input>
          <div>这里可以添加其它布局</div>
          <b-advanced-input
            :formItems="formItem2"
            :formData="formData"
          >
          </b-advanced-input>
          <div>这里可以添加其它布局</div>
          <b-advanced-input
            :formItems="formItem3"
            :formData="formData"
            class="cus-width"
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

    '></code-h>
    <code-h
      lang="js"
      content="
      const formItem1 = [
        {
          ItemType: InputType.default,
          fieldId: 'user1',
          defaultValue: undefined,
          labelName: '活动1',

          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          placeholder: null
        },
        {
          ItemType: InputType.default,
          fieldId: 'name',
          defaultValue: undefined,
          labelName: '用户名',

          rules: [
            { required: true, message: '用户名', trigger: 'blur' }
          ],
          placeholder: null
        },
        {
          ItemType: InputType.select,
          fieldId: 'sex',
          defaultValue: undefined,
          labelName: '性别',
          clearable: true,
          selectList: [
            {
              label: '男',
              value: '男'
            },
            {
              label: '女',
              value: '女'
            }
          ],
          rules: [
            { required: true, message: '性别', trigger: 'change' }
          ],
          placeholder: null
        }
      ]

      const formItem2 = [
        {
          ItemType: InputType.default,
          fieldId: 'user2',
          defaultValue: undefined,
          labelName: '输入描述',

          type: 'textarea',
          autosize: { minRows: 2, maxRows: 4 },

          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          placeholder: null
        }
      ]

      const formItem3 = [
        {
          ItemType: InputType.default,
          fieldId: 'cus-des',
          defaultValue: undefined,
          labelName: 'input-des',

          type: 'textarea',
          autosize: { minRows: 3, maxRows: 5 },
          rules: [
            { required: false, message: '请输入活动名称', trigger: 'blur' }
          ],
          placeholder: null
          // todo ...  其它的属性查找 element input 组件熟悉
        },
        {
          ItemType: InputType.select,
          fieldId: 'cus-tag',
          defaultValue: undefined,
          labelName: 'input-tags',

          clearable: true,
          multiple: true,
          filterable: true,
          allowCreate: true,
          defaultFirstOption: true,

          selectList: [
            {
              label: '男',
              value: '男'
            },
            {
              label: '女',
              value: '女'
            }
          ],
          rules: [
            { required: false, message: '性别', trigger: 'change' }
          ],
          placeholder: null
          // todo ...  其它的属性查找 element select 组件熟悉
        }
      ]
      //======================
      data(){
        return {
          formItem1,
          formItem2,
          formItem3,
          formData: getFormFieldIds([...formItem1, ...formItem2, ...formItem3]),
          formRules: getFormRules([...formItem1, ...formItem2, ...formItem3]),
        }
      }
      "></code-h>

    <h4>AdvancedInput 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>AdvancedInput 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>AdvancedInput 的 Event：</h4>
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
  formItem3,

  form1Item,
  form2Item,
  form3Item

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
      formData: getFormFieldIds([...formItem1, ...formItem2, ...formItem3]),
      formRules: getFormRules([...formItem1, ...formItem2, ...formItem3]),

      // ======
      form1Name: 'form1Name',
      form1Item: form1Item,
      form1Data: getFormFieldIds([...form1Item]),
      form1Rules: getFormRules([...form1Item]),

      // ======
      form2Name: 'form2Name',
      form2Item: form2Item,
      form2Data: getFormFieldIds([...form2Item]),
      form2Rules: getFormRules([...form2Item]),

      // ======
      form3Name: 'form3Name',
      form3Item: form3Item,
      form3Data: getFormFieldIds([...form3Item]),
      form3Rules: getFormRules([...form3Item]),

      tabDataProps: [
        {
          attr: 'formItems',
          des: '表单项配置',
          type: 'Array',
          select: ' ',
          default: '[]'
          // func:''
        },
        {
          attr: 'formData',
          des: '表单的值-双向绑定',
          type: 'Object',
          select: ' ',
          default: '{}'
          // func:''
        },
        {
          attr: 'hashPre',
          des: '表单标签 id 的前缀',
          type: 'String',
          select: ' ',
          default: 'hash_'
          // func:''
        }
      ],
      tabDataSlot: [
        // {
        //   name: 'menu-btn',
        //   des: '自定义折叠按钮'
        // }
      ],
      tabDataEvent: [
        {
          name: 'handleFormItemChange',
          des: '监听item的点击事件',
          func: 'func( value, formItem )'
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
    },
    // ================
    onSubmit1() {
      this.$refs[this.form1Name].validate((valid, object) => {
        if (valid) {
          console.log(this.form1Data)
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
    onReset1() {
      this.$refs[this.form1Name].resetFields()
    },
    onInit1() {
      // 1.初始化表单其它的数据
      this.form1Item[2].selectList = [
        {
          label: '男1',
          value: '男1'
        },
        {
          label: '女1',
          value: '女1'
        }
      ]
      // 2.初始化表单的值
      this.form1Data.u1 = 'web'
      this.form1Data.n1 = '刘军'
      this.form1Data.s1 = '男1'
      console.log(this.form1Item)
    },
    // ================
    onSubmit2() {
      this.$refs[this.form2Name].validate((valid, object) => {
        if (valid) {
          console.log(this.form2Data)
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
    onReset2() {
      this.$refs[this.form2Name].resetFields()
    },
    onInit2() {
      // 1.初始化表单其它的数据
      this.form2Item[1].disabled = true
      this.form2Item[2].selectList = [
        {
          label: '男1',
          value: '男1'
        },
        {
          label: '女1',
          value: '女1'
        }
      ]
      // 2.初始化表单的值
      this.form2Data.u2 = 'web'
      this.form2Data.n2 = '刘军'
      this.form2Data.s2 = '男1'
      console.log(this.form2Item)
    },
    // ================
    onSubmit3() {
      this.$refs[this.form3Name].validate((valid, object) => {
        if (valid) {
          console.log(this.form3Data)
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
    onReset3() {
      this.$refs[this.form3Name].resetFields()
    },
    onInit3() {
      // 1.初始化表单其它的数据
      this.form3Item[2].selectList = [
        {
          label: '男1',
          value: '男1'
        },
        {
          label: '女1',
          value: '女1'
        }
      ]
      // 2.初始化表单的值
      this.form3Data.u3 = 'web'
      this.form3Data.n3 = '刘军'
      this.form3Data.custom3 = 5
      console.log(this.form3Item)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-input{

  /deep/ .cus-width{

    .el-form-item__content,
    .el-form-item{
      width: 100%;
    }

    .el-select{
      width: 60%;
    }
  }

}
</style>
