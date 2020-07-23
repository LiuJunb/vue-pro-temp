<template>
  <div class="status-text">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <b-status-text
      value="0"
      :statusList="statusList"
    >
    </b-status-text>
    <b-status-text
      value="1"
      :statusList="statusList"
    >
    </b-status-text>

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
  name: 'StatusText',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'StatusText'
    }
  },
  data: function() {
    return {
      statusList: {
        No: {
          value: '0',
          label: '否',
          color: 'red',
          id: '' // todo ...
        },
        Yes: {
          value: '1',
          label: '是',
          color: 'green',
          id: '' // todo ...
        }
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
.status-text{

}
</style>
