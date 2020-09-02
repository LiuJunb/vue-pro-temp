<template>
  <div
    class="tag-group"
    :style="{width:width}"
  >
    <el-tag
      v-for="(tag, index) in tagList"
      :key="index"
      class="b-tag"
      v-bind="tag"
      :style="[tag.style,showPointer ? {cursor: 'pointer'}:'']"
      @click="handleTagClick(tag)"
      @close="handleClose(tag)">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
/*
 *@description: tag 标签
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-09-02 17:19:05
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *    this.$emit('handleTagClick', tag)
 *    this.$emit('handleClose', tag)
*/
export default {
  name: 'BTagGroup',
  components: {

  },
  mixins: [],
  props: {
    // tag组的配置列表
    tagList: {
      type: Array,
      default: function() {
        return [
          // {
          //   name: '哈的',
          //   type: 'success',
          //   closable: false
          // },
          // {
          //   name: '哈的撒旦法撒旦法1',
          //   type: 'warning',
          //   closable: false
          // },
          // {
          //   name: '哈的撒旦法撒旦法2',
          //   type: 'info',
          //   closable: false
          // },
          // {
          //   name: '哈的撒旦法撒旦法3',
          //   type: 'error',
          //   closable: false
          // },
          // {
          //   name: '哈的撒旦法撒旦法4',
          //   style: {
          //     'background-color': '#f0f9eb',
          //     'border-color': '#e1f3d8',
          //     color: '#67c23a'
          //   }
          // },
          // {
          //   name: '哈的撒旦法撒旦法5',
          //   style: {
          //     'background-color': '#00913a',
          //     'border-color': '#00313a',
          //     color: 'white'
          //   }
          // }
        ]
      }
    },
    // 组件的宽
    width: {
      type: String,
      default: null
    },
    // 是否显示手指
    showPointer: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {

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
    handleTagClick(tag) {
      this.$emit('handleTagClick', tag)
    },
    handleClose(tag) {
      this.$emit('handleClose', tag)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tag-group{
  .b-tag{
    margin:5px;
  }
}
</style>
