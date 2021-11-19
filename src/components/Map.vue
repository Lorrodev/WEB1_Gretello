<template>
    <div ref="container" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default{
    name: "Map",
    mounted: async function(){
        mapboxgl.accessToken = "pk.eyJ1IjoibG9ycm9kZXYiLCJhIjoiY2t2cXRmaGlqNmdqbDJxb2tueWJjbWkweSJ9.xlNyYEm9VW-7IN5HBzTFRw";
        new mapboxgl.Map({
            container: this.$refs.container,
            style: "mapbox://styles/lorrodev/ckvqvgodf4wc414mmwgv6av5z",
            center: [8.304369, 47.052349],
            zoom: 15
        });
    }
}
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'></style>

<style scoped>
.map {
    margin: 0 auto;
    height: 40vh;
    width: 40vw;
}
</style>