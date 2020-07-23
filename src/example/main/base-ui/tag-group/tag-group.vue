<template>
  <div class="tag-group">
    <b-tag-group
      :tagList="tagList"
    >
    </b-tag-group>
    <br>
    <b-tag-group
      width='400px'
      :tagList="tagList"
    >
    </b-tag-group>
    <br>
    <b-tag-group
      :tagList="tagList2"
    >
    </b-tag-group>

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
  name: 'TagGroup',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'TagGroup'
    }
  },
  data: function() {
    return {
      tagList: [
        {
          name: '哈的',
          type: 'success'
        },
        {
          name: '哈的撒旦法1',
          type: 'warning'
        },
        {
          name: '哈的撒法2',
          type: 'info'
        },
        {
          name: '哈的旦法3',
          type: 'error'
        },
        {
          name: '哈的旦法4',
          style: {
            'background-color': '#f0f9eb',
            'border-color': '#e1f3d8',
            color: '#67c23a'
          }
        },
        {
          name: '哈的撒法5',
          // 自定义样式
          style: {
            'background-color': '#00913a',
            'border-color': 'red',
            color: 'white'
          }
        }
      ],
      tagList2: [
        {
          name: '哈的',
          type: 'success',
          size: 'mini'
        },
        {
          name: '哈的撒旦法1',
          type: 'warning',
          size: 'mini'
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tag-group{

}
</style>
