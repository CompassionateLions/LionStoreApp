<template>
  <div>
    <StoreHeader />
    <StoreSideBar />
    <div class="main">
      <div class="row movie-box-container">
        <MovieBox v-bind:movie="movie" :key="movie.id" v-for="movie in filteredProducts" />
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

<style scoped>
.main {
  margin-left: 300px;
}

.movie-box-container {
  display: flex;
  align-content: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.movie-box-container::after {
  display: none;
}

@media screen and (max-width: 992px) {
  .main {
    margin-left: 24px;
  }
}
</style>
