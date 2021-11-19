<template>
  <div class="about">
    <h1 id="testh1">Team Gretello</h1>
  </div>

  <div class="mainContent">
    <li v-for="snippet in snippets" :key="snippet.name">
      <Snippet  :name="snippet.fields.name" 
                :image="snippet.fields.image"
                :width="snippet.fields.width"
                :height="snippet.fields.height"
      />
    </li>
  </div>

    This is a test
    <p id="demo"></p>
    <button @click="testFunc">Test</button>
</template>

<script>
import contentful from '@/modules/contentful.js';
import Snippet from '@/components/Snippet.vue'

    export default {
        name: 'Main',
        components: {
            Snippet
        },
        data: function(){
          return {
            snippets: []
          };
        },
        created: async function(){
          this.snippets = await contentful.getSnippets();
        },
        methods: {
          testFunc: function(){alert("Test")}
        }
    }
</script>