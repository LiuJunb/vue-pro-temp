<template>
  <div class="grid-item">
    <b-title-tag name="b-grid-item 组件"></b-title-tag>

    <h4>1.基本的使用(默认有点击的权限)</h4>
    <b-grid-item
      class="gird-col1"
      @handleGridItemClick="handleGridItemClick"
    >
       b-grid-item 其实是一个带有权限的 div
    </b-grid-item>

   <code-h
      lang="html"
      content='
      <b-grid-item
        class="gird-col1"
        @handleGridItemClick="handleGridItemClick"
      >
        b-grid-item 其实是一个带有权限的 div
      </b-grid-item>
    '></code-h>

   <code-h
      lang="js"
      content="
       handleGridItemClick(e, item) {
          console.log('evnet=', e)
          console.log('item=', item)
       }
      "></code-h>

    <h4>2.添加hover的动画</h4>
    <b-grid-item
      class="gird-col1"
      :animate="true"
      @handleGridItemClick="handleGridItemClick"
    >
       b-grid-item 其实是一个带有权限的 div
    </b-grid-item>

   <code-h
      lang="html"
      content='
      <b-grid-item
        class="gird-col1"
        :animate="true"
        @handleGridItemClick="handleGridItemClick"
      >
        b-grid-item 其实是一个带有权限的 div
      </b-grid-item>
    '></code-h>

    <h4>3.添加可点击的指定权限（有该权限才可以点击）</h4>
    <b-grid-item
      class="gird-col1"
      clickPerm="pp.detail"
      @handleGridItemClick="handleGridItemClick"
    >
       b-grid-item 其实是一个带有权限的 div
    </b-grid-item>

   <code-h
      lang="html"
      content='
      <b-grid-item
        class="gird-col1"
        clickPerm="pp.detail"
        @handleGridItemClick="handleGridItemClick"
      >
        b-grid-item 其实是一个带有权限的 div
      </b-grid-item>
    '></code-h>

    <h4>4.配和b-grid-view的使用(没有权限的 item )</h4>
    <b-grid-view
      :itemData="itemData"
      :hasPagination="false"
      :gutter="8"
      :md="6"
      :lg="4"
      :xl="3"
    >
      <template v-slot:col-item="slotProps">
        <b-grid-item
          class="gird-col1"
          @handleGridItemClick="handleGridItemClick($event,slotProps.item)"
        >
          {{slotProps.item.name}}
        </b-grid-item>
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
          <b-grid-item
            class="gird-col1"
            @handleGridItemClick="handleGridItemClick($event,slotProps.item)"
          >
            { {slotProps.item.name}}
          </b-grid-item>
        </template>
      </b-grid-view>
    '></code-h>

   <code-h
      lang="js"
      content="
       handleGridItemClick(e, item) {
          console.log('evnet=', e)
          console.log('item=', item)
       }
   "></code-h>

    <h4>5.配和b-grid-view的使用(有权限的 item )</h4>
    <b-grid-view
      :itemData="itemData"
      :hasPagination="false"
      :gutter="8"
      :md="6"
      :lg="4"
      :xl="3"
    >
      <template v-slot:col-item="slotProps">
        <b-grid-item
          class="gird-col1"
          :animate="true"
          clickPerm="pp.detail"
          @handleGridItemClick="handleGridItemClick($event,slotProps.item)"
        >
          {{slotProps.item.name}}
        </b-grid-item>
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
            <b-grid-item
              class="gird-col1"
              :animate="true"
              clickPerm="pp.detail"
              @handleGridItemClick="handleGridItemClick($event,slotProps.item)"
            >
              { {slotProps.item.name}}
            </b-grid-item>
          </template>
        </b-grid-view>
      '></code-h>

    <h4>BGridItem 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BGridItem 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BGridItem 的 Event：</h4>
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
  name: 'GridItem',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'GridItem'
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
          attr: 'clickPerm',
          des: '配置点击的权限，如果没有配置，代表没有权限控制',
          type: 'String',
          select: ' ',
          default: ''
          // func:''
        },
        {
          attr: 'animate',
          des: '是否需要动画',
          type: 'Boolean',
          select: 'true/false',
          default: 'false'
          // func:''
        },
        {
          attr: 'permissions',
          des: '用户所拥有的权限（不传递时，默认会去sessionStorage中查找permissions属性）',
          type: 'Array<String>',
          select: ' ',
          default: '[]'
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'default',
          des: '默认的插槽'
        }
      ],
      tabDataEvent: [
        {
          name: 'handleGridItemClick',
          des: '监听 item 的点击事件',
          func: 'func( e )'
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
    handleGridItemClick(e, item) {
      console.log('evnet=', e)
      console.log('item=', item)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-item{
  padding: 0px 10px;
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
