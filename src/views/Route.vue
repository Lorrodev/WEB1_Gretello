<template>
  <div class="about">
    <h1 id="testh1">This is a Route page</h1>
    <Route name="Test Route"/>
  </div>

    This is a test
    <p id="demo"></p>
    <button @click="testFunc">Test</button>
</template>

<script>
import Route from '@/components/Route.vue'

    export default {
        name: 'RouteView',
        components: {
            Route
        },
        methods: {
          testFunc: function(){alert("Test")}
        }
    }
</script>