<template>
    <div id="mapContainer" data-scroll>
        <div ref="container" class="map"></div>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default{
    name: "Map",
    mounted: async function(){
        mapboxgl.accessToken = "pk.eyJ1IjoibG9ycm9kZXYiLCJhIjoiY2t2cXRmaGlqNmdqbDJxb2tueWJjbWkweSJ9.xlNyYEm9VW-7IN5HBzTFRw";
        this.marker = new mapboxgl.Marker({
            color: "#000000"
        });
        this.map = new mapboxgl.Map({
            container: this.$refs.container,
            style: "mapbox://styles/lorrodev/ckwez4b8u0s1814pha99kqgc7",
            center: [8.306697, 47.051869],
            zoom: 13.4
        });
    },
    methods: {
        moveCursor: function(){
            let currentCoords = window.globalVars.coords[Math.floor(window.globalVars.scrollFraction * (window.globalVars.coords.length-190))];

            this.marker.setLngLat([currentCoords[0], currentCoords[1]])
            this.marker.addTo(this.map);
        }
    },
    created(){
       document.addEventListener('wheel', evt => 
       {
          this.moveCursor(evt);
       });
    }
}
</script>

<style src='mapbox-gl/dist/mapbox-gl.css'></style>

<style scoped>
.map {
    top: 30%;
    left: 30%;
    height: 15vw;
    width: 15vw;
    mix-blend-mode: exclusion;
}

#mapContainer{
    position: fixed;
    z-index: 100;
    background-image: url('~@/assets/zeitung-ripped.png');
    width: 25vw;
    height: 25vw;
    left: -50%;
    top: auto;
    right: auto;
    bottom: 3%;
    background-size: contain;
    overflow: hidden;
    -webkit-transform: rotate(-6deg);
    -ms-transform: rotate(-6deg);
    transform: rotate(-6deg);
}
</style>