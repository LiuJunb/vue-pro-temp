<template>
  <div class="grid-view">
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

    <br>

    <b-grid-view
      :itemData="itemData"
      @handlePaginatonChange="handlePaginatonChange"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col2">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <br>
    <b-grid-view
      :itemData="[]"
      :showEmptyText="true"
      @handlePaginatonChange="handlePaginatonChange"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col2">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <br>

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
