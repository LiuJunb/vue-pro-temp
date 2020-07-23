<template>
  <div class="advanced-table">
    <b-advanced-table
      stripe
      :border="true"
      height="300"
      style="width: 100%"
      :header-cell-style="{color:'white',backgroundColor:'#31B989'}"
    >
    </b-advanced-table>

    <br>

    <b-advanced-table
      stripe
      :border="true"
      height="300"
      style="width: 100%"
    >
      <template v-slot:date="slotProps">
        <a href="#">{{slotProps.row.date}}</a>
      </template>
      <template v-slot:address-header="">
        <a href="#">adress</a>
      </template>
    </b-advanced-table>
    <br>

    <!-- 查看element-ui table的属性 -->
    <b-advanced-table
      style="width: 100%"
      :tabColumn="tabColumn"
      :tabData="tabData"
      :paginationConf="paginationConf"
    >
    </b-advanced-table>

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
      tabData: [
        {
          name: '刘军',
          age: 100,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '小军',
          age: 10,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '大军',
          age: 50,
          sex: '男',
          content: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          address: '上海市普陀区金沙江路 1518 弄'
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-table{

}
</style>
