<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">Genres</a>
        <div class="collapsible-body">
          <div :key="index" v-for="(genre, index) in allGenres">
            <CategoryItem v-bind:genre="genre" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";
import {mapActions} from "vuex";

import M from "materialize-css";

//VueX
import { mapGetters } from "vuex";

export default {
  name: "CollabsibleGenreFilterContainer",
  computed: {
    ...mapGetters(['allGenres'])
  },
  components: {
    CategoryItem
  },
  methods: {
    ...mapActions(['updateProductDisplay']),
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