<template>
  <div class="title-tag">

    <b-title-tag name="b-title-tag 组件"></b-title-tag>
    <h4>1.基本的使用</h4>
    <b-title-tag>
    </b-title-tag>
    <code-h
      lang="html"
      content='
      <b-title-tag>
      </b-title-tag>
    '></code-h>

    <h4>2.修改颜色</h4>
      <b-title-tag
        name="红色标题"
        fontSize='30px'
        color='red'
        class='tag2'
        >
      </b-title-tag>
    <code-h
      lang="html"
      content="
      <b-title-tag
        name='红色标题'
        fontSize='30px'
        color='red'
        class='tag2'
      >
      </b-title-tag>
      "></code-h>
    <code-h
      lang="css"
      content='
      // 修改伪类的样式
      /deep/ .tag2 .name{
        &::before{
          background: red;
        }
      }
    '></code-h>

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
  name: 'TitleTag',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'TitleTag'
    }
  },
  data: function() {
    return {
      tabDataProps: [
        {
          attr: 'width',
          des: '组件的宽',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'name',
          des: '标题',
          type: 'String',
          select: ' ',
          default: '标题'
          // func:''
        },
        {
          attr: 'fontSize',
          des: '字体大小',
          type: 'String',
          select: ' ',
          default: '16px'
          // func:''
        },
        {
          attr: 'color',
          des: '字体颜色',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'sub-name',
          des: '二级标题的插槽'
        },
        {
          name: 'title-right',
          des: '右边布局的插槽'
        }
      ],
      tabDataEvent: [
        // {
        //   name: 'handleClickCurrentMenu',
        //   des: '监听重复点击当前的菜单',
        //   func: 'func( menu )'
        // }
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
.title-tag{
  // 修改伪类的样式
  /deep/ .tag2 .name{
    &::before{
      background: red;
    }
  }
}
</style>
