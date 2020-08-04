<template>
  <div class="status-text">
    <span :style="{color:getCurrentStatus.color}">{{ getCurrentStatus.label }}</span>
  </div>
</template>

<script>
export default {
  name: 'BStatusText',
  components: {

  },
  mixins: [],
  props: {
    // 当前的值
    value: {
      type: [String, Number],
      default: ''
    },
    // 所有状态的列表
    statusList: {
      type: Object,
      default: function() {
        return {
          // No: {
          //   value: '0',
          //   label: '否',
          //   color: 'red',
          //   id: '' // todo ...
          // },
          // Yes: {
          //   value: '1',
          //   label: '是',
          //   color: 'green',
          //   id: '' // todo ...
          // }
        }
      }
    }
  },
  data: function() {
    return {

    }
  },
  computed: {
    getCurrentStatus() {
      let res = {}
      if (this.statusList) {
        Object.keys(this.statusList).forEach((key, index, arr) => {
          const s = this.statusList[key] // {value:1,label:'xxxx',...}
          if (s.value === this.value) {
            res = s
          }
        })
      }
      return res
    }
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
.status-text{

}
</style>
