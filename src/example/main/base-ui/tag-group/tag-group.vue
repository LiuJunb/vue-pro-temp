<template>
  <div class="tag-group">

    <b-title-tag name="b-tag-group 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <b-tag-group
      :tagList="tagList"
    >
    </b-tag-group>
    <code-h
      lang="html"
      content='
      <b-tag-group
        :tagList="tagList"
      >
      </b-tag-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      tagList: [
        {
          name: '哈的',
          type: 'success'
          // 可以继续添加 el-tag 的 属性
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
      "></code-h>

    <h4>2.修改大小</h4>
    <b-tag-group
      :tagList="tagList2"
    >
    </b-tag-group>
    <code-h
      lang="html"
      content='
      <b-tag-group
        :tagList="tagList2"
      >
      </b-tag-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      tagList2: [
        {
          name: '哈的',
          type: 'success',
          size: 'mini'
          // 可以继续添加 el-tag 的 属性
        },
        {
          name: '哈的撒旦法1',
          type: 'warning',
          size: 'mini'
        }
      ],
      "></code-h>

    <h4>BTagGroup 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BTagGroup 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BTagGroup 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

    <h4>tagList 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataTagListProps"
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
          attr: 'tagList',
          des: 'tag组的配置列表',
          type: 'Array',
          select: ' ',
          default: '[]'
          // func:''
        },
        {
          attr: 'width',
          des: '组件的宽',
          type: 'String',
          select: ' ',
          default: 'null'
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
          name: 'handleClose',
          des: '监听tag的点击事件',
          func: 'func( tag )'
        }
      ],
      tabDataTagListProps: [
        {
          attr: 'name',
          des: 'tag的名称',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'type',
          des: 'tag的类型',
          type: 'String',
          select: 'success / warning / info / error',
          default: 'null'
          // func:''
        },
        {
          attr: 'style',
          des: 'tag的行内样式',
          type: 'String',
          select: '',
          default: '{}'
          // func:''
        },
        {
          attr: 'size',
          des: 'tag的大小',
          type: 'String',
          select: 'medium / small / mini',
          default: 'null'
          // func:''
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
