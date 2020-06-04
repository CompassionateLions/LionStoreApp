<template>
  <div id="app">
    <StoreHeader/>
    <StoreSideBar/>
  </div>
</template>

<script>
//Import Materialize css

import StoreHeader from './components/StoreHeader.vue'
import StoreSideBar from './components/StoreSideBar.vue'

import {mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    StoreHeader,
    StoreSideBar
  },
  methods: {
    ...mapActions(['queryApiAllProducts'])
  },
  created() {
    this.queryApiAllProducts();
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
