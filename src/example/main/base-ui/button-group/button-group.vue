<template>
  <div class="button-group">

    <b-title-tag name="b-button-group 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <b-button-group
      :btnList="btnList"
      @handleBtnClick="handleBtnClick"
    >
    </b-button-group>
    <code-h
      lang="html"
      content='
      <b-button-group
        :btnList="btnList"
        @handleBtnClick="handleBtnClick"
      >
      </b-button-group>
    '></code-h>
    <code-h
      lang="js"
      content="
      btnList: [
        {
          name: '默认1'
        },
        {
          icon: 'el-icon-search',
          name: '默认2'
        },
        {
          icon: 'el-icon-search',
          type: 'primary',
          name: '默认2'
        }
      ]

      handleBtnClick(item) {
        console.log(item)
      }
      "></code-h>

    <h4>2.按钮组居中</h4>
    <b-button-group
      :btnList="btnList"
      pull="center"
      @handleBtnClick="handleBtnClick"
    >
    </b-button-group>
    <code-h
      lang="html"
      content='
      <b-button-group
        :btnList="btnList"
        pull="center"
        @handleBtnClick="handleBtnClick"
      >
      </b-button-group>
    '></code-h>

    <h4>3.按钮组最大的宽度</h4>
    <b-button-group
      :btnList="btnList2"
      maxWidth="200px"
      @handleBtnClick="handleBtnClick"
    >
    </b-button-group>
    <code-h
      lang="html"
      content='
      <b-button-group
        :btnList="btnList2"
        maxWidth="200px"
        @handleBtnClick="handleBtnClick"
      >
      </b-button-group>
    '></code-h>
    <code-h
      lang="js"
      content="
         btnList2: [
        {
          name: '详情',
          type: 'text',
          // size: 'small',
          color: 'blue',
          btnPerm: ''
        },
        {
          name: '打印',
          type: 'text',
          // size: 'small',
          color: 'gray',
          btnPerm: ''
        },
        {
          name: '删除',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除1',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除2',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除3',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        }

      ],
      "></code-h>

    <h4>4.圆形，无边框 和 浮动 按钮</h4>
    <b-button-group
      :btnList="btnList3"
    >
    </b-button-group>
    <code-h
      lang="html"
      content='
      <b-button-group
        :btnList="btnList3"
      >
      </b-button-group>
    '></code-h>
    <code-h
      lang="js"
      content="
            btnList3: [
        {
          name: '默认1',
          bgColor: ''
        },

        {
          icon: 'el-icon-refresh',
          circle: true
        },
        {
          icon: 'el-icon-refresh',
          size: 'small',
          circle: true
        },
        {
          icon: 'el-icon-refresh',
          circle: true,
          noborder: true,
          fontSize: '17px'
        },
        {
          icon: 'el-icon-refresh',
          circle: false,
          float: 'right'
        },
        {
          icon: 'el-icon-upload2',
          circle: true,
          float: 'right'
        }
      ],
      "></code-h>

    <h4>2.（默认1）按钮添加授权标识</h4>
    <b-button-group
      :permissions="permissions"
      :btnList="btnList1">
      <template v-slot:upload-1="slotProps">
        <el-upload
          :style="{display: 'inline-block',margin:'0px 10px'}"
          action="https://jsonplaceholder.typicode.com/posts/"
          >
          <el-button
            :type="slotProps.item.type"
            :icon="slotProps.item.icon"
            :size="slotProps.item.size"
            :disabled="slotProps.item.disabled"
          >
            {{slotProps.item.name}}
          </el-button>
        </el-upload>
      </template>
    </b-button-group>

    <code-h
      lang="html"
      content='
      // 如果用不传递permissions属性（b-button-group默认获取sessionStorage中查找permissions属性的值）
      <b-button-group
        :permissions="permissions"
        :btnList="btnList1">
        <template v-slot:upload-1="slotProps">
          <el-upload
            :style="{display: "inline-block",margin:"0px 10px"}"
            action="https://jsonplaceholder.typicode.com/posts/"
            >
            <el-button
              :type="slotProps.item.type"
              :icon="slotProps.item.icon"
              :size="slotProps.item.size"
              :disabled="slotProps.item.disabled"
            >
              { {slotProps.item.name}}
            </el-button>
          </el-upload>
        </template>
      </b-button-group>

    '></code-h>
    <code-h
      lang="js"
      content="
      btnList1: [
        {
          name: '默认1',
          bgColor: '',
          // 添加了授权标识
          btnPerm: 'pp.list1'
        },
        {
          name: '默认2',
          bgColor: '',
          size: 'mini',
          btnPerm: ''
        },
        {
          icon: 'el-icon-search',
          bgColor: '',
          btnPerm: ''
        },
        {
          name: '查询',
          icon: 'el-icon-search',
          bgColor: '',
          btnPerm: ''
        },
        {
          name: '上传1',
          upload: true, // upload, slotName是必须的
          slotName: 'upload-1', //
          icon: 'el-icon-upload',
          type: 'primary',
          btnPerm: ''
        },
        {
          name: '上传2',
          upload: true, // upload, slotName是必须的
          slotName: 'upload-2', //
          icon: 'el-icon-upload',
          btnPerm: ''
        },
        {
          name: '新建',
          disabled: false,
          icon: 'search',
          type: 'primary',
          bgColor: 'green',
          btnPerm: ''
        },
        {
          name: '保存',
          type: 'primary'
        },
        {
          name: '导出',
          disabled: true,
          type: 'primary',
          bgColor: '',
          btnPerm: ''
        }
      ],

      // 用户拥有的所有权限
      permissions: [
        'pp.list',
        'pp.detail'
      ],
      "></code-h>

    <h4>BButtonGroup 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BButtonGroup 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BButtonGroup 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

    <h4>btnList 的配置</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataBtnListProps"
    >
    </b-advanced-table>

  </div>
</template>

<script>
import {
  TableColumnMixin
} from '@/mixins/index.js'
export default {
  name: 'ButtonGroup',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'ButtonGroup'
    }
  },
  data: function() {
    return {
      permissions: [
        'pp.list',
        'pp.detail'
      ],
      btnList: [
        {
          name: '默认1'
        },
        {
          icon: 'el-icon-search',
          name: '默认2'
        },
        {
          icon: 'el-icon-search',
          type: 'primary',
          name: '默认2'
        }
      ],
      btnList1: [
        {
          name: '默认1',
          bgColor: '',
          btnPerm: 'pp.list1'
        },
        {
          name: '默认2',
          bgColor: '',
          size: 'mini',
          btnPerm: ''
        },
        {
          icon: 'el-icon-search',
          bgColor: '',
          btnPerm: ''
        },
        {
          name: '查询',
          icon: 'el-icon-search',
          bgColor: '',
          btnPerm: ''
        },
        {
          name: '上传1',
          upload: true, // upload, slotName是必须的
          slotName: 'upload-1', //
          icon: 'el-icon-upload',
          type: 'primary',
          btnPerm: ''
        },
        {
          name: '上传2',
          upload: true, // upload, slotName是必须的
          slotName: 'upload-2', //
          icon: 'el-icon-upload',
          btnPerm: ''
        },
        {
          name: '新建',
          disabled: false,
          icon: 'search',
          type: 'primary',
          bgColor: 'green',
          btnPerm: ''
        },
        {
          name: '保存',
          type: 'primary'
        },
        {
          name: '导出',
          disabled: true,
          type: 'primary',
          bgColor: '',
          btnPerm: ''
        }
      ],
      btnList2: [
        {
          name: '详情',
          type: 'text',
          // size: 'small',
          color: 'blue',
          btnPerm: ''
        },
        {
          name: '打印',
          type: 'text',
          // size: 'small',
          color: 'gray',
          btnPerm: ''
        },
        {
          name: '删除',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除1',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除2',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        },
        {
          name: '删除3',
          type: 'text',
          // size: 'small',
          color: 'red',
          btnPerm: ''
        }

      ],
      btnList3: [
        {
          name: '默认1',
          bgColor: ''
        },

        {
          icon: 'el-icon-refresh',
          circle: true
        },
        {
          icon: 'el-icon-refresh',
          size: 'small',
          circle: true
        },
        {
          icon: 'el-icon-refresh',
          circle: true,
          noborder: true,
          fontSize: '17px'
        },
        {
          icon: 'el-icon-refresh',
          circle: false,
          float: 'right'
        },
        {
          icon: 'el-icon-upload2',
          circle: true,
          float: 'right'
        }
      ],
      tabDataProps: [
        {
          attr: 'btnList',
          des: '按钮组的配置',
          type: 'Array',
          select: ' ',
          default: '[ { key:value, 查看btnList的配置 }  ]'
          // func:''
        },
        {
          attr: 'pull',
          des: '按钮的居中',
          type: 'String',
          select: ' ',
          default: 'left'
          // func:''
        },
        {
          attr: 'maxWidth',
          des: '按钮组的宽度',
          type: 'String',
          select: ' ',
          default: '100%'
          // func:''
        },
        {
          attr: 'permissions',
          des: '用户所拥有的权限，一般登录之后获取（如果不传递，默认会去sessionStorage找permissions属性）',
          type: 'Array',
          select: ' ',
          default: '[]'
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
          name: 'handleBtnClick',
          des: '监听按钮的点击事件',
          func: 'func( item )'
        }
      ],
      tabDataBtnListProps: [
        {
          attr: 'name',
          des: '按钮的名字',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'bgColor',
          des: '按钮的背景颜色',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'size',
          des: '按钮的大小',
          type: 'Array',
          select: 'default / medium / small / mini',
          default: ' '
          // func:''
        },
        {
          attr: 'icon',
          des: '按钮的icon(element-ui 的icon)',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'type',
          des: '按钮的类型',
          type: 'String',
          select: 'primary / success / warning / danger / info / text',
          default: ' '
          // func:''
        },
        {
          attr: 'disabled',
          des: '禁用',
          type: 'Boolean',
          select: 'true / false',
          default: ' '
          // func:''
        },
        {
          attr: 'btnPerm',
          des: '按钮的授权标识',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'upload',
          des: '是否是上传的按钮',
          type: 'Boolean',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'slotName',
          des: '上传按钮对应的插槽(如果upload=true，必须要设置这个插槽的名称)',
          type: 'String',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'circle',
          des: '是否是圆形按钮',
          type: 'Boolean',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'noborder',
          des: '是否有边框',
          type: 'Boolean',
          select: ' ',
          default: ' '
          // func:''
        },
        {
          attr: 'float',
          des: '按钮的浮动',
          type: 'String',
          select: ' ',
          default: 'right / left'
          // func:''
        },
        {
          attr: 'fontSize',
          des: '按钮字体的大小',
          type: 'String',
          select: ' ',
          default: ' '
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
    handleBtnClick(item) {
      console.log(item)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-group{
}
</style>
