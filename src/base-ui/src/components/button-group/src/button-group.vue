<template>
  <el-row
    class="button-group"
    :style="{maxWidth:maxWidth}"
  >
    <template
      v-for="(item, index) in btnList">

      <el-button
        v-if="showBtn(item)&&!item.upload"
        :key="index"
        :type="item.type"
        :icon="item.icon"
        :size="item.size"
        :disabled="item.disabled"
        :style="[hasBgColor(item), {color:item.color}]"
        @click="handleBtnClick(item)">
        {{item.name}}
      </el-button>

      <slot
        v-else-if="showBtn(item)&&item.upload"
        :name='item.slotName'
        :item="item"
      >
        <el-upload
          :key="index"
          class="btn-upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          >
          <el-button
            :type="item.type"
            :icon="item.icon"
            :size="item.size"
            :disabled="item.disabled"
            :style="hasBgColor(item)">
            {{item.name}}
          </el-button>
        </el-upload>
      </slot>

    </template>
  </el-row>
</template>

<script>
export default {
  name: 'BButtonGroup',
  components: {

  },
  mixins: [],
  props: {
    btnList: {
      type: Array,
      default: function() {
        return [
          {
            name: '默认',
            bgColor: '',
            btnPerm: ''
          },
          {
            name: '默认',
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
            name: '上传',
            upload: true, // upload, slotName是必须的
            slotName: 'upload-1', //
            icon: 'el-icon-upload',
            type: 'primary',
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
        ]
      }
    },
    maxWidth: {
      type: String,
      default: function() {
        return '100%'
      }
    }
    // 用户所拥有的权限
    // permissions: {
    //   type: Array,
    //   default: function() {
    //     return [
    //       'pp.list',
    //       'pp.detail'
    //     ]
    //   }
    // }
  },
  data: function() {
    return {

    }
  },

  computed: {
    // 是否修该按钮背景颜色
    hasBgColor() {
      return function(item) {
        // 如果没有bgColor直接返回
        if (!item.bgColor) return {}
        return {
          backgroundColor: item.bgColor,
          borderColor: item.bgColor
        }
      }
    },
    showBtn() {
      return (item) => {
        const result = true
        // 该按钮有权限控制 todo ...
        if (item.btnPerm) {

        }
        return result
      }
    }
  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleBtnClick(item) {
      console.log('value=', item)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-group{
  .btn-upload{
    display: inline-block;
    margin: 0px 10px;
  }
}
</style>
