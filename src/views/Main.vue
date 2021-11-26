<template>
  <div id="loadingScreen"><br><br><br><br>...</div>
  <div class="scroll-wrapper" data-scroll-container>
    
    <div v-for="section in sections"
      :key="section.name"
      :id="section.fields.name"
      class="section" data-scroll-section
    >
      <div  v-for="snippet in section.fields.snippets"
            :key="snippet.name"
            class="snippet"
            data-scroll
            :data-scroll-speed="snippet.fields.scrollSpeed"
            v-bind:style="{ top: snippet.fields.top,
                            left: snippet.fields.left,
                            zIndex: snippet.fields.zIndex,
                            minWidth: snippet.fields.width,
                            minHeight: snippet.fields.height
                        }"
      >
        <Snippet  :name="snippet.fields.name" 
                  :image="snippet.fields.image"
                  :width="snippet.fields.width"
                  :height="snippet.fields.height"
        />
      </div>
    </div>
  </div>
  <Map/>
</template>

<script>
import contentful from '@/modules/contentful.js';
import Snippet from '@/components/Snippet.vue';
import Map from '@/components/Map.vue';

    export default {
        name: 'Main',
        components: {
            Snippet,
            Map
        },
        data: function(){
          return {
            sections: []
          };
        },
        created: async function(){
          this.sections = await contentful.getSections();
        }
    }
</script>

<style scoped>
.snippet{
    position: absolute;
    /*border: 2px solid red;
    background-color: orange;*/
}

.section {
  position: relative;
  height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: transparent;
}

/* Loading screen for current workaround :D */
#loadingScreen{
  position: fixed;
  z-index: 9001;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  font-size: 100px;
}

#emptySection0{
  height: 80vh !important;
}
</style>