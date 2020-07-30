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
      :style="tag.style"
      @close="handleClose(tag)">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
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
