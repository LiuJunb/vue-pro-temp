<template>
  <div
    class="title-tag"
    :style="{width:width}"
  >
   <span
      class="name"
      :style="{fontSize:fontSize,color:color}">
      {{name}}
    </span>
   <span class="sub-name">
     <slot name="sub-name"></slot>
   </span>
   <div class="right">
     <slot name="title-right"></slot>
   </div>
  </div>
</template>

<script>
export default {
  name: 'BTitleTag',
  components: {

  },
  mixins: [],
  props: {
    // 组件的宽
    width: {
      type: String,
      default: null
    },
    // 标题
    name: {
      type: String,
      default: '标题'
    },
    // 字体大小
    fontSize: {
      type: String,
      default: '16px'
    },
    // 字体颜色
    color: {
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../style/_vars.scss";
.title-tag{
  border-bottom: 1px solid $tableBorderColor;
  padding: 8px 13px;
  .name{
    position: relative;
    color: $themeColor;
    font-size: 16px;
    &::before{
      content: '';
      position: absolute;
      top: 0px;
      left: -13px;
      width: 3px;
      height: 100%;
      background: $themeColor;
    }
  }

  .sub-name{
    margin-left: 5px;
  }

  .right {
    float: right;
  }
}
</style>
