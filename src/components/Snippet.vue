<template>
    <div class="snippet">
        {{ name }}<br>
        <img :height="height" style="width: {{ width }}; height:{{ height }}" :src="image.fields.file.url"/>
    </div>
</template>

<script>
export default {
    name: "Snippet", 
    props: {
        name: String,
        image: Object,
        width: String,
        height: String,
        zIndex: Number,
        startX: String,
        endX: String,
        scrollSPeed: Number
    },
    methods: {
        resize: function(){

        }
    }
}
</script>
