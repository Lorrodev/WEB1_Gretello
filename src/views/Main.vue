<template>
  <div id="loadingScreen"><br><br><br><br>...</div>
  <div class="scroll-wrapper" data-scroll-container>
    
    <div v-for="section in sections"
      :key="section.name"
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

.scroll-wrapper{
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 114;
  display: block;
  overflow: hidden;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  background-color: #212222;
  background-image: url('../assets/grain.gif');
  background-position: 50% 50%;
  background-size: auto;
  opacity: 0.03;
  -o-object-fit: fill;
  object-fit: fill;

}
</style>