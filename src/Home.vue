<template>
  <div id="app">
    <div class="row">
      <StoreHeader />

      <div class="col s4 m2">
        <StoreSideBar />
        <div class="filter-out" :key="product.id" v-for="product in filteredProducts">
          <div class="movie">
            <h5>{{product.name}} ({{product.year}})</h5>
            <p>$ {{product.price}}</p>
            <p>{{product.genre}}</p>
          </div>
        </div>
      </div>

      <div class="col s8 m10">
        <div class="col s12 m4"> <MovieBox /> </div>
       <div class="col s12 m4"> <MovieBox /> </div>
       <div class="col s12 m4"> <MovieBox /> </div>
       <div class="col s12 m4"> <MovieBox /> </div>
       <div class="col s12 m4"> <MovieBox /> </div>
       <div class="col s12 m4"> <MovieBox /> </div>
      </div>

    </div>
  </div>
</template>

<script>
//Import Materialize css

import StoreHeader from "./components/StoreHeader.vue";
import StoreSideBar from "./components/StoreSideBar.vue";
import MovieBox from "./components/MovieBox.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    StoreHeader,
    StoreSideBar,
    MovieBox
  },
  computed: {
    ...mapGetters(["filteredProducts"])
  },
  methods: {
    ...mapActions(["queryApiAllProducts"])
  },
  created() {
    this.queryApiAllProducts();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
* {
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
