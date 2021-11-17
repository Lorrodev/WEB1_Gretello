<template>
    This is a test for Route :)<br>
    <br>
    {{ this.name }}
</template>

<script>
export default {
  name: 'Route',
  props: {
    name: String,
    description: String
  }
}
</script>
