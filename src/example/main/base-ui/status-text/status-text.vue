<template>
  <div class="status-text">
    <b-status-text
      value="0"
      :statusList="statusList"
    >
    </b-status-text>
    <b-status-text
      value="1"
      :statusList="statusList"
    >
    </b-status-text>
  </div>
</template>

<script>
export default {
  name: 'StatusText',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'StatusText'
    }
  },
  data: function() {
    return {
      statusList: {
        No: {
          value: '0',
          label: '否',
          color: 'red',
          id: '' // todo ...
        },
        Yes: {
          value: '1',
          label: '是',
          color: 'green',
          id: '' // todo ...
        }
      }
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
.status-text{

}
</style>
