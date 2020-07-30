<template>
  <div class="icon-group">

    <b-title-tag name="b-icon-group 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <b-icon-group
      :iconList="iconList"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>

    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      iconList: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '收藏',
        }
      ]

      handleIconClick(item) {
        console.log(item)
      }
      "></code-h>

    <h4>2.修改颜色</h4>
    <b-icon-group
      :iconList="iconList1"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList1"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      iconList1: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
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
      "></code-h>

    <h4>3.不可以点击</h4>
    <b-icon-group
      :iconList="iconList2"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList2"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      iconList2: [
        {
          name: '编辑',
          icon: 'el-icon-edit',
          disabled: false,
          fontSize: '16px'
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
          disabled: true,
          fontSize: '16px'
        }
      ],
      "></code-h>

    <h4>4.添加背景颜色</h4>
    <b-icon-group
      :iconList="iconList4"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList4"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
           iconList4: [
        {
          name: '编辑',
          icon: 'el-icon-edit',
          color: '#3988FF',
          bgColor: '#EFF3FA',
          fontSize: '16px'
        },
        {
          name: '发现',
          color: 'green',
          fontSize: '18px'
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
          icon: 'el-icon-bell'
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
      "></code-h>

    <h4>5.使用image图片</h4>
    <b-icon-group
      :iconList="iconList5"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList5"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      iconList5: [
        {
          name: '编辑',
          // icon 和 img 同事存在时 优先使用 icon
          icon: 'el-icon-edit',
          img: passImg,

          color: '#3988FF',
          bgColor: '#EFF3FA',
          disabled: false,
          fontSize: '16px',
        },
        {
          name: '发现',
          img: passImg,
          color: 'green',
          disabled: false,
          fontSize: '18px',
        }
      ],

      import passImg from '@/assets/pwd.png'
      "></code-h>

    <h4>6.添加授权标识使用</h4>
    <b-icon-group
      maxWidth='500px'
      pull="right"
      :iconList="iconList6"
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        maxWidth="500px"
        pull="right"
        :iconList="iconList6"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      iconList6: [
        {
          name: '1编辑没有权限',
          icon: 'el-icon-edit',
          fontSize: '18px',
          btnPerm: 'pp'
        },
        {
          name: '2发现不需要权限',
          icon: 'el-icon-discover',
          fontSize: '18px',
          btnPerm: ''

        }
      ],

      "></code-h>

    <h4>7.最大的宽度</h4>
    <b-icon-group
      :iconList="iconList7"
      maxWidth='200px'
      @handleIconClick="handleIconClick"
    >
    </b-icon-group>
    <code-h
      lang="html"
      content='
      <b-icon-group
        :iconList="iconList7"
        maxWidth="200px"
        @handleIconClick="handleIconClick"
      >
      </b-icon-group>
    '></code-h>
    <code-h
      lang="js"
      content="
            iconList7: [
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
      "></code-h>

    <h4>BIconGroup 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BIconGroup 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BIconGroup 的 Event：</h4>
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
      iconList: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '收藏'
        }
      ],
      iconList1: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
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
          disabled: false,
          fontSize: '16px'
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
          disabled: true,
          fontSize: '16px'
        }
      ],
      iconList3: [
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
      iconList4: [
        {
          name: '编辑',
          icon: 'el-icon-edit',
          color: '#3988FF',
          bgColor: '#EFF3FA',
          fontSize: '16px'
        },
        {
          name: '发现',
          color: 'green',
          fontSize: '18px'
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
          icon: 'el-icon-bell'
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
      iconList5: [
        {
          name: '编辑',
          // icon 和 img 同事存在时 优先使用 icon
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

        }
      ],

      iconList6: [
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
      iconList7: [
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
          des: 'icon组件 的配置列表',
          type: 'Array',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'pull',
          des: 'icon 组件的居中',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'maxWidth',
          des: 'icon 组件的最大宽',
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
