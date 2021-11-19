<template>
    <div    class="snippet"
            v-bind:style="{ maxWidth: maxWidth,
                            maxHeight: maxHeight,
                            top: top,
                            left: left,
                            zIndex: zIndex
                        }"
    >
        {{ name }}<br>
        <img    :src="image.fields.file.url"
                style="max-width: 100%; max-height: 100%;"
        />
    </div>
</template>

<script>
export default {
    name: "Snippet", 
    props: {
        name: String,
        image: Object,
        maxWidth: String,
        maxHeight: String,
        zIndex: Number,
        top: String,
        left: String,
        scrollSpeed: Number
    },
    methods: {
        resize: function(){

        }
    }
}
</script>

<style scoped>
.snippet{
    position: absolute;
    border: 2px solid red;
    background-color: orange;
}
</style>