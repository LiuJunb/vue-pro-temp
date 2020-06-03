<template>
  <div class="button-group">
    <br>
    <!-- 默认 -->
    <b-button-group
      pull="center"
    >
    </b-button-group>
    <br>
    <!-- 控制按钮权限 -->
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
    <br>
    <b-button-group
      :btnList="btnList2"
      maxWidth='200px'
    >
    </b-button-group>
    <br>
    <b-button-group
      :btnList="btnList3"
    >
    </b-button-group>
    <br>

  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  components: {

  },
  mixins: [],
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
.button-group{
}
</style>
