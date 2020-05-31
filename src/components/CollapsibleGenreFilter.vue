<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">
          Genres
        </a>
        <div class="collapsible-body">
          <div v-bind:key="genre.id" v-for="genre in genres">
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

export default {
  name: "CollabsibleFilterContainer",
  props: ["genres"],
  components: {
    CategoryItem
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style scoped>
</style>