<template>
  <div class="demo">
    <h1>{{ msg }} Page</h1>
    <el-button @click="showDemoModal()">DemoModal</el-button>
    <demo-modal
      ref="demoModal"
      @handleBtnClick="handleBtnClick">
    </demo-modal>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
import {
  DemoModal
} from '@/components/index.js'
export default {
  name: 'Demo',
  components: {
    DemoModal
  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Demo'
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
    showDemoModal() {
      this.$refs.demoModal.show()
    },
    handleBtnClick(type, formData, dialog) {
      if (type === 1) {
        // console.log(type, formData)
        dialog.hide()
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo{

}
</style>
