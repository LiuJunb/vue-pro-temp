<template>
  <div class="grid-view">

    <b-title-tag name="b-grid-view 组件"></b-title-tag>
    <h4>1.基本的使用</h4>
    <b-grid-view
      :itemData="itemData"
      :hasPagination="false"
      :gutter="8"
      :md="6"
      :lg="4"
      :xl="3"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col1">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <code-h
      lang="html"
      content='
      <b-grid-view
        :itemData="itemData"
        :hasPagination="false"
        :gutter="8"
        :md="6"
        :lg="4"
        :xl="3"
      >
        <template v-slot:col-item="slotProps">
          <div class="gird-col1">
            { {slotProps.item.name}}
          </div>
        </template>
      </b-grid-view>
    '></code-h>
    <code-h
      lang="js"
      content="
            itemData: [
        {
          name: '大军',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军1',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军2',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        }
      ],
      "></code-h>

    <h4>2.带分页器</h4>
    <b-grid-view
      :itemData="itemData"
      :showEmptyText="true"
      @handlePaginatonChange="handlePaginatonChange"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col2">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <code-h
      lang="html"
      content='
      <b-grid-view
        :itemData="itemData"
        :showEmptyText="true"
        @handlePaginatonChange="handlePaginatonChange"
      >
        <template v-slot:col-item="slotProps">
          <div class="gird-col2">
            { {slotProps.item.name}}
          </div>
        </template>
      </b-grid-view>
    '></code-h>

    <h4>3.带分页器没数据时</h4>
    <b-grid-view
      :itemData="[]"
      :paginationConf="paginationConf"
      :showEmptyText="true"
      @handlePaginatonChange="handlePaginatonChange"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col2">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <code-h
      lang="html"
      content='
      <b-grid-view
        :itemData="[]"
        :showEmptyText="true"
        @handlePaginatonChange="handlePaginatonChange"
      >
        <template v-slot:col-item="slotProps">
          <div class="gird-col2">
            { {slotProps.item.name}}
          </div>
        </template>
      </b-grid-view>
    '></code-h>

    <h4>BGridView 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BGridView 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BGridView 的 Event：</h4>
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
// import {
//
// } from './page-config'
import {
  TableColumnMixin
} from '@/mixins/index.js'
export default {
  name: 'GridView',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'GridView'
    }
  },
  data: function() {
    return {
      itemData: [
        {
          name: '大军',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军1',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军2',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        }
      ],
      paginationConf: {
        'current-page': 1, // 重 1 开始
        'page-sizes': [100, 200, 300, 400],
        'page-size': 100,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 400
      },
      tabDataProps: [
        {
          attr: 'width',
          des: '组件的宽',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'gutter',
          des: '栅格间隔',
          type: 'Number',
          select: ' ',
          default: '0'
          // func:''
        },
        {
          attr: '栅格系统的数据',
          des: 'itemData',
          type: 'Array',
          select: ' ',
          default: '[]'
          // func:''
        },
        {
          attr: 'hasPagination',
          des: '是否有分页器',
          type: 'Boolean',
          select: ' ',
          default: 'true'
          // func:''
        },
        {
          attr: 'paginationConf',
          des: '分页器的配置',
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
          attr: 'xs',
          des: '',
          type: 'Number',
          select: ' ',
          default: '24'
          // func:''
        },
        {
          attr: 'sm',
          des: '',
          type: 'Number',
          select: ' ',
          default: '24'
          // func:''
        },
        {
          attr: 'md',
          des: '',
          type: 'Number',
          select: ' ',
          default: '24'
          // func:''
        },
        {
          attr: 'lg',
          des: '',
          type: 'Number',
          select: ' ',
          default: '8'
          // func:''
        },
        {
          attr: 'xl',
          des: '',
          type: 'Number',
          select: ' ',
          default: '6'
          // func:''
        },
        {
          attr: 'showEmptyText',
          des: '没数据时是否显示空文本',
          type: 'Boolean',
          select: ' ',
          default: 'false'
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
          name: 'handlePaginatonChange',
          des: '监听分页器的点击事件',
          func: 'func( pagination )'
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
    handlePaginatonChange(pagination) {
      console.log(pagination)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-view{

  .gird-col1{
    border: 1px solid red;
    min-height: 80px;
  }
  .gird-col2{
    border: 1px solid green;
    min-height: 200px;
  }
}
</style>
