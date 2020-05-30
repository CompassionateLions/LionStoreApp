<template>
  <div id="app">
    <StoreHeader/>
    <StoreSideBar v-bind:catagories="catagories"/>
  </div>
</template>

<script>
import StoreHeader from './components/StoreHeader.vue'
import StoreSideBar from './components/StoreSideBar.vue'

export default {
  name: 'App',
  components: {
    StoreHeader,
    StoreSideBar
  },
  data(){
    return {
      catagories: [
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
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
