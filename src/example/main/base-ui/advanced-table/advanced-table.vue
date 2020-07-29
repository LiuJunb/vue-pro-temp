<template>
  <div class="advanced-table">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <h4>1.表格的基本使用</h4>
    <b-advanced-table
      style="width: 100%"
      :tabColumn="tabColumn"
      :tabData="tabData"
      :paginationConf="paginationConf"
    >
    </b-advanced-table>

    <code-h
      lang="html"
      content='
      <b-advanced-table
        style="width: 100%"
        :tabColumn="tabColumn"
        :tabData="tabData"
        :paginationConf="paginationConf"
      >
      </b-advanced-table>
    '></code-h>
    <code-h
      lang="js"
      content="
            tabColumn: [
        // 查看element-ui column的属性
        {
          prop: 'name',
          label: '姓名',
          width: '180px'
        },
        {
          prop: 'age',
          label: '年龄',
          width: '180px',
          sortable: true
        },
        {
          prop: 'sex',
          label: '性别',
          width: '180px'
        },
        {
          prop: 'content',
          label: '内容',
          width: '380px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'address',
          label: '地址',
          fixed: 'right'
          // width: '200px'
        }
      ],
      tabData: [
        {
          name: '刘军',
          age: 100,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        },
        {
          name: '小军',
          age: 10,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        },
        {
          name: '大军',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        }
      ],
      paginationConf: {
        'current-page': 1, // 重 1 开始
        'page-sizes': [100, 200, 300, 400],
        'page-size': 100,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 3
      },
      "></code-h>

    <h4>2.隐藏表格的序号</h4>
    <b-advanced-table
      :tabColumn="tabColumn"
      :tabData="tabData"
      :hasIndex="false"
      :paginationConf="paginationConf"
    >
    </b-advanced-table>

    <code-h
      lang="html"
      content='
      <b-advanced-table
        :tabColumn="tabColumn"
        :tabData="tabData"
        :hasIndex="false"
        :paginationConf="paginationConf"
      >
      </b-advanced-table>
    '></code-h>

    <h4>3.显示表格的CheckBox</h4>
    <b-advanced-table
      :tabColumn="tabColumn"
      :tabData="tabData"
      :hasSelection="true"
      :paginationConf="paginationConf"
    >
    </b-advanced-table>

    <code-h
      lang="html"
      content='
      <b-advanced-table
        :tabColumn="tabColumn"
        :tabData="tabData"
        :hasSelection="true"
        :paginationConf="paginationConf"
      >
      </b-advanced-table>
    '></code-h>

    <h4>4.自定义表格的头部</h4>
    <b-advanced-table
      stripe
      :border="true"
      style="width: 100%"
      :tabColumn="tabColumn1"
      :tabData="tabData"
    >
      <template v-slot:address-header="">
        <a href="#">adress</a>
      </template>
    </b-advanced-table>

    <code-h
      lang="html"
      content='
      <b-advanced-table
        stripe
        :border="true"
        style="width: 100%"
        :tabColumn="tabColumn1"
        :tabData="tabData"
      >
        <template v-slot:address-header="">
          <a href="#">adress</a>
        </template>
      </b-advanced-table>
    '></code-h>
    <code-h
      lang="js"
      content="
      tabColumn1: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'date',
          label: '日期',
          width: '180px'
        },
        {
          prop: 'address',
          label: '地址',
          slotColHeader: 'address-header'// 自定义列头部的插槽
        }
      ],
      "></code-h>

    <h4>5.自定义表格的列</h4>
    <b-advanced-table
      stripe
      :border="true"
      style="width: 100%"
      :tabColumn="tabColumn2"
      :tabData="tabData"
    >
      <template v-slot:date="slotProps">
        <a href="#">{{slotProps.row.date}}</a>
      </template>
    </b-advanced-table>

    <code-h
      lang="html"
      content='
      <b-advanced-table
        stripe
        :border="true"
        style="width: 100%"
        :tabColumn="tabColumn2"
        :tabData="tabData"
      >
        <template v-slot:date="slotProps">
          <a href="#">{ {slotProps.row.date}}</a>
        </template>
      </b-advanced-table>
    '></code-h>
    <code-h
      lang="js"
      content="
      tabColumn2: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'date',
          label: '日期',
          width: '180px',
          slotColName: 'date' // 自定义列的插槽
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      "></code-h>

    <h4>BAdvancedTable 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BAdvancedTable 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BAdvancedTable 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

    <h4>BAdvancedTable 的 Methods：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnMethods"
      :tabData="tabDataMethods"
    >
    </b-advanced-table>

  </div>
</template>

<script>
import {
  TableColumnMixin
} from '@/mixins/index.js'
export default {
  name: 'AdvancedTable',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'AdvancedTable'
    }
  },
  data: function() {
    return {
      tabColumn: [
        // 查看element-ui column的属性
        {
          prop: 'name',
          label: '姓名',
          width: '180px'
        },
        {
          prop: 'age',
          label: '年龄',
          width: '180px',
          sortable: true
        },
        {
          prop: 'sex',
          label: '性别',
          width: '180px'
        },
        {
          prop: 'content',
          label: '内容',
          width: '380px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'address',
          label: '地址',
          fixed: 'right'
          // width: '200px'
        }
      ],
      tabColumn1: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'date',
          label: '日期',
          width: '180px'
        },
        {
          prop: 'address',
          label: '地址',
          slotColHeader: 'address-header'// 自定义列头部的插槽
        }
      ],
      tabColumn2: [
        {
          prop: 'name',
          label: '姓名',
          width: '180px',
          'show-overflow-tooltip': true
        },
        {
          prop: 'date',
          label: '日期',
          width: '180px',
          slotColName: 'date' // 自定义列的插槽
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
      tabData: [
        {
          name: '刘军',
          age: 100,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        },
        {
          name: '小军',
          age: 10,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        },
        {
          name: '大军',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'
        }
      ],
      paginationConf: {
        'current-page': 1, // 重 1 开始
        'page-sizes': [100, 200, 300, 400],
        'page-size': 100,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 3
      },
      tabDataProps: [
        {
          attr: 'headerCellStyle',
          des: 'table 头部的样式',
          type: 'Object',
          select: ' ',
          default: `
          {
            backgroundColor: '#f5f5f9'
          }
          `
          // func:''
        },
        {
          attr: 'hasIndex',
          des: '是否需要序号',
          type: 'Boolean',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'hasSelection',
          des: '是否需要可勾选的行',
          type: 'Boolean',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'selectionAttr',
          des: '勾选列的配置，也是el-table-column的配置',
          type: 'Object',
          select: ' ',
          default: '{}'
          // func:''
        },
        {
          attr: 'hasPagination',
          des: '是否需要分页器',
          type: 'Boolean',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'tabColumn',
          des: 'table的列的配置',
          type: 'Array',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'tabData',
          des: 'table每一列的数据',
          type: 'Array',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'paginationConf',
          des: '初始化或者更新分页器的配置',
          type: 'Object',
          select: ' ',
          default: `
          {
            'current-page': 1, // 重 1 开始
            'page-sizes': [100, 200, 300, 400],
            'page-size': 100,
            layout: 'total, sizes, prev, pager, next, jumper',
            total: 400
          }
          `
          // func:''
        },
        {
          attr: '....',
          des: '可以继续使用el-table的其它属性',
          type: '',
          select: ' ',
          default: ' '
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
          name: 'handleSelectionChange',
          des: '监听每一行checkbox的点击事件',
          func: 'func( value )'
        },
        {
          name: 'handlePaginatonChange',
          des: '监听分页器的点击事件',
          func: 'func( pagination )'
        }
      ],
      tabDataMethods: [
        {
          name: 'getElTable',
          des: '返回el-table的对象',
          func: ''
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-table{

}
</style>
