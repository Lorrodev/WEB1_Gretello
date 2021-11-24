<template>
    <div ref="container" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default{
    name: "Map",
    mounted: async function(){
        mapboxgl.accessToken = "pk.eyJ1IjoibG9ycm9kZXYiLCJhIjoiY2t2cXRmaGlqNmdqbDJxb2tueWJjbWkweSJ9.xlNyYEm9VW-7IN5HBzTFRw";
        this.map = new mapboxgl.Map({
            container: this.$refs.container,
            style: "mapbox://styles/lorrodev/ckvqvgodf4wc414mmwgv6av5z",
            center: [8.304094, 47.051358],
            zoom: 13.5
        });
    },
    data: function(){
        return {
            map: this.map,
        };
    },
    methods: {
        testFunc: function(){alert("Test")}
    }
}
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'></style>

<style scoped>
.map {
    position: fixed;
    top: 68%;
    left: 2%;
    height: 30%;
    width: 30%;
}
</style>