<template>
        <img class="snippetImg" :src="image.fields.file.url"
            v-bind:style="{ width: width, height: height}"
        />
        <!--p>{{ name }}</p-->
</template>

<script>
export default {
    name: "Snippet", 
    props: {
        name: String,
        image: Object,
        width: String,
        height: String
    },
    methods: {
        resize: function(){

        }
    }
}
</script>

<style scoped>
p{
    margin-top: auto;
    margin-bottom: auto;
}
</style>