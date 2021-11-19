<template>
    This is a test for Route :)<br>
    <br>
    {{ this.name }}
</template>

<script>
import contentful from '@/modules/contentful.js';

export default {
  name: 'Route',
  props: {
    name: String,
    description: String
  }
}

contentful
</script>
