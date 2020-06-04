<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">Genres</a>
        <div class="collapsible-body">
          <div :key="index" v-for="(genre, index) in genres">
            <CategoryItem v-bind:genre="genre" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";

import M from "materialize-css";

//VueX
// import { mapState } from "vuex";

export default {
  name: "CollabsibleGenreFilterContainer",
  computed: {
    genres() {
      return new Set(this.$store.state.shop.allProducts.map(movie => movie.genre).map(genres => genres.split(', ')).flat().sort());
    }
  },
  components: {
    CategoryItem
  },
  methods: {
    printAll() {
      console.log(this.allProducts);
    }
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style scoped>
</style>