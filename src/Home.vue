<template>
  <div id="app">

    <StoreHeader/>

    <div class="s4 m2">
          <StoreSideBar v-bind:genres="genres"/>
    </div>
    
  <div class="s8 m10">
        <MovieBox />

  </div>
    
  </div>
</template>

<script>
//Import Materialize css

import StoreHeader from './components/StoreHeader.vue'
import StoreSideBar from './components/StoreSideBar.vue'
import MovieBox from './components/MovieBox.vue'


export default {
  name: 'Home',
  components: {
    StoreHeader,
    StoreSideBar,
    MovieBox
  },
  data(){
    return {
      genres: [
        {
          name: "Drama",
          id: 1
        },
        {
          name: "Horror",
          id: 2
        },
        {
          name: "Thriller",
          id: 3
        },
        {
          name: "Action",
          id: 4
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
*{
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
