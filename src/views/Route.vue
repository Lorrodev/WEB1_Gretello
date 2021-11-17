<template>
  <div class="about">
    <h1 id="testh1">This is a Route page</h1>
    <Route name="Test Route"/>
  </div>
</template>

<script>
import Route from '@/components/Route.vue'

    export default {
        name: 'RouteView',
        components: {
            Route
        }
    }
</script>