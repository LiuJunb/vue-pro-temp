<template>
  <div class="advanced-search">
    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <h4>1.简单的使用</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems1"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems1"
      >
      </b-advanced-search>
    '></code-h>

    <code-h
      lang="js"
      content='
      import BaseUI from "BaseUI"
      const { SearchType } = BaseUI.AdvancedSearch
      export const expFormItems1 = [
        {
          ItemType: SearchType.default,
          fieldId: "user",
          defaultValue: undefined,
          labelName: "活动",
          labelWidth: "90px",
          style: {
            width:"280px"
          },
          tooltip: `
            1.Left Center 提示文字<br/>
            2.第二行信息提示文字<br/>
            3.第3行信息提示文字
          `,
          rules: [
            { required: false, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          placeholder: null
          // 可继续添加 element-ui  input 组件的其它的属性
        }
      ]

      InputType:
        default, select,
        selectAndInput, checkboxs,
        radios, selectDate, selectDateRange,
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
      。。。。
    '></code-h>
    <h4>2.改变搜索框大小</h4>
    <b-advanced-search
       size='mini'
       :inline="true"
       :formItems="expFormItems1"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
    >
    </b-advanced-search>

    <code-h
      lang="html"
      content='
      <b-advanced-search
        size="mini"
        :inline="true"
        :formItems="expFormItems1"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
      >
      </b-advanced-search>

      size="default | small | mini"
      handleSubmit(this.formData)  监听搜索点击
      handleReset(this) 监听重置点击
    '></code-h>

    <h4>3.显示和隐藏搜索框的按钮</h4>
    <b-advanced-search
       :showBtn='false'
       :inline="true"
       :formItems="expFormItems1"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :showBtn="false"
        :inline="true"
        :formItems="expFormItems1"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>

      showBtn="false | true"
      handleFormItemChange(value, formItem) 监听搜索框表单所有组件直的改变
    '></code-h>

    <h4>4.使用select组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems2"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems2"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems2 = [
        {
          ItemType: SearchType.select,
          fieldId: 'region1',
          defaultValue: null,
          labelName: '活动区域1',
          labelWidth: '90px',
          style: {
            width: '150px'
          },
          rules: [
            { required: false, message: '请选择活动区域（单选）', trigger: 'change' }
          ],
          clearable: false,
          placeholder: null,
          tooltip: `
            1.Left Center 提示文字<br/>
            2.第二行信息提示文字<br/>
            3.第3行信息提示文字
          `,
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
        {
          ItemType: SearchType.select,
          fieldId: 'region2',
          defaultValue: [],
          labelName: '活动区域2',
          style: {
            width: '100%'
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
          // 可继续添加 element-ui  select 组件的其它的属性
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
        }
      ]
    "></code-h>

    <h4>5.使用select and input组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems3"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems3"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="

      expFormItems3 = [
      {
        ItemType: SearchType.selectAndInput,
        labelName: '名称',
        formItem_1: {
          fieldId: 'sel_1',
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
          fieldId: 'input_1',
          defaultValue: null,
          rules: [
            { required: false, message: '请输入名称', trigger: 'blur' }
          ],
          placeholder: null,
          style: {
            width: '300px'
          }
          // 可继续添加 element-ui  input 组件的其它的属性
        }
      },
      {
        ItemType: SearchType.inputAndSelect,
        labelName: '活动时间',
        required: false, // 显示红点
        labelWidth: '90px',
        // style: {
        //   width: '320px'
        // },
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
          // style: {
          //   width: '130px'
          // },
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
      }
    ]
    "></code-h>

    <h4>6.使用 checkboxs 组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems4"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems4"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems4 = [
      {
        ItemType: SearchType.checkboxs,
        fieldId: 'check_box_1',
        defaultValue: ['地推活动'],
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
        placeholder: null,
        // 可继续添加 element-ui  checkboxs 组件的其它的属性
      }
    ]
    "></code-h>

    <h4>7.使用 radios 组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems5"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems5"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems5 = [
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
            { required: false, message: '请选择活动资源', trigger: 'change' }
          ],
          placeholder: null,
          // 可继续添加 element-ui  radios 组件的其它的属性
        }
      ]
    "></code-h>

    <h4>8.使用 selectDate 组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems6"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems6"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems6 = [
        {
          ItemType: SearchType.selectDate,
          fieldId: 'startDate',
          defaultValue: null,
          labelName: '时间1',
          // labelWidth: '150px',
          valueFormat: 'yyyy-MM-dd',
          rules: [
            { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: '150px'
          }
          // 可继续添加 element-ui  DatePicker 组件的其它的属性
        },
        {
          ItemType: SearchType.selectDate,
          fieldId: 'dateTime',
          // defaultValue:String
          defaultValue: null,
          labelName: '时间2',
          // 指定组件的类型
          type: 'datetime',
          rules: [
            { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          valueFormat: 'yyyy-MM-dd HH:mm:ss'
          // style: {
          //   width: '100%'
          // }
          // 可继续添加 element-ui  DatePicker 组件的其它的属性
        }
      ]
    "></code-h>

    <h4>9.使用 selectDateRange 组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems7"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems7"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems7 = [
        {
          ItemType: SearchType.selectDateRange,
          fieldId: 'startDateTime1',
          defaultValue: ['2020-03-08', '2020-03-09'],
          labelName: '时间范围daterange',
          // labelWidth: '150px',
          valueFormat: 'yyyy-MM-dd',

          type: 'daterange',
          rules: [
            { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: '260px'
          }
          // 可继续添加 element-ui  DatePicker 组件的其它的属性
        },
        {
          ItemType: SearchType.selectDateRange,
          fieldId: 'startDateTime2',
          // defaultValue: null, // ok
          defaultValue: ['2020-03-08 01:22:00', '2020-03-09 01:22:00'],
          labelName: '时间范围datetimerange',

          type: 'datetimerange',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          rules: [
            { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
          ],
          placeholder: null,
          style: {
            width: '360px'
          }
          // 可继续添加 element-ui  DatePicker 组件的其它的属性
        }
      ]
    "></code-h>

    <h4>10.使用 selectDataAndTime 组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems8"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems8"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems8 = [
        {
          ItemType: SearchType.selectDataAndTime,
          labelName: '活动时间',
          required: false, // 显示红点
          labelWidth: '90px',
          style: {
            width: '320px'
          },
          formItem_1: {
            fieldId: 'data1',
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
            // 可继续添加 element-ui  DatePicker 组件的其它的属性

          },
          formItem_2: {
            fieldId: 'data2',
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
            // 可继续添加 element-ui  TimePicker 组件的其它的属性
          }
        }
      ]
    "></code-h>

    <h4>11.使用 custom 自定义组件</h4>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems9"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
      <!-- 自定义表单组件 -->
      <template v-slot:custom1="slotProps">
       <el-input
        v-model="slotProps.data[slotProps.row.fieldId]"
        v-bind="slotProps.row"
        >
        <template slot="prepend">Http://</template>
      </el-input>
     </template>

    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems9"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
        <!-- 自定义表单组件{data:formData,row:formItem} -->
        <template v-slot:custom1="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          >
          <template slot="prepend">Http://</template>
        </el-input>
      </template>

      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems9 = [
        {
          ItemType: SearchType.custom,
          customSlot: 'custom1', // 插槽名称
          fieldId: 'custom1',

          defaultValue: undefined,
          labelName: '名称1',
          // labelWidth: '130px',
          // style: {
          //   width: '260px'
          // },
          rules: [
            { required: false, message: '请输入自定义名称', trigger: 'blur' }
          ],
          placeholder: '请输入内容'
        }
      ]
    "></code-h>

    <h4>12.多种表单组件组合（1）</h4>
    <p>自动分配：labelWidth 和 表单组件的宽度</p>
    <b-advanced-search
       :inline="true"
       :formItems="expFormItems10"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
      <!-- 自定义表单组件{data:formData,row:formItem} -->
      <template v-slot:custom1="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          >
          <template slot="prepend">Http://</template>
        </el-input>
      </template>
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        :formItems="expFormItems10"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
        <!-- 自定义表单组件{data:formData,row:formItem} -->
        <template v-slot:custom1="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          >
          <template slot="prepend">Http://</template>
        </el-input>
      </template>

      </b-advanced-search>
    '></code-h>
    <code-h
      lang="js"
      content="
      expFormItems10 = [
      {
        ItemType: SearchType.default,
        fieldId: 'user',
        defaultValue: undefined,
        labelName: '活动',
        // labelWidth: '90px',
        // style: {
        //   width: '280px'
        // },
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
        // 可继续添加 element-ui  input 组件的其它的属性
      },
      {
        ItemType: SearchType.select,
        fieldId: 'region1',
        defaultValue: null,
        labelName: '活动区域1',
        // labelWidth: '90px',
        // style: {
        //   width: '150px'
        // },
        rules: [
          { required: false, message: '请选择活动区域（单选）', trigger: 'change' }
        ],
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
      },
      {
        ItemType: SearchType.selectDate,
        fieldId: 'startDate',
        defaultValue: null,
        labelName: '时间date',
        // labelWidth: '150px',
        // style: {
        //   width: '150px'
        // },
        valueFormat: 'yyyy-MM-dd',
        rules: [
          { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
        ],
        placeholder: null

      },
      {
        ItemType: SearchType.selectDateRange,
        fieldId: 'startDateTime1',
        defaultValue: ['2020-03-08', '2020-03-09'],
        labelName: '时间范围daterange',
        // labelWidth: '150px',
        // style: {
        //   width: '260px'
        // },
        valueFormat: 'yyyy-MM-dd',

        type: 'daterange',
        rules: [
          { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
        ],
        placeholder: null

      },
      {
        ItemType: SearchType.custom,
        customSlot: 'custom1', // 插槽名称
        fieldId: 'custom1',

        defaultValue: undefined,
        labelName: '名称1',
        // labelWidth: '130px',
        // style: {
        //   width: '260px'
        // },
        rules: [
          { required: false, message: '请输入自定义名称', trigger: 'blur' }
        ],
        placeholder: '请输入内容'
      }
      ]
    "></code-h>

    <h4>13.多种表单组件组合（2）</h4>
    <p>统一指定：label-width="90px" 的宽度 </p>
    <b-advanced-search
       :inline="true"
       label-width="90px"
       :formItems="expFormItems10"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
       @handleFormItemChange="handleFormItemChange"
    >
      <!-- 自定义表单组件{data:formData,row:formItem} -->
      <template v-slot:custom1="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          >
          <template slot="prepend">Http://</template>
        </el-input>
      </template>
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        :inline="true"
        label-width="90px"
        :formItems="expFormItems10"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
        @handleFormItemChange="handleFormItemChange"
      >
        <!-- 自定义表单组件{data:formData,row:formItem} -->
        <template v-slot:custom1="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          >
          <template slot="prepend">Http://</template>
        </el-input>
      </template>

      </b-advanced-search>
    '></code-h>

    <h4>14.表单item的收起和展开</h4>
    <b-advanced-search
       label-width="90px"
       :inline="true"

       :showArrow="true"
       :defaultShowItemCounts="6"

       size="mini"
       :formItems="adSearchDefaultConfig"
       @handleSubmit="handleSubmit"
       @handleReset="handleReset"
    >
    </b-advanced-search>
    <code-h
      lang="html"
      content='
      <b-advanced-search
        label-width="90px"
        :inline="true"

        :showArrow="true"
        :defaultShowItemCounts="6"

        size="mini"
        :formItems="adSearchDefaultConfig"
        @handleSubmit="handleSubmit"
        @handleReset="handleReset"
      >
      </b-advanced-search>
    '></code-h>

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
        <code-h
      lang="html"
      content='
      <b-advanced-search
        :formItems="adLogin"
        :style="{width:"300px"}"
        @handleSubmit="handleSubmit"
      >
      <template v-slot:form-subit="slotProps">
            <el-button
              type="primary"
              :style="{width:"100%"}"
              @click="slotProps.refForm.onSubmit()"
              >
              登录
            </el-button>
        </template>
      </b-advanced-search>
    '></code-h>

    <code-h
      lang="js"
      content="
      export const adLogin = [
        {
          ItemType: SearchType.default,
          fieldId: 'username',

          defaultValue: '',
          // labelName: '',
          // prefixIcon: 'el-icon-user',
          'prefix-icon': 'el-icon-user',
          clearable: true,

          rules: [
            { required: false, message: '请输入用户名', trigger: 'blur' },
            // { min: 11, max: 11, message: '长度在11个字符', trigger: 'change' },
            { validator: validateUsername, trigger: 'change' }
          ],
          placeholder: '请输入用户名'
        },
        {
          ItemType: SearchType.default,
          fieldId: 'password',

          defaultValue: '',
          // labelName: '请输入密码',
          prefixIcon: 'el-icon-lock',
          // showPassword: true, // 跟下面的一样
          'show-password': true,

          rules: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePassword, trigger: 'change' }
          ],
          placeholder: '请输入密码'
        }
      ]
      "></code-h>

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

    <code-h
      lang="html"
      content='
      <b-advanced-search
        :formItems="adForm"
        label-position="left"
        :style="{width:"400px"}"
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
    '></code-h>

    <code-h
      lang="js"
      content="
      const adForm = [
        {
          ItemType: SearchType.default,
          fieldId: 'username',

          defaultValue: '',
          labelName: '用户名',
          clearable: true,
          // labelWidth: '100px',
          style: {
            width: '100%'
          },
          rules: [
            { required: false, message: '请输入用户名', trigger: 'blur' }
          ],
          placeholder: '请输入用户名'
        },
        {
          ItemType: SearchType.default,
          fieldId: 'password_1',

          defaultValue: '',
          labelName: '请输入密码',
          // labelWidth: '100px',
          style: {
            width: '100%'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        },
        {
          ItemType: SearchType.default,
          fieldId: 'password_2',

          defaultValue: '',
          labelName: '确认密码',
          labelWidth: '100px',
          style: {
            width: '300px'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        },
        {
          ItemType: SearchType.select,
          fieldId: 'select_1',
          defaultValue: '',
          labelName: '选择城市',
          selectList: [
            {
              label: '广州',
              value: 1
            },
            {
              label: '深圳',
              value: 2
            }
          ],
          style: {
            width: '100%'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        },
        {
          ItemType: SearchType.radios,
          fieldId: 'select_2',
          defaultValue: '',
          labelName: '选择性别',
          radioList: [
            {
              label: '男'
            },
            {
              label: '女'
            }
          ],
          labelWidth: '100px',
          style: {
            width: '300px'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        },
        {
          ItemType: SearchType.checkboxs,
          fieldId: 'select_3',
          defaultValue: [],
          labelName: '选择爱好',
          checkboxList: [
            {
              label: '游戏'
            },
            {
              label: '跑步'
            },
            {
              label: '听歌'
            }
          ],
          labelWidth: '100px',
          style: {
            width: '300px'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        },
        {
          ItemType: SearchType.default,
          fieldId: 'textarea_1',
          defaultValue: '',
          labelName: '请输入内容',

          type: 'textarea',
          maxlength: '30',
          'show-word-limit': true,
          style: {
            width: '100%'
          },
          rules: [
            { required: false, message: '请输入密码', trigger: 'blur' }
          ],
          placeholder: '请输入密码'
        }
      ]

      "></code-h>

    <h4>6.普通表单2</h4>
    <!-- 普通表单2 -->
    <b-advanced-search
       ref="bAdvancedSearch"
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

    <code-h
      lang="html"
      content='
        <b-advanced-search
          ref="bAdvancedSearch"
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

    '></code-h>

    <code-h
      lang="js"
      content="
      export const adForm2 = [

  {
    ItemType: SearchType.default,
    fieldId: 'username',

    defaultValue: '',
    labelName: '用户名',
    clearable: true,
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入用户名', trigger: 'blur' }
    ],
    placeholder: '请输入用户名'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'password_1',

    defaultValue: '',
    labelName: '请输入密码',
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.select,
    fieldId: 'select_1',
    defaultValue: '',
    labelName: '选择城市',
    selectList: [
      {
        label: '广州',
        value: 1
      },
      {
        label: '深圳',
        value: 2
      }
    ],
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.radios,
    fieldId: 'select_2',
    defaultValue: '',
    labelName: '选择性别',
    radioList: [
      {
        label: '男'
      },
      {
        label: '女'
      }
    ],
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.checkboxs,
    fieldId: 'select_3',
    defaultValue: [],
    labelName: '选择爱好',
    checkboxList: [
      {
        label: '游戏'
      },
      {
        label: '跑步'
      },
      {
        label: '听歌'
      }
    ],
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'textarea_1',
    defaultValue: '',
    labelName: '请输入内容',

    type: 'textarea',
    maxlength: '30',
    'show-word-limit': true,
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  }
]
      "></code-h>

    <code-h
      lang="js"
      content="
      handleInitData(advancedSearch) {
        // 1.修改选着城市
        this.adForm2[2].selectList = [
          {
            label: '广州12',
            value: 1
          },
          {
            label: '深圳12',
            value: 2
          }
        ]

      // 2.回显表单的值 ok
      // advancedSearch.initFormData({
      //   username: '刘军',
      //   password_1: '123',
      //   select_1: '广州',
      //   select_2: '男',
      //   select_3: ['跑步', '听歌'],
      //   textarea_1: 'haha'
      // })

      // 3.或者这样回显数据
      if (this.$refs.bAdvancedSearch) {
        this.$refs.bAdvancedSearch.initFormData({
          username: '刘军',
          password_1: '123',
          select_1: '广州12',
          select_2: '男',
          select_3: ['跑步', '听歌'],
          textarea_1: 'haha'
        })
      }
      },
      handleSubmit(formData) {
        // console.log(new Date(formData.data1).toLocaleString())
        console.log(formData)
      },
      "></code-h>

    <h4>BAdvancedSearch 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BAdvancedSearch 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BAdvancedSearch 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

    <h4>formItems 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataFormItemsProps"
    >
    </b-advanced-table>

    <!-- <h4>formItems 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataFormItemsSlot"
    >
    </b-advanced-table> -->

  </div>
</template>

<script>
import {
  expFormItems1,
  expFormItems2,
  expFormItems3,
  expFormItems4,
  expFormItems5,
  expFormItems6,
  expFormItems7,
  expFormItems8,
  expFormItems9,
  expFormItems10,
  expFormItems11,
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
      expFormItems1,
      expFormItems2,
      expFormItems3,
      expFormItems4,
      expFormItems5,
      expFormItems6,
      expFormItems7,
      expFormItems8,
      expFormItems9,
      expFormItems10,
      expFormItems11,

      adSearchDefaultConfig,
      adSearchConfig,
      adLogin,
      adForm,
      adForm2,
      tabDataProps: [
        {
          attr: 'formItems',
          des: '表单的item配置',
          type: 'Array',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'width',
          des: '整个表单的宽',
          type: 'String',
          select: ' ',
          default: '100%'
          // func:''
        },
        {
          attr: 'showBtn',
          des: '是否显示搜索和重置按钮',
          type: 'Boolean',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'showSearch',
          des: '是否显示 搜素按钮',
          type: 'Boolean',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'showReset',
          des: '是否显示 重置按钮',
          type: 'Boolean',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'showArrow',
          des: '是否显示：收起，展开 按钮',
          type: 'Boolean',
          select: ' ',
          default: 'false'
          // func:''
        },
        {
          attr: 'defaultShowItemCounts',
          des: '收起时显示多少个item，默认6个（使用该属性，showArrow必须设置为true）',
          type: 'Number',
          select: ' ',
          default: '6'
          // func:''
        },
        {
          attr: 'hashPre',
          des: '给每个 标签 id 属性值添加的前缀',
          type: 'String',
          select: ' ',
          default: 'hash_'
          // func:''
        },
        {
          attr: 'defaultArrowDirection',
          des: '默认显示收起文本',
          type: 'String',
          select: ' ',
          default: 'down'
          // func:''
        },
        {
          attr: 'searchItemLabelwidth',
          des: '搜素 按钮距离左边的间距',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'form-subit',
          des: '自定义搜索和重置的按钮'
        }
      ],
      tabDataEvent: [
        {
          name: 'handleSubmit',
          des: '监听搜索的点击事件',
          func: 'func( formData )'
        },
        {
          name: 'handleReset',
          des: '监听重置的点击事件',
          func: 'func( this )'
        },
        {
          name: 'handleFormItemChange',
          des: '监听表单中item的点击事件',
          func: 'func( value, formItem )'
        }
      ],
      tabDataFormItemsProps: [
        {
          attr: 'ItemType',
          des: '指定item组件的类型，默认是input输入框组件',
          type: 'Number',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'fieldId',
          des: '指定表单组件的id，提交表单时通过该id获取表单的值',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'defaultValue',
          des: '指定表单组件默认值',
          type: '',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'labelName',
          des: '指定表单组件label的名称',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'customSlot',
          des: '自定义item的插槽名称',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: '....',
          des: '',
          type: '',
          select: ' ',
          default: ' '
          // func:''
        }
      ],
      tabDataFormItemsSlot: [
        {
          name: 'form-subit',
          des: '自定义搜索和重置的按钮'
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
    // 1.修改选着城市
      this.adForm2[2].selectList = [
        {
          label: '广州12',
          value: 1
        },
        {
          label: '深圳12',
          value: 2
        }
      ]
      // 2.回显表单的值 ok
      // advancedSearch.initFormData({
      //   username: '刘军',
      //   password_1: '123',
      //   select_1: '广州',
      //   select_2: '男',
      //   select_3: ['跑步', '听歌'],
      //   textarea_1: 'haha'
      // })

      // 3.或者这样回显数据
      if (this.$refs.bAdvancedSearch) {
        this.$refs.bAdvancedSearch.initFormData({
          username: '刘军',
          password_1: '123',
          select_1: '广州12',
          select_2: '男',
          select_3: ['跑步', '听歌'],
          textarea_1: 'haha'
        })
      }
    },
    handleSubmit(formData) {
      // console.log(new Date(formData.data1).toLocaleString())
      console.log(formData)
    },
    handleReset() {
      console.log('handleReset')
    },
    handleFormItemChange(value, formItem) {
      console.log(value, formItem)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-search{

}
</style>
