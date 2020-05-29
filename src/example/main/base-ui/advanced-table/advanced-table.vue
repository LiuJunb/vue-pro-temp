<template>
  <div class="advanced-table">
    <b-advanced-table>
      <template v-slot:date="slotProps">
        <a href="#">{{slotProps.row.date}}</a>
      </template>
      <template v-slot:address-header="">
        <a href="#">adress</a>
      </template>
    </b-advanced-table>
  </div>
</template>

<script>
export default {
  name: 'AdvancedTable',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'AdvancedTable'
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
.advanced-table{

}
</style>
