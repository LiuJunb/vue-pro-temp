<template>
  <el-row
    class="button-group"
    :style="{maxWidth:maxWidth, textAlign:pull}"
  >
    <template
      v-for="(item, index) in btnList">

      <el-button
        v-if="showBtn(item)&&!item.upload"
        :key="index"
        class="b-btn-ground"
        :type="item.type"
        :icon="item.icon"
        :size="item.size"
        :disabled="item.disabled"
        :circle="item.circle"
        :round="item.round"
        :plain="item.plain"
        :style="getBtnStyle(item)"
        @click="handleBtnClick(item)">
        <template v-if="item.name">
          {{item.name}}
        </template>
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
            class="b-btn-ground"
            :icon="item.icon"
            :size="item.size"
            :circle="item.circle"
            :disabled="item.disabled"
            :style="getBtnStyle(item)"
            >
            {{item.name}}
          </el-button>
        </el-upload>
      </slot>

    </template>
  </el-row>
</template>

<script>
/*
 *@description:
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-03 15:56:32
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *   this.$emit('handleBtnClick', item)
*/
import { hasPermission } from '../../../utils/permission.js'
export default {
  name: 'BButtonGroup',
  components: {

  },
  mixins: [],
  props: {
    // 按钮组的配置
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
    // 按钮的居中
    pull: {
      type: String,
      default: 'left' // left, right, center
    },
    // 按钮组的宽度
    maxWidth: {
      type: String,
      default: function() {
        return '100%'
      }
    },
    // 用户所拥有的权限，一般登录之后获取（如果不传递，默认会去sessionStorage找permissions属性）
    permissions: {
      type: Array,
      default: function() {
        return [
          // 'pp.list',
          // 'pp.detail'
        ]
      }
    }
  },
  data: function() {
    return {

    }
  },

  computed: {
    // 是否修该按钮背景颜色
    getBtnStyle() {
      return function(item) {
        const sty = {}
        // 如果有bgColor返回
        if (item.bgColor) {
          sty.backgroundColor = item.bgColor
          sty.borderColor = item.bgColor
          return sty
        }
        // 添加字体的颜色
        if (item.color) {
          sty.color = item.color
        }

        // 如果是文本按钮，修改按钮margin的样式
        if (item.type === 'text') {
          sty.margin = '0px 5px'
          sty.padding = '6px 0px'
        }

        // 是否需要浮动
        if (item.float) {
          sty.float = item.float
        }

        // 如果是不需要边框按钮
        if (item.noborder) {
          sty.border = '0px'
        }

        // 设计字体大小
        if (item.fontSize) {
          sty.fontSize = item.fontSize
        }

        return sty
      }
    },
    showBtn() {
      return (item) => {
        let result = true

        // sessionStorage.setItem('permissions', JSON.stringify(
        //   [
        //     'pp.list',
        //     'pp.detail'
        //   ]
        // ))

        // 该按钮有权限控制
        if (item.btnPerm) {
          if (this.permissions && this.permissions.length > 0) {
            // 使用传递进来的权限组
            // result = this.hasPermission(this.permissions, item.btnPerm)
            result = hasPermission(this.permissions, item.btnPerm)
          } else {
            // 使用sessionStorage中permissions的权限
            let pss = sessionStorage.getItem('permissions')
            if (pss) {
              pss = JSON.parse(pss)
            }
            // result = this.hasPermission(pss, item.btnPerm)
            result = hasPermission(pss, item.btnPerm)
          }
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
      // console.log('value=', item)
      this.$emit('handleBtnClick', item)
    }
    /**
     * 判断按钮是否有权限(默认是没有的)
     * @param permissions 登录后拿到所有的 permissions: ['','']
     * @param {} btnPermission 该按钮对应的权限:''
     */
    // hasPermission(permissions, btnPermission) {
    //   permissions = permissions || []
    //   let result = false
    //   permissions.forEach((element, index) => {
    //     // 用户拥有该 btnPermission 的权限
    //     if (btnPermission === element) {
    //       result = true
    //     }
    //   })
    //   return result
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-group{
  .b-btn-ground:hover,
  .b-btn-ground:focus{
    opacity: 0.7;
  }
  .btn-upload{
    display: inline-block;
    margin: 0px 10px;

  }
}
</style>
