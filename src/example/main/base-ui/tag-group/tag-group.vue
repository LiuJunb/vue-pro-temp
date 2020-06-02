<template>
  <div class="tag-group">
    <b-tag-group
      :tagList="tagList"
    >
    </b-tag-group>
    <b-tag-group
      width='400px'
      :tagList="tagList"
    >
    </b-tag-group>
  </div>
</template>

<script>
export default {
  name: 'TagGroup',
  components: {

  },
  mixins: [],
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
