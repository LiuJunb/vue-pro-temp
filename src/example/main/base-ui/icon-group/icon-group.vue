<template>
  <div class="icon-group">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>

    <br>
    <b-icon-group
      :iconList="iconList1"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      :iconList="iconList2"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      maxWidth='500px'
      pull="right"
      :iconList="iconList3"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      :iconList="iconList4"
      maxWidth='200px'
      iconClass="test"
      :permissions="[]"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>

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

    <br>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
import {
  TableColumnMixin
} from '@/mixins/index.js'
import passImg from '@/assets/pwd.png'
export default {
  name: 'IconGroup',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'IconGroup'
    }
  },
  data: function() {
    return {
      passImg,
      iconList1: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '创建时间',
          color: 'red',
          nameStyle: {
            color: 'blue'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray',
            fontSize: '13px'
          },
          icon: 'el-icon-bell'
        },
        {
          name: '密码',
          color: 'blue'
        },
        {
          icon: 'el-icon-bell',
          color: 'red'
        }
      ],
      iconList2: [
        {
          name: '编辑',
          icon: 'el-icon-edit',
          img: passImg,
          color: '#3988FF',
          bgColor: '#EFF3FA',
          disabled: false,
          fontSize: '16px',
          btnPerm: ''
        },
        {
          name: '发现',
          img: passImg,
          color: 'green',
          disabled: false,
          fontSize: '18px',
          btnPerm: ''

        },
        {
          name: '创建时间',
          nameStyle: {
            color: 'black'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray'
          },
          icon: 'el-icon-bell',
          disabled: true
        },
        {
          name: '密码',
          color: 'blue',
          bgColor: 'red',
          disabled: true,
          fontSize: '16px',
          btnPerm: ''
        },
        {
          icon: 'el-icon-bell',
          color: 'red',
          bgColor: 'green'
        }
      ],
      iconList3: [
        {
          name: '1编辑没有权限',
          icon: 'el-icon-edit',
          fontSize: '18px',
          btnPerm: 'pp'
        },
        {
          name: '2发现有权限',
          icon: 'el-icon-discover',
          fontSize: '18px',
          btnPerm: ''

        }
      ],
      iconList4: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '创建时间',
          nameStyle: {
            color: 'black'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray',
            fontSize: '13px'
          },
          icon: 'el-icon-bell'
        },
        {
          name: '密码',
          color: 'blue'
        },
        {
          icon: 'el-icon-bell',
          color: 'red'
        }
      ],
      tabDataProps: [
        {
          attr: 'iconList',
          des: 'icon组 的配置列表',
          type: 'Array',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'pull',
          des: 'icon 组的居中',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'maxWidth',
          des: 'icon 组的最大宽',
          type: 'String',
          select: ' ',
          default: '100%'
          // func:''
        },
        {
          attr: 'permissions',
          des: '用户所拥有的权限（不传递时，默认会去sessionStorage中查找permissions属性）',
          type: 'Array',
          select: ' ',
          default: '[]'
          // func:''
        },
        {
          attr: 'iconClass',
          des: 'icon 标签添加一个 class',
          type: 'String',
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
    handleIconClick(item) {
      console.log(item)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon-group{

}
</style>
