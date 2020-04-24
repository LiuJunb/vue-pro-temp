<%_ if (component) { _%>
<template>
  <div class="<%= component.name %>">
    {{name}}
  </div>
</template>

<script>
export default {
  name: '<%= component.name %>',
  components: {

  },
  data() {
    return {
      name: '<%= component.name %>'
    }
  }
}
</script>
<%- component.style %>
<%_ } _%>
